<?php

namespace App\Models;

use App\Http\Enums\ApplicationEnum;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $fillable = [
        'site',
        'name',
        'phone',
        'data',
        'ip',
    ];

    protected $casts = [
//        'site' => ApplicationEnum::class,
        'data' => 'array',
    ];
}
