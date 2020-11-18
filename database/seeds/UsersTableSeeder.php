<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // for users table
        $superAdmin = [
            'name' => 'SuperAdmin',
            'email' => 'supperadmin@gmail.com',
            'password' => Hash::make('admin123'),
        ];

        $admin = [
            'user_name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin123'),
        ];
        DB::table('users')->insert([$superAdmin, $admin]);
    }
}
