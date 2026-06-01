<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // Permissions (start small; expand as modules grow)
        $permissions = [
            // Users & access control
            'users.view',
            'users.manage',
            'roles.view',
            'roles.manage',

            // Core modules
            'customers.view',
            'customers.manage',
            'transactions.view',
            'transactions.manage',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
        }

        // Roles
        $admin = Role::firstOrCreate(['name' => 'Admin', 'guard_name' => 'web']);
        $manager = Role::firstOrCreate(['name' => 'Manager', 'guard_name' => 'web']);
        $fieldAgent = Role::firstOrCreate(['name' => 'FieldAgent', 'guard_name' => 'web']);
        $finance = Role::firstOrCreate(['name' => 'Finance', 'guard_name' => 'web']);

        // Role to permissions mapping
        $admin->syncPermissions($permissions);

        $manager->syncPermissions([
            'users.view',
            'roles.view',
            'customers.view',
            'customers.manage',
            'transactions.view',
        ]);

        $finance->syncPermissions([
            'transactions.view',
            'transactions.manage',
            'customers.view',
        ]);

        $fieldAgent->syncPermissions([
            'customers.view',
        ]);

        // Optional: assign Admin to the first user (id=1) if present.
        $firstUser = User::query()->orderBy('id')->first();
        if ($firstUser) {
            $firstUser->assignRole($admin);
        }
    }
}
