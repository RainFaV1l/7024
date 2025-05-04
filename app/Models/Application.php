<?php

namespace App\Models;

use App\Enums\ApplicationStatusEnum;
use App\Enums\ApplicationTypeEnum;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $fillable = [
        'type',
        'name',
        'phone',
        'status',
        'data',
        'ip',
    ];

    protected $casts = [
        'data' => 'array',
        'created_at' => 'timestamp',
        'status' => ApplicationStatusEnum::class,
        'type' => ApplicationTypeEnum::class,
    ];
}
