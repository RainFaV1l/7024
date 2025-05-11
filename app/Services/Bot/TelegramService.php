<?php

namespace App\Services\Bot;

use App\Dtos\WebhookCallbackDto;
use App\Entities\ApplicationEntity;
use App\Enums\ApplicationStatusEnum;
use App\Exceptions\NotFoundException;
use App\Http\Contracts\BotContract;
use App\Mappers\WebhookCallbackMapper;
use App\Models\Application;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Telegram\Bot\Api;
use Telegram\Bot\Exceptions\TelegramSDKException;

readonly class TelegramService implements BotContract
{
    public function __construct(private Api $telegram)
    {
    }

    /**
     * @throws TelegramSDKException
     */
    public function send(ApplicationEntity $applicationEntity): void
    {
        $text = "*Новая заявка:*\n\n"
            . "*Имя:* $applicationEntity->name\n"
            . "*Телефон:* $applicationEntity->phone\n"
            . "*IP адрес:* $applicationEntity->ip\n"
            . "*Сайт:* {$applicationEntity->type->value}\n"
            . "*Статус:* {$applicationEntity->status->value}\n";

        if(!is_null($applicationEntity->data)) {
            $text .= "*Доп. информация:*\n";

            foreach ($applicationEntity->data as $key => $value) {
                $text .= "• *" . ucfirst($key) . ":* $value\n";
            }
        }

        $date = $applicationEntity->createdAt->format('d.m.Y H:i:s');

        $text .= "*Дата:* $date\n";

        $text .= "\n*Админ панель:* https://group7024.ru/admin";

        $this->telegram->sendMessage([
            'chat_id' => config('telegram.telegram_chat_id'),
            'text' => $text,
            'reply_markup' => json_encode([
                'inline_keyboard' => [
                    [
                        ['text' => '✅ Принять', 'callback_data' => (
                            new WebhookCallbackDto(
                                applicationId: $applicationEntity->id,
                                status: ApplicationStatusEnum::APPROVED
                            ))->toJson()
                        ],
                        ['text' => '❌ Отклонить', 'callback_data' => (
                            new WebhookCallbackDto(
                                applicationId: $applicationEntity->id,
                                status: ApplicationStatusEnum::APPROVED
                            ))->toJson()
                        ],
                    ],
                ]
            ]),
            'parse_mode' => 'Markdown',
        ]);
    }

    /**
     * @throws TelegramSDKException
     * @throws \JsonException
     * @throws NotFoundException
     */
    public function webhook(Request $request): JsonResponse
    {
        $update = $request->all();

        $callback = $update['callback_query'] ?? null;

        if (!$callback) {
            return response()->json(['ok' => true]);
        }

        \Log::info(json_encode($update, JSON_THROW_ON_ERROR));

        $webhookCallbackDto = WebhookCallbackMapper::convert($update['callback_query']['data']);

        try {
            $application = Application::query()->find($webhookCallbackDto->applicationId)->firstOrFail();

            $application->update([
                'status' => $webhookCallbackDto->status->value,
            ]);

            $this->telegram->answerCallbackQuery([
                'callback_query_id' => $callback['id'],
                'text' => "Заявка обновлена: {$webhookCallbackDto->status->value}",
                'show_alert' => false,
            ]);

            $this->telegram->editMessageText([
                'chat_id' => $callback['message']['chat']['id'],
                'message_id' => $callback['message']['message_id'],
                'text' => "✅ Заявка #{$webhookCallbackDto->applicationId} обновлена как *{$webhookCallbackDto->status->value}*",
                'parse_mode' => 'Markdown',
            ]);
        } catch (ModelNotFoundException $exception) {
            \Log::warning("Application not found", ['id' => $dto->applicationId ?? null]);
        } catch (\Throwable $e) {
            report($e);
        }

        return response()->json(['ok' => true]);
    }
}
