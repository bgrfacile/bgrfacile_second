<?php

namespace Database\Seeders;

use App\Models\Cycle;
use App\Models\Level;
use App\Models\Matiere;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        if (Role::count() == 0) {
            app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
            Role::create(['name' => 'super-admin']);
            Role::create(['name' => 'admin']);
            Role::create(['name' => 'etudiant']);
            Role::create(['name' => 'etudiant-has-ecole']);
            Role::create(['name' => 'professeur']);
            Role::create(['name' => 'promoteur']);
        }

        // Cycle::factory(5)->create()
        //     ->each(function ($cycle) {
        //         $cycle->levels()->saveMany(Level::factory(5)->make())
        //             ->each(function ($level) {
        //                 $level->matieres()->saveMany(Matiere::factory(5)->make());
        //             });
        //     });

        $matiere1 =  Matiere::create(['name' => 'Mathématiques']);
        $matiere2 = Matiere::create(['name' => 'Physique']);
        $matiere3 = Matiere::create(['name' => 'Chimie']);
        $matiere4 = Matiere::create(['name' => 'Histoire']);
        $matiere5 = Matiere::create(['name' => 'Géographie']);
        $matiere6 = Matiere::create(['name' => 'Français']);
        $matiere7 = Matiere::create(['name' => 'Anglais']);
        $matiere8 = Matiere::create(['name' => 'Espagnol']);
        $matiere9 = Matiere::create(['name' => 'Arabe']);
        $matiere10 = Matiere::create(['name' => 'Allemand']);
        $matiere11 = Matiere::create(['name' => 'Etranger']);
        $matiere12 = Matiere::create(['name' => 'Philosophie']);
        $matiere13 = Matiere::create(['name' => 'Sciences de la vie et de la Terre']);

        $level1 = Level::create(['name' => '1ère année']);
        $level2 = Level::create(['name' => '2ème année']);
        $level3 = Level::create(['name' => '3ème année']);
        $level4 = Level::create(['name' => '4ème année']);
        $level5 = Level::create(['name' => '5ème année']);
        $level6 = Level::create(['name' => '6ème année']);
        $level7 = Level::create(['name' => '7ème année']);
        $level8 = Level::create(['name' => '8ème année']);
        $level9 = Level::create(['name' => '9ème année']);
        $level10 = Level::create(['name' => '10ème année']);
        $level11 = Level::create(['name' => '11ème année']);
        $level12 = Level::create(['name' => '12ème année']);
        $level13 = Level::create(['name' => '3ème']);
        $level14 = Level::create(['name' => '4ème']);
        $level15 = Level::create(['name' => '5ème']);
        $level16 = Level::create(['name' => '6ème']);
        $level17 = Level::create(['name' => 'Seconde C']);
        $level18 = Level::create(['name' => 'Seconde A']);
        $level19 = Level::create(['name' => 'Première C']);
        $level20 = Level::create(['name' => 'Première A']);
        $level21 = Level::create(['name' => 'Première D']);
        $level22 = Level::create(['name' => 'Terminale C']);
        $level23 = Level::create(['name' => 'Terminale A']);
        $level24 = Level::create(['name' => 'Terminale D']);

        $arrayMatieres = [
            $matiere1->id,
            $matiere2->id,
            $matiere3->id,
            $matiere4->id,
            $matiere5->id,
            $matiere6->id,
            $matiere7->id,
            $matiere8->id,
            $matiere9->id,
            $matiere10->id,
            $matiere11->id,
            $matiere12->id,
            $matiere13->id,
        ];
        $arrayMatieresCollège = [
            $matiere1->id,
            $matiere2->id,
            $matiere3->id,
            $matiere4->id,
            $matiere5->id,
            $matiere6->id,
            $matiere7->id,
        ];
        $level13->matieres()->attach($arrayMatieresCollège);
        $level14->matieres()->attach($arrayMatieresCollège);
        $level15->matieres()->attach($arrayMatieresCollège);
        $level16->matieres()->attach($arrayMatieresCollège);
        $level17->matieres()->attach($arrayMatieres);
        $level18->matieres()->attach($arrayMatieres);
        $level19->matieres()->attach($arrayMatieres);
        $level20->matieres()->attach($arrayMatieres);
        $level21->matieres()->attach($arrayMatieres);
        $level22->matieres()->attach($arrayMatieres);
        $level23->matieres()->attach($arrayMatieres);
        $level24->matieres()->attach($arrayMatieres);

        $cycle1 = Cycle::create(['name' => 'Collège Général']);
        $cycle2 = Cycle::create(['name' => 'Collège Technique']);
        $cycle3 = Cycle::create(['name' => 'Lycée Technique']);
        $cycle4 = Cycle::create(['name' => 'Lycée Général']);

        $cycle1->levels()->attach([
            $level13->id,
            $level14->id,
            $level15->id,
            $level16->id,
        ]);

        $cycle2->levels()->attach([
            $level13->id,
            $level14->id,
            $level15->id,
            $level16->id,
        ]);

        $cycle4->levels()->attach([
            $level17->id,
            $level18->id,
            $level19->id,
            $level20->id,
            $level21->id,
            $level22->id,
            $level23->id,
            $level24->id,
        ]);
    }
}
