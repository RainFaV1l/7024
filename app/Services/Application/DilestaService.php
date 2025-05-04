<?php

namespace App\Services\Application;

use App\Dtos\ApplicationDto;
use App\Entities\ApplicationEntity;
use App\Http\Contracts\ApplicationContract;
use App\Models\Application;

class DilestaService implements ApplicationContract
{
    public function create(ApplicationDto $applicationDto): ApplicationEntity
    {
        $application = Application::query()->create($applicationDto->toArray());

        $application->refresh();

        return ApplicationEntity::convert($application);
    }
}
