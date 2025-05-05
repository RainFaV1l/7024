<?php

namespace App\Entities;

use App\Enums\ApplicationStatusEnum;
use App\Enums\ApplicationTypeEnum;
use App\Models\Application;
use Carbon\Carbon;

final class ApplicationEntity
{
    public function __construct(
        public int                   $id,
        public string                $name,
        public string                $phone,
        public string                $ip,
        public ApplicationStatusEnum $status,
        public ?array                 $data,
        public ApplicationTypeEnum   $type,
        public Carbon                $createdAt,
    )
    {
    }

    public static function convert(Application $application): ApplicationEntity
    {
        return new ApplicationEntity(
            id: $application->id,
            name: $application->name,
            phone: $application->phone,
            ip: $application->ip,
            status: ApplicationStatusEnum::tryFrom($application->status),
            data: $application->data,
            type: ApplicationTypeEnum::tryFrom($application->type),
            createdAt: Carbon::parse($application->created_at),
        );
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'phone' => $this->phone,
            'type' => $this->type->value,
            'data' => $this->data,
            'status' => $this->status->value,
            'ip' => $this->ip,
            'created_at' => $this->createdAt,
        ];
    }
}
