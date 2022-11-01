<?php

namespace Database\Seeders;

use App\Models\Cours;
use Faker\Factory;
use Illuminate\Database\Seeder;

class CoursSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 50; $i++) {
            $cour = Cours::create([
                'name' => Factory::create()->name(),
                'slug' => Factory::create()->slug(),
                'description' => Factory::create()->paragraph(),
                'path_image' => Factory::create()->imageUrl(),
            ]);
            $cour->cycles()->attach(Factory::create()->randomElement([1, 2, 3]));
            $cour->levels()->attach(Factory::create()->randomElement([1, 2, 3, 4]));
            $cour->matieres()->attach(Factory::create()->randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
            $cour->authors()->attach(Factory::create()->randomElement([1, 2, 3]));
            $cour->contents()->create([
                'type_content' => Factory::create()->randomElement(['text']),
                'content' => Factory::create()->randomHtml(2, 3),
            ]);
        }
    }
}
