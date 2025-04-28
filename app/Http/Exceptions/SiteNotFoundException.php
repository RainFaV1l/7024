<?php

namespace App\Http\Exceptions;

use Exception;

class SiteNotFoundException extends Exception
{
    public function __construct($message, $code) {
        parent::__construct($message, $code);
    }

}
