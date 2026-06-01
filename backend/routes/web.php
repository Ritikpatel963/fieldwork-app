<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController as AdminAuthController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\TransactionController;
use App\Http\Controllers\Admin\UserController;

Route::get('/', function () {
    return redirect()->route('admin.login');
});

Route::prefix('admin')->name('admin.')->group(function () {
    // Admin auth (session-based)
    Route::middleware('guest')->get('/login', [AdminAuthController::class, 'showLogin'])->name('login');
    Route::middleware('guest')->post('/login', [AdminAuthController::class, 'login'])->name('login.submit');
    Route::post('/logout', [AdminAuthController::class, 'logout'])->middleware('auth')->name('logout');

    // Admin panel
    Route::middleware(['auth', 'role:Admin|Manager|Finance'])->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

        // Frontend-only admin UI (mock data)
        Route::prefix('ui')->name('ui.')->group(function () {
            Route::view('/', 'admin.ui.index')->name('index');
            Route::view('/parties', 'admin.ui.parties')->name('parties');
            Route::view('/orders', 'admin.ui.orders')->name('orders');
            Route::view('/payments', 'admin.ui.payments')->name('payments');
            Route::view('/visits', 'admin.ui.visits')->name('visits');
            Route::view('/dealers', 'admin.ui.dealers')->name('dealers');
            Route::view('/day-start', 'admin.ui.day_start')->name('day_start');
            Route::view('/activities', 'admin.ui.activities')->name('activities');
            Route::view('/expenses', 'admin.ui.expenses')->name('expenses');
            Route::view('/leave', 'admin.ui.leave')->name('leave');
            Route::view('/meetings', 'admin.ui.meetings')->name('meetings');
            Route::view('/product-demo', 'admin.ui.product_demo')->name('product_demo');
            Route::view('/new-deal', 'admin.ui.new_deal')->name('new_deal');
            Route::view('/reports', 'admin.ui.reports')->name('reports');
        });

        // Access control
        Route::get('/users', [UserController::class, 'index'])->middleware('permission:users.view')->name('users.index');
        Route::post('/users/{user}/roles', [UserController::class, 'updateRoles'])->middleware('permission:users.manage')->name('users.roles.update');

        Route::get('/roles', [RoleController::class, 'index'])->middleware('permission:roles.view')->name('roles.index');

        // Core modules (start with list pages; add CRUD later)
        Route::get('/customers', [CustomerController::class, 'index'])->middleware('permission:customers.view')->name('customers.index');

        Route::get('/transactions', [TransactionController::class, 'index'])->middleware('permission:transactions.view')->name('transactions.index');
    });
});
