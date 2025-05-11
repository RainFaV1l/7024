<?php

namespace App\Http\Contracts;

use App\Entities\ApplicationEntity;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

interface BotContract
{
    public function send(ApplicationEntity $applicationEntity): void;
    public function webhook(Request $request): JsonResponse;
}
