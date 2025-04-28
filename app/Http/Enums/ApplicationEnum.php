<?php

namespace App\Http\Enums;

enum ApplicationEnum: string
{
    case STUDIO = 'studio';
    case DILESTA = 'dilesta';
    case MODULE = 'module';

    public function label(): string
    {
        return match ($this) {
            self::STUDIO => 'Studio',
            self::DILESTA => 'Dilesta',
            self::MODULE => 'Module',
        };
    }

    public static function options(): array
    {
        return collect(self::cases())
            ->mapWithKeys(fn (self $case) => [$case->value => $case->label()])
            ->toArray();
    }
}
