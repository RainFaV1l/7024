<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SetTelegramWebhook extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'telegram:set-webhook';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Set telegram webhook';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        \Telegram::setWebhook(['url' => config('telegram.bots.mybot.webhook_url')]);
    }
}
