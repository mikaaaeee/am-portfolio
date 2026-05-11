<?php

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactNotification extends Mailable
{
    use Queueable, SerializesModels;

    public $contact;

    public function __construct(Contact $contact)
    {
        $this->contact = $contact;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Inquiry from' . $this->contact->name,
        );
    }

    public function content(): Content
    {
        return new Content(
            htmlString: "
                <h2>You have a new message!</h2>
                <p><strong>Name:</strong> {$this->contact->name}</p>
                <p><strong>Email:</strong> {$this->contact->email}</p>
                <p><strong>Message:</strong></p>
                <p>{$this->contact->message}</p>
            ",
        );
    }
}
