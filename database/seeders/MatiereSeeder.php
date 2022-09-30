<?php

namespace Database\Seeders;

use App\Models\Matiere;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MatiereSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Matiere::create(['name' => 'Mathématiques', 'slug' => Str::slug('Mathématiques')]);
        Matiere::create(['name' => 'Physique', 'slug' => Str::slug('Physique')]);
        Matiere::create(['name' => 'Chimie', 'slug' => Str::slug('Chimie')]);
        Matiere::create(['name' => 'Histoire', 'slug' => Str::slug('Histoire')]);
        Matiere::create(['name' => 'Géographie', 'slug' => Str::slug('Géographie')]);
        Matiere::create(['name' => 'Français', 'slug' => Str::slug('Français')]);
        Matiere::create(['name' => 'Anglais', 'slug' => Str::slug('Anglais')]);
        Matiere::create(['name' => 'Espagnol', 'slug' => Str::slug('Espagnol')]);
        Matiere::create(['name' => 'Philosophie', 'slug' => Str::slug('Philosophie')]);
        Matiere::create(['name' => 'Sciences de la vie et de la Terre', 'slug' => Str::slug('Sciences de la vie et de la Terre')]);
        Matiere::create(['name' => 'Physique-Chimie', 'slug' => Str::slug('Physique-Chimie')]);
        Matiere::create(['name' => 'Histoire-Géographie', 'slug' => Str::slug('Histoire-Géographie')]);
        Matiere::create(['name' => 'EPS', 'slug' => Str::slug('EPS')]);
        Matiere::create(['name' => 'Dictée-questions', 'slug' => Str::slug('Dictée-questions')]);
        Matiere::create(['name' => 'Informatique', 'slug' => Str::slug('Informatique')]);
    }
}
