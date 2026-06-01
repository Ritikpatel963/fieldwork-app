@extends('admin.layouts.app')

@section('title', 'Dashboard')
@section('breadcrumb', 'Admin / Overview')
@section('page_title', 'Dashboard')

@section('content')
    <section class="dashboard-hero">
        <div class="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px] xl:items-center">
            <div>
                <div class="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-300">
                    Field operations snapshot
                </div>
                <h2 class="mt-4 max-w-3xl text-3xl font-bold leading-tight">
                    Monitor users, customer records, and finance activity from a single admin workspace.
                </h2>
                <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                    Use the navigation to manage access, review customer master data, and track transaction status across field teams.
                </p>
            </div>

            <div class="grid grid-cols-2 gap-3">
                <div class="rounded-lg bg-white/10 p-4 ring-1 ring-white/10">
                    <div class="text-xs font-semibold uppercase tracking-wide text-slate-400">Pending</div>
                    <div class="mt-2 text-3xl font-bold">{{ number_format($stats['pending_transactions'] ?? 0) }}</div>
                    <div class="mt-1 text-xs text-slate-400">transactions</div>
                </div>
                <div class="rounded-lg bg-white/10 p-4 ring-1 ring-white/10">
                    <div class="text-xs font-semibold uppercase tracking-wide text-slate-400">Roles</div>
                    <div class="mt-2 text-3xl font-bold">{{ number_format($stats['roles'] ?? 0) }}</div>
                    <div class="mt-1 text-xs text-slate-400">access levels</div>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div class="metric-card">
            <div class="flex items-start justify-between">
                <div>
                    <div class="metric-label">Total Users</div>
                    <div class="mt-3 text-3xl font-black">{{ number_format($stats['users'] ?? 0) }}</div>
                </div>
                <div class="metric-icon bg-sky-50 text-sky-700">U</div>
            </div>
            <a href="{{ route('admin.users.index') }}" class="mt-5 inline-flex text-sm font-bold text-slate-600 hover:text-slate-950">Manage users</a>
        </div>

        <div class="metric-card">
            <div class="flex items-start justify-between">
                <div>
                    <div class="metric-label">Customers</div>
                    <div class="mt-3 text-3xl font-black">{{ number_format($stats['customers'] ?? 0) }}</div>
                </div>
                <div class="metric-icon bg-emerald-50 text-emerald-700">C</div>
            </div>
            <a href="{{ route('admin.customers.index') }}" class="mt-5 inline-flex text-sm font-bold text-slate-600 hover:text-slate-950">Open records</a>
        </div>

        <div class="metric-card">
            <div class="flex items-start justify-between">
                <div>
                    <div class="metric-label">Transactions</div>
                    <div class="mt-3 text-3xl font-black">{{ number_format($stats['transactions'] ?? 0) }}</div>
                </div>
                <div class="metric-icon bg-amber-50 text-amber-700">T</div>
            </div>
            <a href="{{ route('admin.transactions.index') }}" class="mt-5 inline-flex text-sm font-bold text-slate-600 hover:text-slate-950">Review ledger</a>
        </div>

        <div class="metric-card">
            <div class="flex items-start justify-between">
                <div>
                    <div class="metric-label">Total Value</div>
                    <div class="mt-3 text-2xl font-black">INR {{ number_format((float) ($stats['transaction_value'] ?? 0), 2) }}</div>
                </div>
                <div class="metric-icon bg-rose-50 text-rose-700">Rs</div>
            </div>
            <div class="mt-5 text-sm font-semibold text-slate-500">All recorded transaction value</div>
        </div>
    </section>

    <section class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1fr_420px]">
        <div class="panel overflow-hidden">
            <div class="panel-header flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 class="text-base font-bold text-slate-950">Transaction Activity</h2>
                    <p class="mt-1 text-sm text-slate-500">Latest finance records from the field.</p>
                </div>
                <a href="{{ route('admin.transactions.index') }}" class="btn-secondary">View all</a>
            </div>

            <div class="table-wrap">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Reference</th>
                            <th>Customer</th>
                            <th>Owner</th>
                            <th>Status</th>
                            <th class="text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($recentTransactions as $transaction)
                            @php
                                $statusClass = match ($transaction->status) {
                                    'approved' => 'badge-success',
                                    'rejected' => 'badge-danger',
                                    'pending' => 'badge-warning',
                                    default => 'badge-neutral',
                                };
                            @endphp
                            <tr>
                                <td>
                                    <div class="font-bold text-slate-950">TXN-{{ str_pad($transaction->id, 5, '0', STR_PAD_LEFT) }}</div>
                                    <div class="text-xs text-slate-500">{{ $transaction->created_at?->format('d M Y, h:i A') }}</div>
                                </td>
                                <td>
                                    <div class="font-semibold text-slate-950">{{ $transaction->customer?->name ?? 'Unknown customer' }}</div>
                                    <div class="text-xs text-slate-500">{{ $transaction->customer?->mobile ?? 'No mobile' }}</div>
                                </td>
                                <td>
                                    <div class="font-medium text-slate-900">{{ $transaction->user?->name ?? 'Unknown user' }}</div>
                                    <div class="text-xs text-slate-500">{{ $transaction->user?->email ?? '' }}</div>
                                </td>
                                <td><span class="badge {{ $statusClass }}">{{ ucfirst($transaction->status) }}</span></td>
                                <td class="text-right font-black text-slate-950">INR {{ number_format((float) $transaction->amount, 2) }}</td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="5" class="py-12 text-center text-slate-500">No transactions yet.</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

        <div class="space-y-6">
            <div class="panel">
                <div class="panel-header">
                    <h2 class="text-base font-bold text-slate-950">Access Overview</h2>
                    <p class="mt-1 text-sm text-slate-500">Recently created users and assigned roles.</p>
                </div>

                <div class="divide-y divide-slate-100">
                    @forelse ($recentUsers as $user)
                        <div class="flex items-start gap-3 px-5 py-4">
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-950 text-sm font-bold text-white">
                                {{ strtoupper(substr($user->name, 0, 1)) }}
                            </div>
                            <div class="min-w-0 flex-1">
                                <div class="flex items-start justify-between gap-3">
                                    <div>
                                        <div class="font-bold text-slate-950">{{ $user->name }}</div>
                                        <div class="truncate text-sm text-slate-500">{{ $user->email }}</div>
                                    </div>
                                    <span class="text-xs font-bold text-slate-400">#{{ $user->id }}</span>
                                </div>
                                <div class="mt-3 flex flex-wrap gap-2">
                                    @forelse ($user->roles as $role)
                                        <span class="badge badge-info">{{ $role->name }}</span>
                                    @empty
                                        <span class="badge badge-neutral">No role</span>
                                    @endforelse
                                </div>
                            </div>
                        </div>
                    @empty
                        <div class="px-5 py-10 text-center text-sm text-slate-500">No users yet.</div>
                    @endforelse
                </div>
            </div>

            <div class="panel p-5">
                <div class="flex items-start justify-between gap-4">
                    <div>
                        <h2 class="font-bold text-slate-950">Quick Actions</h2>
                        <p class="mt-1 text-sm text-slate-500">Jump into common admin tasks.</p>
                    </div>
                </div>
                <div class="mt-4 grid grid-cols-1 gap-2">
                    <a href="{{ route('admin.users.index') }}" class="btn-secondary justify-between">Assign roles <span>U</span></a>
                    <a href="{{ route('admin.customers.index') }}" class="btn-secondary justify-between">Search customers <span>C</span></a>
                    <a href="{{ route('admin.transactions.index') }}" class="btn-secondary justify-between">Filter transactions <span>T</span></a>
                </div>
            </div>
        </div>
    </section>
@endsection
