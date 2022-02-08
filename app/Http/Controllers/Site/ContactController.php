<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Mail\ContactMeMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        return view('site.contactMe');
    }
    public function postMail(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);
        Mail::to(env('MAIL_FROM_ADDRESS'))->send(new ContactMeMail($request));
        return back()->with('success', 'Votre message a bien été envoyé');
    }
}
