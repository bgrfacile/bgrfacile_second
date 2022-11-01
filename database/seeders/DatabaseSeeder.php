<?php

namespace Database\Seeders;

use Faker\Factory;
use App\Models\User;
use App\Models\Cours;
use App\Models\Cycle;
use App\Models\Level;
use App\Models\InfoUser;
use Illuminate\Support\Str;
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
            EcoleSeeder::class,
        ]);
        $firstuser = User::create([
            'name' => 'bgrfacile super-admin',
            'email' => 'super@admin.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ]);
        $firstuser->infoUser()->create([
            "slug" => Str::slug('bgrfacile super-admin'),
            "first_name" => "bgrfacile",
            "last_name" => "super-admin",
            "image_path" => Factory::create()->imageUrl(),
            "address" => 'Brazzaville',
            "genre" => "M",
            "city" => 'Congo',
            "phone" => '0000000000',
        ]);
        $firstuser->assignRole('super-admin');
        $firstuser->demandesUser()->create([
            "response" => Factory::create()->randomElement(['accepter']),
            "user_id" => $firstuser->id,
            "ecole_id" => 1,
        ]);


        $users = User::factory(10)->create();
        $users->each(function ($user) {
            $user->infoUser()->create([
                // "user_id" => Factory::create()->randomElement(User::all()),
                "slug" => Factory::create()->slug(),
                "first_name" => Factory::create()->firstName(),
                "last_name" => Factory::create()->lastName(),
                "image_path" => Factory::create()->imageUrl(),
                "address" => Factory::create()->address(),
                "genre" => Factory::create()->randomElement(["M", "F"]),
                "city" => Factory::create()->city(),
                "phone" => Factory::create()->phoneNumber()
            ]);
            $user->assignRole(array_rand([
                "super-admin" => "super-admin",
                "admin" => "admin",
                "admin-ecole" => "admin-ecole",
                "apprenant" => "apprenant",
                "apprenant-ecole" => "apprenant-ecole",
                "parent" => "parent",
                "prof" => "prof",
            ]));
            $user->demandesUser()->create([
                "response" => Factory::create()->randomElement(['attente', 'accepter']),
                "user_id" => $user->id,
                "ecole_id" => Factory::create()->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
            ]);
        });

        $cycle1 = Cycle::find(1);
        $cycle1->levels()->attach([4, 3, 2, 1]);
        $cycle2 = Cycle::find(2);
        $cycle2->levels()->attach([4, 3, 2, 1]);
        $cycle3 = Cycle::find(3);
        $cycle3->levels()->attach([12, 11, 10, 9, 8, 7, 6, 5]);

        $matieresIds_college = [1, 6, 7, 10, 11, 12, 13, 14, 15];
        $matieresIds_lycee = [1, 2, 3, 4, 5, 6, 7, 9, 10, 13, 15];

        for ($i = 1; $i < 5; $i++) {
            $level = Level::find($i);
            $level->matieres()->attach($matieresIds_college);
        }

        $level5 = Level::find(5);
        $level5->matieres()->attach($matieresIds_lycee);
        $level6 = Level::find(6);
        $level6->matieres()->attach($matieresIds_lycee);
        $level7 = Level::find(7);
        $level7->matieres()->attach($matieresIds_lycee);

        $this->call([
            CoursSeeder::class,
        ]);
    }
}
