<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApplicationRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'type' => 'required|string',
            'name' => 'required|string',
            'phone' => 'required|string',
            'data' => 'nullable|json',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
