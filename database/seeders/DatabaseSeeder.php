<?php

namespace Database\Seeders;

use App\Models\Cours;
use App\Models\InfoUser;
use App\Models\User;
use Faker\Factory;
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

        $users->each(function ($user) {
            $user->infoUser()->create([
                "user_id" => Factory::create()->randomElement(User::all()),
                "slug" => Factory::create()->slug(),
                "first_name" => Factory::create()->firstName(),
                "last_name" => Factory::create()->lastName(),
                "image_path" => Factory::create()->imageUrl(),
                "address" => Factory::create()->address(),
                "genre" => Factory::create()->randomElement(["M", "F"]),
                "city" => Factory::create()->city(),
                "phone" => Factory::create()->phoneNumber()
            ]);
        });

        $this->call([
            EcoleSeeder::class,
            CoursSeeder::class,
            // RoleSeeder::class,
            // CycleLevelMatiereSeeder::class,
        ]);
    }
}
