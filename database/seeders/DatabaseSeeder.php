<?php

namespace Database\Seeders;

use App\Models\Cours;
use App\Models\InfoUser;
use App\Models\User;
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
        $users = User::factory(10)->create();
        InfoUser::factory()->create();

        $this->call([
            EcoleSeeder::class,
            // RoleSeeder::class,
            // CycleLevelMatiereSeeder::class,
            // CoursSeeder::class,
        ]);
    }
}
