<?php

namespace App\Dtos;

use App\Enums\ApplicationStatusEnum;

final readonly class WebhookCallbackDto
{
    public function __construct(
        public int    $applicationId,
        public ApplicationStatusEnum    $status,
    )
    {
    }

    public function toArray(): array
    {
        return [
            'application_id' => $this->applicationId,
            'status' => $this->status->value,
        ];
    }

    public function toJson(): string {
        return json_encode($this->toArray());
    }
}
