<?php

namespace Database\Seeders;

use App\Models\Employee;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmployeesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Employee::create([
            'name' => fake()->name(),
            'email' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'department_id' => 1,
            'joining_date' => fake()->dateTime(),
        ]);
        Employee::create([
            'name' => fake()->name(),
            'email' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'department_id' => 1,
            'joining_date' => fake()->dateTime(),
        ]);
        Employee::create([
            'name' => fake()->name(),
            'email' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'department_id' => 2,
            'joining_date' => fake()->dateTime(),
        ]);
        Employee::create([
            'name' => fake()->name(),
            'email' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'department_id' => 2,
            'joining_date' => fake()->dateTime(),
        ]);
        Employee::create([
            'name' => fake()->name(),
            'email' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'department_id' => 3,
            'joining_date' => fake()->dateTime(),
        ]);
        Employee::create([
            'name' => fake()->name(),
            'email' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'department_id' => 3,
            'joining_date' => fake()->dateTime(),
        ]);
    }
}
