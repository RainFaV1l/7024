<?php

namespace App\Enums;

enum ApplicationStatusEnum: string
{
    case PENDING = 'pending';
    case APPROVED = 'approved';
    case REJECTED = 'rejected';
    public function label(): string
    {
        return match ($this) {
            self::PENDING => 'В ожидании',
            self::APPROVED => 'Одобрен',
            self::REJECTED => 'Отклонен',
        };
    }

    public static function options(): array
    {
        return collect(self::cases())
            ->mapWithKeys(fn (self $case) => [$case->value => $case->label()])
            ->toArray();
    }
}
