<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Mail\DonationMail;
use App\Models\Donation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class DonationController extends Controller
{
    public function index()
    {
        $donations = Donation::all()->reverse();
        return view('site.donation', [
            'donations' => $donations
        ]);
    }
    public function postDonation(Request $request)
    {
        Validator::make($request->all(), [
            'email' => 'required|email',
            'telephone' => 'required'
        ])->validate();
        // Donation::create([
        //     'email' => $request->email,
        //     'telephone' => $request->telephone,
        //     'pseudo' => $request->pseudo,
        //     'price' => "0",
        //     'message' => $request->message
        // ]);
        Mail::to(env('MAIL_FROM_ADDRESS'))->send(new DonationMail($request));
        return redirect()->back()->with('success', 'Merci pour votre don, nous serons notifiés dès que possible');
    }
}
