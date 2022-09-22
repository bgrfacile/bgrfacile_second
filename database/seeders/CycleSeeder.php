<?php

namespace Database\Seeders;

use App\Models\Cycle;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CycleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Cycle::create([
            "name" => "collège général"
        ]);
        Cycle::create([
            "name" => "collège technique"
        ]);
        Cycle::create([
            "name" => "lycée général"
        ]);
        Cycle::create([
            "name" => "lycée technique"
        ]);
    }
}
