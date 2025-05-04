<?php

namespace App\Http\Contracts;

use App\Entities\ApplicationEntity;

interface BotContract
{
    public function send(ApplicationEntity $applicationEntity): void;
}
