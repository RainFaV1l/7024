<?php

namespace App\Http\Services\Application;

use App\Http\Contracts\ApplicationContract;
use App\Http\Dtos\ApplicationDto;
use App\Models\Application;

class DilestaService implements ApplicationContract
{
    public function create(ApplicationDto $applicationDto): void
    {
        Application::query()->create([
            'site' => $applicationDto->type,
            'name' => $applicationDto->name,
            'phone' => $applicationDto->phone,
            'ip' => $applicationDto->ip,
        ]);
    }
}
