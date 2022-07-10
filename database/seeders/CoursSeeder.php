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
        for ($i=0; $i < 100; $i++) {
            Cours::create([
                'title' => Factory::create()->sentence,
                'slug' => Factory::create()->slug,
                'description' => Factory::create()->paragraph,
                'coverImage' => Factory::create()->imageUrl,
            ]);
        }
    }
}
