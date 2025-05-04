<?php

namespace App\Services\Bot;

use App\Entities\ApplicationEntity;
use App\Http\Contracts\BotContract;
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
                        ['text' => '✅ Принять', 'callback_data' => "status:accepted:$applicationEntity->id"],
                        ['text' => '❌ Отклонить', 'callback_data' => "status:rejected:$applicationEntity->id"],
                    ],
                ]
            ]),
            'parse_mode' => 'Markdown',
        ]);
    }
}
