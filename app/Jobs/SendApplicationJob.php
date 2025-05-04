<?php

namespace App\Jobs;

use App\Entities\ApplicationEntity;
use App\Enums\BotEnum;
use App\Exceptions\NotFoundException;
use App\Factories\BotManager;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class SendApplicationJob implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(public ApplicationEntity $applicationEntity)
    {
        //
    }

    /**
     * @throws BindingResolutionException
     * @throws NotFoundException
     */
    public function handle(): void
    {
        app(BotManager::class)->make(BotEnum::TELEGRAM)->send($this->applicationEntity);
    }
}
