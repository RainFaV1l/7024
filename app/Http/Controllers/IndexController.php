<?php

namespace App\Http\Controllers;

use App\Http\Exceptions\SiteNotFoundException;
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
}
