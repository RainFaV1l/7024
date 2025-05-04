<?php

namespace App\Enums;

enum BotEnum: string
{
    case TELEGRAM = 'telegram';
    public function label(): string
    {
        return match ($this) {
            self::TELEGRAM => 'Telegram',
        };
    }

    public static function options(): array
    {
        return collect(self::cases())
            ->mapWithKeys(fn (self $case) => [$case->value => $case->label()])
            ->toArray();
    }
}
