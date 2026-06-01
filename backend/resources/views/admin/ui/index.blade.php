@extends('admin.layouts.app')

@section('title', 'Admin UI')
@section('breadcrumb', 'Admin / UI')
@section('page_title', 'Admin Panel (Frontend Only)')

@section('content')
    <section class="panel">
        <div class="panel-header">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 class="text-base font-bold text-slate-950">AMPL Fieldwork Admin</h2>
                    <p class="mt-1 text-sm text-slate-500">
                        Ye pages frontend-only (mock data) ke saath banaye gaye hain. CRUD actions localStorage me save hote hain.
                    </p>
                </div>
                <div class="flex items-center gap-2">
                    <a class="btn-secondary" href="{{ route('admin.dashboard') }}">Back to Backend Dashboard</a>
                    <a class="btn-primary" href="{{ route('admin.ui.day_start') }}">Open Day Start</a>
                </div>
            </div>
        </div>

        <div class="p-5">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                <a href="{{ route('admin.ui.parties') }}" class="metric-card hover:shadow-md transition">
                    <div class="metric-label">Parties</div>
                    <div class="mt-2 text-2xl font-black text-slate-950">Customers</div>
                    <div class="mt-2 text-sm text-slate-500">Create / edit party master</div>
                </a>

                <a href="{{ route('admin.ui.orders') }}" class="metric-card hover:shadow-md transition">
                    <div class="metric-label">Orders</div>
                    <div class="mt-2 text-2xl font-black text-slate-950">Order (Reg.)</div>
                    <div class="mt-2 text-sm text-slate-500">Mock orders list + CRUD</div>
                </a>

                <a href="{{ route('admin.ui.payments') }}" class="metric-card hover:shadow-md transition">
                    <div class="metric-label">Payments</div>
                    <div class="mt-2 text-2xl font-black text-slate-950">Payment (Reg.)</div>
                    <div class="mt-2 text-sm text-slate-500">Payment entries + status</div>
                </a>

                <a href="{{ route('admin.ui.visits') }}" class="metric-card hover:shadow-md transition">
                    <div class="metric-label">Visits</div>
                    <div class="mt-2 text-2xl font-black text-slate-950">Visit</div>
                    <div class="mt-2 text-sm text-slate-500">Visit logs + notes</div>
                </a>
            </div>

            <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                <a href="{{ route('admin.ui.dealers') }}" class="metric-card hover:shadow-md transition">
                    <div class="metric-label">Dealer</div>
                    <div class="mt-2 text-2xl font-black text-slate-950">Dealer List</div>
                    <div class="mt-2 text-sm text-slate-500">Cards + menu actions</div>
                </a>
                <a href="{{ route('admin.ui.activities') }}" class="metric-card hover:shadow-md transition">
                    <div class="metric-label">Activities</div>
                    <div class="mt-2 text-2xl font-black text-slate-950">Activities</div>
                    <div class="mt-2 text-sm text-slate-500">Daily activity items</div>
                </a>
                <a href="{{ route('admin.ui.expenses') }}" class="metric-card hover:shadow-md transition">
                    <div class="metric-label">Expense</div>
                    <div class="mt-2 text-2xl font-black text-slate-950">Expense Bill</div>
                    <div class="mt-2 text-sm text-slate-500">Bills + attachments</div>
                </a>
                <a href="{{ route('admin.ui.reports') }}" class="metric-card hover:shadow-md transition">
                    <div class="metric-label">Reports</div>
                    <div class="mt-2 text-2xl font-black text-slate-950">My Report</div>
                    <div class="mt-2 text-sm text-slate-500">Daily report generator (mock)</div>
                </a>
            </div>

            <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                <a href="{{ route('admin.ui.leave') }}" class="metric-card hover:shadow-md transition">
                    <div class="metric-label">Leave</div>
                    <div class="mt-2 text-2xl font-black text-slate-950">Leave</div>
                    <div class="mt-2 text-sm text-slate-500">Apply + approval status</div>
                </a>
                <a href="{{ route('admin.ui.meetings') }}" class="metric-card hover:shadow-md transition">
                    <div class="metric-label">Meetings</div>
                    <div class="mt-2 text-2xl font-black text-slate-950">My Meeting</div>
                    <div class="mt-2 text-sm text-slate-500">Meeting scheduler</div>
                </a>
                <a href="{{ route('admin.ui.product_demo') }}" class="metric-card hover:shadow-md transition">
                    <div class="metric-label">Product</div>
                    <div class="mt-2 text-2xl font-black text-slate-950">Product Demo</div>
                    <div class="mt-2 text-sm text-slate-500">Demo requests</div>
                </a>
                <a href="{{ route('admin.ui.new_deal') }}" class="metric-card hover:shadow-md transition">
                    <div class="metric-label">Deal</div>
                    <div class="mt-2 text-2xl font-black text-slate-950">New Deal</div>
                    <div class="mt-2 text-sm text-slate-500">Deal pipeline</div>
                </a>
            </div>
        </div>
    </section>
@endsection

