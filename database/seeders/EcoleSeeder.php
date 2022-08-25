<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EcoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fake = \Faker\Factory::create();
        for($i = 0; $i < 10; $i++) {
            $ecole = [
                'name' => $fake->name,
                'slug' => $fake->slug,
                'email' => $fake->email,
                'adresse' => $fake->address,
                'site_web' => $fake->url,
                'description' => $fake->text,
                'logo_path' => $fake->imageUrl,
                'image_path' => $fake->imageUrl,
                'created_at' => now(),
                'updated_at' => now(),
            ];
            DB::table('ecoles')->insert($ecole);
        }
    }
}
