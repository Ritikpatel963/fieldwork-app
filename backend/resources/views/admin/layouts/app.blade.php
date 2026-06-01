<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Admin') - AMPL Fieldwork</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="admin-shell">
    <div class="min-h-screen lg:flex">
        <aside class="admin-sidebar">
            <div class="flex h-full flex-col">
                <div class="border-b border-white/10 px-5 py-5">
                    <a href="{{ route('admin.dashboard') }}" class="flex items-center gap-3">
                        <span class="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-sm font-black text-slate-950 shadow-sm">AF</span>
                        <span>
                            <span class="block text-base font-bold text-white">AMPL Fieldwork</span>
                            <span class="block text-xs font-semibold uppercase tracking-wide text-slate-400">Control Center</span>
                        </span>
                    </a>
                </div>

                <nav class="flex-1 overflow-y-auto pb-5">
                    <div class="sidebar-section">Overview</div>
                    <div class="mt-2 space-y-1 px-3">
                    <a href="{{ route('admin.dashboard') }}"
                       class="sidebar-link {{ request()->routeIs('admin.dashboard') ? 'sidebar-link-active' : '' }}">
                        <span class="sidebar-icon">D</span>
                        <span>Dashboard</span>
                    </a>
                    </div>

                    <div class="sidebar-section">Fieldwork (UI)</div>
                    <div class="mt-2 space-y-1 px-3">
                        <a href="{{ route('admin.ui.index') }}"
                           class="sidebar-link {{ request()->routeIs('admin.ui.*') && request()->routeIs('admin.ui.index') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">UI</span>
                            <span>Admin Home</span>
                        </a>
                        <a href="{{ route('admin.ui.parties') }}"
                           class="sidebar-link {{ request()->routeIs('admin.ui.parties') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">P</span>
                            <span>Parties (Customers)</span>
                        </a>
                        <a href="{{ route('admin.ui.orders') }}"
                           class="sidebar-link {{ request()->routeIs('admin.ui.orders') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">O</span>
                            <span>Orders</span>
                        </a>
                        <a href="{{ route('admin.ui.payments') }}"
                           class="sidebar-link {{ request()->routeIs('admin.ui.payments') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">₹</span>
                            <span>Payments</span>
                        </a>
                        <a href="{{ route('admin.ui.visits') }}"
                           class="sidebar-link {{ request()->routeIs('admin.ui.visits') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">V</span>
                            <span>Visits</span>
                        </a>
                        <a href="{{ route('admin.ui.dealers') }}"
                           class="sidebar-link {{ request()->routeIs('admin.ui.dealers') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">D</span>
                            <span>Dealer List</span>
                        </a>
                        <a href="{{ route('admin.ui.day_start') }}"
                           class="sidebar-link {{ request()->routeIs('admin.ui.day_start') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">DS</span>
                            <span>Day Start</span>
                        </a>
                        <a href="{{ route('admin.ui.activities') }}"
                           class="sidebar-link {{ request()->routeIs('admin.ui.activities') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">A</span>
                            <span>Activities</span>
                        </a>
                        <a href="{{ route('admin.ui.reports') }}"
                           class="sidebar-link {{ request()->routeIs('admin.ui.reports') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">R</span>
                            <span>My Report</span>
                        </a>
                        <a href="{{ route('admin.ui.expenses') }}"
                           class="sidebar-link {{ request()->routeIs('admin.ui.expenses') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">E</span>
                            <span>Expense Bill</span>
                        </a>
                        <a href="{{ route('admin.ui.leave') }}"
                           class="sidebar-link {{ request()->routeIs('admin.ui.leave') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">L</span>
                            <span>Leave</span>
                        </a>
                        <a href="{{ route('admin.ui.meetings') }}"
                           class="sidebar-link {{ request()->routeIs('admin.ui.meetings') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">M</span>
                            <span>My Meeting</span>
                        </a>
                        <a href="{{ route('admin.ui.product_demo') }}"
                           class="sidebar-link {{ request()->routeIs('admin.ui.product_demo') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">PD</span>
                            <span>Product Demo</span>
                        </a>
                        <a href="{{ route('admin.ui.new_deal') }}"
                           class="sidebar-link {{ request()->routeIs('admin.ui.new_deal') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">ND</span>
                            <span>New Deal</span>
                        </a>
                    </div>

                    <div class="sidebar-section">Management</div>
                    <div class="mt-2 space-y-1 px-3">
                    @can('users.view')
                        <a href="{{ route('admin.users.index') }}"
                           class="sidebar-link {{ request()->routeIs('admin.users.*') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">U</span>
                            <span>Users</span>
                        </a>
                    @endcan

                    @can('roles.view')
                        <a href="{{ route('admin.roles.index') }}"
                           class="sidebar-link {{ request()->routeIs('admin.roles.*') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">R</span>
                            <span>Roles & Permissions</span>
                        </a>
                    @endcan

                    @can('customers.view')
                        <a href="{{ route('admin.customers.index') }}"
                           class="sidebar-link {{ request()->routeIs('admin.customers.*') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">C</span>
                            <span>Customers</span>
                        </a>
                    @endcan
                    </div>

                    <div class="sidebar-section">Finance</div>
                    <div class="mt-2 space-y-1 px-3">
                    @can('transactions.view')
                        <a href="{{ route('admin.transactions.index') }}"
                           class="sidebar-link {{ request()->routeIs('admin.transactions.*') ? 'sidebar-link-active' : '' }}">
                            <span class="sidebar-icon">Rs</span>
                            <span>Transactions</span>
                        </a>
                    @endcan
                    </div>
                </nav>

                <div class="border-t border-white/10 p-4">
                    <div class="rounded-lg bg-white/10 p-3 ring-1 ring-white/10">
                        <div class="flex items-center gap-3">
                            <div class="flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-bold text-slate-950">
                                {{ strtoupper(substr(auth()->user()->name ?? 'U', 0, 1)) }}
                            </div>
                            <div class="min-w-0">
                                <div class="truncate text-sm font-semibold text-white">{{ auth()->user()->name ?? 'User' }}</div>
                                <div class="truncate text-xs text-slate-400">{{ auth()->user()->email ?? '' }}</div>
                            </div>
                        </div>
                        <form method="POST" action="{{ route('admin.logout') }}" class="mt-3">
                            @csrf
                            <button class="w-full rounded-md bg-white px-3 py-2 text-sm font-bold text-slate-950 transition hover:bg-slate-200">Logout</button>
                        </form>
                    </div>
                </div>
            </div>
        </aside>

        <main class="lg:ml-72 lg:flex-1">
            <header class="topbar">
                <div class="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <div>
                        <div class="text-xs font-semibold uppercase tracking-wide text-slate-500">@yield('breadcrumb', 'Admin')</div>
                        <h1 class="mt-1 text-2xl font-bold text-slate-950">@yield('page_title', 'Dashboard')</h1>
                    </div>

                    <div class="flex items-center gap-3">
                        <div class="hidden text-right sm:block">
                            <div class="text-xs font-semibold uppercase tracking-wide text-slate-400">Workspace</div>
                            <div class="text-sm font-bold text-slate-900">Admin Panel</div>
                        </div>
                        <div class="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 text-sm font-bold text-white">
                            {{ strtoupper(substr(auth()->user()->name ?? 'U', 0, 1)) }}
                        </div>
                    </div>
                </div>
            </header>

            <div class="px-5 py-6 lg:px-8">
                @if (session('status'))
                    <div class="mb-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                        {{ session('status') }}
                    </div>
                @endif

                @yield('content')
            </div>
        </main>
    </div>
</body>
</html>
