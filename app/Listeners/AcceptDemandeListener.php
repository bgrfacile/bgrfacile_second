<?php

namespace App\Listeners;

use App\Events\AcceptDemandeEvent;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class AcceptDemandeListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\AcceptDemandeEvent  $event
     * @return void
     */
    public function handle(AcceptDemandeEvent $event)
    {
        $user = User::findOrFail($event->user_id);
        $user->assignRole("apprenant-ecole");
    }
}
