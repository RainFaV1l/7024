<?php

namespace App\Http\Dtos;

use App\Http\Enums\ApplicationEnum;

final readonly class ApplicationDto
{
    public function __construct(
        public string $name,
        public string $phone,
        public string $ip,
        public ApplicationEnum $type,
        public ?array $data
    )
    {
    }
}
