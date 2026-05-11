<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use App\Mail\ContactNotification;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;


class ContactController extends Controller
{
    //1. to store contact
    public function store (Request $request){

    //1. validate
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email',
        'message' => 'required|string',
    ]);

    $contact = Contact::create($validated);

    Mail::to('amirahzulaikha183@gmail.com') -> send(new ContactNotification($contact));

    return response()->json(['message' => 'Message sent successfully!', 'data' => $contact], 201);
    }
}
