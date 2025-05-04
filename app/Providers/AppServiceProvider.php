<?php

namespace App\Providers;

use App\Factories\ApplicationManager;
use App\Factories\BotManager;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(ApplicationManager::class, fn ($app) => new ApplicationManager($app, config('applications')));
        $this->app->singleton(BotManager::class, fn ($app) => new BotManager($app, config('bots')));
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        URL::forceHttps();
    }
}
