<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|min:3',
            'email' => 'required|string|email',
            'password' => 'required|string|min:6',
        ];
    }
    public function messages() {

        return [
            'name.string'=> 'The :attribute doit être une chaine de caractère',
            'name.required'=> 'The :attribute est requis',
            'email.required'=> 'The :attribute est requis',
            'email.email'=> 'The :attribute is not valid email',
            'password.required'=> 'The :attribute est requis',
            'password.string'=> 'The :attribute n\'est pas une chaîne',
            'password.min'=> 'Le :attribute doit possèder min 6 caratere',
            'name.min'=> 'Le :attribute doit possèder min 3 caratere',
        ];
    }
}
