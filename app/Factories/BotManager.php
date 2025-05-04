<?php

namespace App\Factories;

use App\Enums\BotEnum;
use App\Exceptions\NotFoundException;
use App\Http\Contracts\BotContract;
use Illuminate\Container\Container;
use Illuminate\Contracts\Container\BindingResolutionException;

final class BotManager
{
    private array $instances = [];

    public function __construct(private readonly Container $app, private readonly array $map){
        $this->instances = [];
    }

    /**
     * @throws NotFoundException|\Illuminate\Contracts\Container\BindingResolutionException
     */
    public function make(BotEnum $type): BotContract
    {
        return $this->instances[$type->value] ??= $this->resolve($type);
    }

    /**
     * @throws BindingResolutionException
     */
    public function __invoke(BotEnum $type): BotContract
    {
        return $this->app->make($type->value);
    }

    /**
     * @throws BindingResolutionException
     * @throws NotFoundException
     */
    private function resolve(BotEnum $type): BotContract
    {
        $class = $this->map[$type->value] ?? null;

        if (!$class || !is_subclass_of($class, BotContract::class)) {
            throw new NotFoundException("Бот «{$type->value}» не найден", 404);
        }

        return $this->app->make($class);
    }
}
