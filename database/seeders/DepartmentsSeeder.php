<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Department::create([
            'id' => 1,
            'name' => 'admin',
            'code' => 'ADMIN',
            'description' => 'Admin Department',
        ]);
        Department::create([
            'id' => 2,
            'name' => 'manager',
            'code' => 'MANAGER',
            'description' => 'Manager Department',
        ]);
        Department::create([
            'id' => 3,
            'name' => 'employee',
            'code' => 'EMPLOYEE',
            'description' => 'Employee Department',
        ]);
    }
}
