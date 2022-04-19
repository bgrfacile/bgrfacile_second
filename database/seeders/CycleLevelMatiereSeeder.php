<?php

namespace Database\Seeders;

use App\Models\Cycle;
use App\Models\Level;
use App\Models\Matiere;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class CycleLevelMatiereSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*
        create
        */
        $cycle1 = Cycle::create(['name' => 'Collège Général', 'slug' => Str::slug('Collège Général')]);
        $cycle2 = Cycle::create(['name' => 'Collège Technique', 'slug' => Str::slug('Collège Technique')]);
        $cycle4 = Cycle::create(['name' => 'Lycée Général', 'slug' => Str::slug('Lycée Général')]);
        $cycle3 = Cycle::create(['name' => 'Lycée Technique', 'slug' => Str::slug('Lycée Technique')]);

        // $level1 = Level::create(['name' => '1ère année']);
        // $level2 = Level::create(['name' => '2ème année']);
        // $level3 = Level::create(['name' => '3ème année']);
        // $level4 = Level::create(['name' => '4ème année']);
        $level13 = Level::create(['name' => '3ème', 'slug' => Str::slug('3ème')]);
        $level14 = Level::create(['name' => '4ème', 'slug' => Str::slug('4ème')]);
        $level15 = Level::create(['name' => '5ème', 'slug' => Str::slug('5ème')]);
        $level16 = Level::create(['name' => '6ème', 'slug' => Str::slug('6ème')]);
        $level17 = Level::create(['name' => 'Seconde C', 'slug' => Str::slug('Seconde C')]);
        $level18 = Level::create(['name' => 'Seconde A', 'slug' => Str::slug('Seconde A')]);
        $level19 = Level::create(['name' => 'Première C', 'slug' => Str::slug('Première C')]);
        $level20 = Level::create(['name' => 'Première A', 'slug' => Str::slug('Première A')]);
        $level21 = Level::create(['name' => 'Première D', 'slug' => Str::slug('Première D')]);
        $level22 = Level::create(['name' => 'Terminale C', 'slug' => Str::slug('Terminale C')]);
        $level23 = Level::create(['name' => 'Terminale A', 'slug' => Str::slug('Terminale A')]);
        $level24 = Level::create(['name' => 'Terminale D', 'slug' => Str::slug('Terminale D')]);

        $matiere1 = Matiere::create(['name' => 'Mathématiques', 'slug' => Str::slug('Mathématiques')]);
        $matiere2 = Matiere::create(['name' => 'Physique', 'slug' => Str::slug('Physique')]);
        $matiere3 = Matiere::create(['name' => 'Chimie', 'slug' => Str::slug('Chimie')]);
        $matiere4 = Matiere::create(['name' => 'Histoire', 'slug' => Str::slug('Histoire')]);
        $matiere5 = Matiere::create(['name' => 'Géographie', 'slug' => Str::slug('Géographie')]);
        $matiere6 = Matiere::create(['name' => 'Français', 'slug' => Str::slug('Français')]);
        $matiere7 = Matiere::create(['name' => 'Anglais', 'slug' => Str::slug('Anglais')]);
        $matiere8 = Matiere::create(['name' => 'Espagnol', 'slug' => Str::slug('Espagnol')]);
        $matiere9 = Matiere::create(['name' => 'Philosophie', 'slug' => Str::slug('Philosophie')]);
        $matiere10 = Matiere::create(['name' => 'Sciences de la vie et de la Terre', 'slug' => Str::slug('Sciences de la vie et de la Terre')]);
        $matiere11 = Matiere::create(['name' => 'Physique-Chimie', 'slug' => Str::slug('Physique-Chimie')]);
        $matiere12 = Matiere::create(['name' => 'Histoire-Géographie', 'slug' => Str::slug('Histoire-Géographie')]);
        $matiere13 = Matiere::create(['name' => 'EPS', 'slug' => Str::slug('EPS')]);
        $matiere14 = Matiere::create(['name' => 'Dictée-questions', 'slug' => Str::slug('Dictée-questions')]);
        $matiere15 = Matiere::create(['name' => 'Informatique', 'slug' => Str::slug('Informatique')]);


        /*
        Attach
        */

        //cycle
        $cycle1->levels()->attach([$level16->id, $level15->id, $level14->id, $level13->id]);
        $cycle2->levels()->attach([$level16->id, $level15->id, $level14->id, $level13->id]);
        // $cycle3->levels()->attach([$level17->id, $level18->id, $level19->id, $level20->id, $level21->id]);
        $cycle4->levels()->attach([$level17->id, $level18->id, $level19->id, $level20->id, $level21->id, $level22->id, $level23->id, $level24->id]);

        //level
        $matiereDuCollege = [
            $matiere1->id,
            $matiere6->id,
            $matiere7->id,
            $matiere10->id,
            $matiere11->id,
            $matiere12->id,
            $matiere13->id,
            $matiere14->id,
            $matiere15->id,
        ];
        $matiereDuLycee = [
            $matiere1->id,
            $matiere2->id,
            $matiere3->id,
            $matiere4->id,
            $matiere5->id,
            $matiere6->id,
            $matiere7->id,
            $matiere9->id,
            $matiere10->id,
            $matiere13->id,
            $matiere15->id,
        ];
        // collège
        $level13->matieres()->attach($matiereDuCollege);
        $level14->matieres()->attach($matiereDuCollege);
        $level15->matieres()->attach($matiereDuCollege);
        $level16->matieres()->attach($matiereDuCollege);

        // lycée
        $level17->matieres()->attach($matiereDuLycee); // seconde C
        $level18->matieres()->attach(array_merge($matiereDuLycee, [$matiere8->id])); // seconde A
        $level19->matieres()->attach($matiereDuLycee); // première C
        $level20->matieres()->attach(array_merge($matiereDuLycee, [$matiere8->id])); // première A
        $level21->matieres()->attach($matiereDuLycee); // première D
        $level22->matieres()->attach($matiereDuLycee); // terminale C
        $level23->matieres()->attach(array_merge($matiereDuLycee, [$matiere8->id])); // terminale A
        $level24->matieres()->attach($matiereDuLycee); // terminale D
    }
}
