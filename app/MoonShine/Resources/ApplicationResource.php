<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use App\Http\Enums\ApplicationEnum;
use App\Models\Application;

use MoonShine\Laravel\Resources\ModelResource;
use MoonShine\UI\Components\Layout\Box;
use MoonShine\UI\Fields\ID;
use MoonShine\Contracts\UI\FieldContract;
use MoonShine\Contracts\UI\ComponentContract;
use MoonShine\UI\Fields\Json;
use MoonShine\UI\Fields\Select;
use MoonShine\UI\Fields\Text;

/**
 * @extends ModelResource<Application>
 */
class ApplicationResource extends ModelResource
{
    protected string $model = Application::class;

    protected string $title = 'Заявки';

    protected string $column = 'name';

    /**
     * @return list<FieldContract>
     */
    protected function indexFields(): iterable
    {
        return [
            ID::make()->sortable(),
            Text::make('Имя', 'name')->sortable(),
            Text::make('Телефон', 'phone'),
            Select::make('Сайт', 'site', fn($item) => ApplicationEnum::tryFrom($item->type)->label())->options(ApplicationEnum::options()),
            Text::make('IP', 'ip'),
            Json::make('Данные', 'data'),
        ];
    }

    /**
     * @return list<ComponentContract|FieldContract>
     */
    protected function formFields(): iterable
    {
        return [
            Box::make([
                ID::make(),
                Text::make('Имя', 'name')->sortable(),
                Text::make('Телефон', 'phone'),
                Select::make('Сайт', 'site', fn($item) => ApplicationEnum::tryFrom($item)->label())->options(ApplicationEnum::options()),
                Text::make('IP', 'ip'),
                Json::make('Данные', 'data')->nullable(),
            ])
        ];
    }

    /**
     * @return list<FieldContract>
     */
    protected function detailFields(): iterable
    {
        return [
            ID::make(),
            Text::make('Имя', 'name')->sortable(),
            Text::make('Телефон', 'phone'),
            Select::make('Сайт', 'site', fn($item) => ApplicationEnum::tryFrom($item)->label())->options(ApplicationEnum::options()),
            Text::make('IP', 'ip'),
            Json::make('Данные', 'data'),
        ];
    }

    /**
     * @param Application $item
     *
     * @return array<string, string[]|string>
     * @see https://laravel.com/docs/validation#available-validation-rules
     */
    protected function rules(mixed $item): array
    {
        return [
            'type' => 'required|string',
            'name' => 'required|string',
            'phone' => 'required|string',
            'data' => 'nullable|json',
        ];
    }
}
