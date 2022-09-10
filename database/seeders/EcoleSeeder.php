<?php

namespace Database\Seeders;

use App\Models\Ecole;
use Faker\Factory;
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
        for ($i = 0; $i < 10; $i++) {
            Ecole::create([
                'name' => Factory::create()->name(),
                'slug' => Factory::create()->slug,
                'email' => Factory::create()->email,
                'site_web' => Factory::create()->url,
                'description' => Factory::create()->sentence(50),
                'avantages' => Factory::create()->sentence(100),
                'path_logo' => Factory::create()->imageUrl(),
                'path_baniere' => Factory::create()->imageUrl(),
            ]);
        }
    }
}
