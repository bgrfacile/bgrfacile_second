<?php

namespace Database\Seeders;

use App\Models\Cours;
use App\Models\Cycle;
use App\Models\InfoUser;
use App\Models\Level;
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
            $user->assignRole("apprenant");
        });

        $cycle1 = Cycle::find(1);
        $cycle1->levels()->attach([4, 3, 2, 1]);
        $cycle2 = Cycle::find(2);
        $cycle2->levels()->attach([4, 3, 2, 1]);
        $cycle3 = Cycle::find(3);
        $cycle3->levels()->attach([12, 11, 10, 9, 8, 7, 6, 5]);

        $matieresIds_college=[1,6,7,10,11,12,13,14,15];
        $matieresIds_lycee=[1,2,3,4,5,6,7,9,10,13,15];

        for ($i = 1; $i < 5; $i++) {
            $level= Level::find($i);
            $level->matieres()->attach($matieresIds_college);
        }

        $level5 = Level::find(5);
        $level5->matieres()->attach($matieresIds_lycee);
        $level6 = Level::find(6);
        $level6->matieres()->attach($matieresIds_lycee);
        $level7 = Level::find(7);
        $level7->matieres()->attach($matieresIds_lycee);


        $this->call([
            EcoleSeeder::class,
            CoursSeeder::class,
        ]);
    }
}
