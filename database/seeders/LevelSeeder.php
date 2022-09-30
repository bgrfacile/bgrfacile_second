<?php

namespace Database\Seeders;

use App\Models\Level;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class LevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Level::create(['name' => '3ème', 'slug' => Str::slug('3ème')]);
        Level::create(['name' => '4ème', 'slug' => Str::slug('4ème')]);
        Level::create(['name' => '5ème', 'slug' => Str::slug('5ème')]);
        Level::create(['name' => '6ème', 'slug' => Str::slug('6ème')]);
        Level::create(['name' => 'Seconde C', 'slug' => Str::slug('Seconde C')]);
        Level::create(['name' => 'Seconde A', 'slug' => Str::slug('Seconde A')]);
        Level::create(['name' => 'Première C', 'slug' => Str::slug('Première C')]);
        Level::create(['name' => 'Première A', 'slug' => Str::slug('Première A')]);
        Level::create(['name' => 'Première D', 'slug' => Str::slug('Première D')]);
        Level::create(['name' => 'Terminale C', 'slug' => Str::slug('Terminale C')]);
        Level::create(['name' => 'Terminale A', 'slug' => Str::slug('Terminale A')]);
        Level::create(['name' => 'Terminale D', 'slug' => Str::slug('Terminale D')]);
    }
}
