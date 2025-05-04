<?php

namespace App\Factories;

use App\Enums\ApplicationTypeEnum;
use App\Exceptions\NotFoundException;
use App\Http\Contracts\ApplicationContract;
use Illuminate\Container\Container;
use Illuminate\Contracts\Container\BindingResolutionException;

final class ApplicationManager
{
    private array $instances = [];

    public function __construct(private readonly Container $app, private readonly array $map){
        $this->instances = [];
    }

    /**
     * @throws NotFoundException|\Illuminate\Contracts\Container\BindingResolutionException
     */
    public function make(ApplicationTypeEnum $type): ApplicationContract
    {
        return $this->instances[$type->value] ??= $this->resolve($type);
    }

    /**
     * @throws BindingResolutionException
     */
    public function __invoke(ApplicationTypeEnum $type): ApplicationContract
    {
        return $this->app->make($type->value);
    }

    /**
     * @throws BindingResolutionException
     * @throws NotFoundException
     */
    private function resolve(ApplicationTypeEnum $type): ApplicationContract
    {
        $class = $this->map[$type->value] ?? null;

        if (!$class || !is_subclass_of($class, ApplicationContract::class)) {
            throw new NotFoundException("Тип «{$type->value}» не найден", 404);
        }

        return $this->app->make($class);
    }
}
