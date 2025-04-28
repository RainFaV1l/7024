<?php

namespace App\Http\Controllers;

use App\Http\Dtos\ApplicationDto;
use App\Http\Enums\ApplicationEnum;
use App\Http\Exceptions\SiteNotFoundException;
use App\Http\Factories\ApplicationManager;
use App\Http\Requests\ApplicationRequest;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function index()
    {
        return Inertia::render('Index/Index', [
            'title' => 'GROUP 7024'
        ]);
    }

    public function studio()
    {
        return Inertia::render('Studio/Studio', [
            'title' => 'STUDIO 7024',
            'type' => 'studio',
        ]);
    }

    public function dilesta()
    {
        return Inertia::render('Dilesta/Dilesta', [
            'title' => 'Dilesta',
            'type' => 'dilesta',
        ]);
    }

    public function module()
    {
        return Inertia::render('Module/Module', [
            'title' => 'Module',
            'type' => 'module',
        ]);
    }

    /**
     * @throws BindingResolutionException
     * @throws SiteNotFoundException
     */
    public function create(ApplicationRequest $request) {
        app(ApplicationManager::class)->make($request->input('type'))->create(new ApplicationDto(
            name: $request->input('name'),
            phone: $request->input('phone'),
            ip: request()->ip(),
            type: ApplicationEnum::from($request->input('type')),
            data: null,
        ));

        return redirect()->back();
    }
}
