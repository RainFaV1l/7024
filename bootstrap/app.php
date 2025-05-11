<?php

use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Symfony\Component\HttpFoundation\Request;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);
        $middleware->trustProxies(
            at: [
                '192.168.0.0/16',
                '172.17.0.0/16',
                '10.0.0.0/8',
                '127.0.0.1',
            ],
            headers: Request::HEADER_X_FORWARDED_FOR
        );
        $middleware->validateCsrfTokens(except: [
            'webhook/telegram',
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
//        $exceptions->respond(function (Response $response, Throwable $exception, \Illuminate\Http\Request $request) {
//
//            // Skip custom Inertia error page for MoonShine admin routes
//            if ($request->is('admin*')) {
//                // Returning null lets the default exception handler process the response
//                return redirect('/admin/login');
//            }
//
//            return \Inertia\Inertia::render('Errors/Error', [
//                'status' => $response->getStatusCode(),
//            ])
//                ->toResponse($request)
//                ->setStatusCode($response->getStatusCode());
//        });
    })
    ->create();
