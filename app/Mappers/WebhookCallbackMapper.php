<?php

namespace App\Mappers;

use App\Dtos\WebhookCallbackDto;
use App\Enums\ApplicationStatusEnum;

final readonly class WebhookCallbackMapper
{
    public static function convert(array $data): WebhookCallbackDto
    {
        return new WebhookCallbackDto(
            applicationId: $data['application_id'],
            status: ApplicationStatusEnum::tryFrom($data['application_status']),
        );
    }
}
