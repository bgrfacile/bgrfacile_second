<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (Permission::count() == 0) {
            app()[PermissionRegistrar::class]->forgetCachedPermissions();
            Permission::create(['name' => 'create ecole']);
            Permission::create(['name' => 'read ecole']);
            Permission::create(['name' => 'update ecole']);
            Permission::create(['name' => 'delete ecole']);
        }
    }
}
