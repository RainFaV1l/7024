<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;

class GenerateTelegramWebhookSecret extends Command
{
    protected $signature = 'telegram:generate-webhook-secret';
    protected $description = 'Generate a secret key for the Telegram webhook and write it to .env';

    public function handle(): void
    {
        $secret = Str::random(32);

        $path = base_path('.env');

        if (!file_exists($path)) {
            $this->error('.env file not found!');
            return;
        }

        $envContent = file_get_contents($path);

        if (str_contains($envContent, 'TELEGRAM_WEBHOOK_SECRET=')) {
            // Обновляем существующий ключ
            $envContent = preg_replace(
                '/^TELEGRAM_WEBHOOK_SECRET=.*$/m',
                'TELEGRAM_WEBHOOK_SECRET=' . $secret,
                $envContent
            );
        } else {
            // Добавляем новый ключ
            $envContent .= "\nTELEGRAM_WEBHOOK_SECRET=" . $secret;
        }

        file_put_contents($path, $envContent);

        $this->info('✅ Telegram webhook secret generated and saved to .env:');
        $this->line($secret);
    }
}
