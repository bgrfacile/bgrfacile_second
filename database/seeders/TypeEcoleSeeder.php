<?php

namespace Database\Seeders;

use App\Models\TypeEcole;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypeEcoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TypeEcole::create([
            "name" => "ecole"
        ]);
        TypeEcole::create([
            "name" => "université"
        ]);
        TypeEcole::create([
            "name" => "faculté"
        ]);
        TypeEcole::create([
            "name" => "centre de formation"
        ]);
    }
}
