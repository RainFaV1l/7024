<?php

namespace App\Http\Contracts;

use App\Dtos\ApplicationDto;
use App\Entities\ApplicationEntity;

interface ApplicationContract
{
    public function create(ApplicationDto $applicationDto): ApplicationEntity;
}
