<?php

namespace Database\Seeders;

use App\Models\Cycle;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CycleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Cycle::create(['name' => 'Collège Général', 'slug' => Str::slug('Collège Général')]);
        Cycle::create(['name' => 'Collège Technique', 'slug' => Str::slug('Collège Technique')]);
        Cycle::create(['name' => 'Lycée Général', 'slug' => Str::slug('Lycée Général')]);
        Cycle::create(['name' => 'Lycée Technique', 'slug' => Str::slug('Lycée Technique')]);
    }
}
