<?php

namespace App\Exceptions;

use Exception;

class NotFoundException extends Exception
{
    public function __construct($message, $code) {
        parent::__construct($message, $code);
    }

}
