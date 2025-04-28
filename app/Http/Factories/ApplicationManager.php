<?php

namespace App\Http\Factories;

use App\Http\Contracts\ApplicationContract;
use App\Http\Exceptions\SiteNotFoundException;
use Illuminate\Container\Container;
use Illuminate\Contracts\Container\BindingResolutionException;

final class ApplicationManager
{
    private array $instances = [];

    public function __construct(private Container $app, private array $map){
        $this->instances = [];
    }

    /**
     * @throws SiteNotFoundException|\Illuminate\Contracts\Container\BindingResolutionException
     */
    public function make(string $type): ApplicationContract
    {
        return $this->instances[$type] ??= $this->resolve($type);
    }

    /**
     * @throws BindingResolutionException
     */
    public function __invoke(string $type): ApplicationContract
    {
        return $this->app->make($type);
    }

    /**
     * @throws BindingResolutionException
     * @throws SiteNotFoundException
     */
    private function resolve(string $type): ApplicationContract
    {
        $class = $this->map[$type] ?? null;

        if (!$class || !is_subclass_of($class, ApplicationContract::class)) {
            throw new SiteNotFoundException("Тип «{$type}» не найден", 404);
        }

        return $this->app->make($class);
    }
}
