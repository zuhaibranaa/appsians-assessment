<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\{AuthController, EmployeeController, DepartmentController};

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::resource('/employees', EmployeeController::class);
    Route::resource('/departments', DepartmentController::class);
    Route::post('/logout', [AuthController::class, 'logout']);
});
