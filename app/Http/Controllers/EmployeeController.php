<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function __construct()
    {
        // Admin can create, update, and delete employees
        $this->middleware('role:admin')->only(['store', 'destroy']);

        // Admin & Manager can update employees
        $this->middleware('role:admin|manager')->only(['update']);

        // Admin & Manager can view all employees
        $this->middleware('role:admin|manager')->only(['index']);

        // Employees can only view their own profile
        $this->middleware('role:employee')->only(['show']);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $employees = Employee::with('department')->get();
        return response()->json(['employees' => $employees]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:employees,email',
            'phone' => 'required|string|max:20',
            'department_id' => 'required|exists:departments,id',
            'joining_date' => 'required|date',
        ]);

        $employee = Employee::create($validated);

        return response()->json(['message' => 'Employee created successfully', 'data' => $employee], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        return response()->json(['employee' => $employee->load('department')]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|string|email|unique:employees,email,' . $employee->id,
            'phone' => 'sometimes|string|max:20',
            'department_id' => 'sometimes|exists:departments,id',
            'joining_date' => 'sometimes|date',
        ]);

        $employee->update($validated);

        return response()->json(['message' => 'Employee updated successfully', 'data' => $employee]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        $employee->delete();
        return response()->json(['message' => 'Employee deleted successfully']);
    }
}
