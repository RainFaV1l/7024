<?php

namespace App\Http\Controllers;

use App\Dtos\ApplicationDto;
use App\Enums\ApplicationTypeEnum;
use App\Enums\BotEnum;
use App\Exceptions\NotFoundException;
use App\Factories\ApplicationManager;
use App\Factories\BotManager;
use App\Http\Requests\ApplicationRequest;
use App\Jobs\SendApplicationJob;
use Illuminate\Contracts\Container\BindingResolutionException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ApplicationController extends Controller
{
    /**
     * @throws BindingResolutionException
     * @throws NotFoundException
     */
    public function create(ApplicationRequest $request) {
        $applicationDto = new ApplicationDto(
            name: $request->input('name'),
            phone: $request->input('phone'),
            ip: request()->ip(),
            type: ApplicationTypeEnum::from($request->input('type')),
            data: null,
        );

        $applicationEntity = app(ApplicationManager::class)->make(ApplicationTypeEnum::tryFrom($request->input('type')))->create($applicationDto);

        dispatch(new SendApplicationJob($applicationEntity));

        return redirect()->back();
    }

    /**
     * @throws NotFoundException
     * @throws BindingResolutionException
     */
    public function handle(string $secret) {
        if($secret !== config('telegram.bots.mybot.webhook_secret')) {
            throw new NotFoundHttpException();
        }

        app(BotManager::class)->make(BotEnum::TELEGRAM)->webhook();
    }
}
