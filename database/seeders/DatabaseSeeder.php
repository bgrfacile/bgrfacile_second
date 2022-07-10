<?php

namespace Database\Seeders;

use App\Models\Cours;
use Illuminate\Database\Seeder;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    // use WithoutModelEvents;
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            CycleLevelMatiereSeeder::class,
            CoursSeeder::class,
        ]);
    }
}
