<?php

namespace App\Dtos;

use App\Enums\ApplicationTypeEnum;

final readonly class ApplicationDto
{
    public function __construct(
        public string                 $name,
        public string                 $phone,
        public string                 $ip,
        public ApplicationTypeEnum    $type,
        public ?array                 $data
    )
    {
    }

    public function toArray(): array
    {
        return [
            'name' => $this->name,
            'phone' => $this->phone,
            'type' => $this->type->value,
            'data' => $this->data,
            'ip' => $this->ip,
        ];
    }
}
