<?php

namespace Tests\Feature;

use App\Factories\ApplicationManager;
use App\Http\Exceptions\SiteNotFoundException;
use App\Services\Application\StudioService;
use Illuminate\Contracts\Container\BindingResolutionException;
use Tests\TestCase;

class ApplicationTest extends TestCase
{
    /**
     * @throws BindingResolutionException
     * @throws SiteNotFoundException
     */
    public function test_studio_application_is_handled(): void
    {
        $factory = app(ApplicationManager::class);

        $studioService = \Mockery::mock(StudioService::class);
        $studioService->shouldReceive('create')->andReturnTrue();

        $this->instance(StudioService::class, $studioService);

        $service = $factory->make('studio');
        $this->assertTrue($service->create());
    }
}
