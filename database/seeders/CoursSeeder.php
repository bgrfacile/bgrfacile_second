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
        for ($i = 0; $i < 20; $i++) {
            Cours::create([
                'name' => Factory::create()->name(),
                'slug' => Factory::create()->slug(),
                'description' => Factory::create()->paragraph(),
                'path_image' => Factory::create()->imageUrl(),
            ]);
        }
    }
}
