<?php

namespace App\Http\Controllers;

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
            'title' => 'STUDIO 7024'
        ]);
    }

    public function dilesta()
    {
        return Inertia::render('Development', [
            'title' => 'Dilesta'
        ]);
    }

    public function module()
    {
        return Inertia::render('Development', [
            'title' => 'Module'
        ]);
    }
}
