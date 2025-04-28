<?php

namespace App\Http\Contracts;

use App\Http\Dtos\ApplicationDto;

interface ApplicationContract
{
    public function create(ApplicationDto $applicationDto): void;
}
