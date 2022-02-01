<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        // \App\Models\SlugUser::factory(2)->create();
        // \App\Models\Cycle::factory(5)->create();
        // \App\Models\Level::factory(15)->create();
        // \App\Models\Matiere::factory(30)->create();
        if (Role::count() == 0) {
            app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();
            Role::create(['name' => 'super-admin']);
            Role::create(['name' => 'admin']);
            Role::create(['name' => 'etudiant']);
            Role::create(['name' => 'etudiant-has-ecole']);
            Role::create(['name' => 'professeur']);
            Role::create(['name' => 'promoteur']);
        }
    }
}
