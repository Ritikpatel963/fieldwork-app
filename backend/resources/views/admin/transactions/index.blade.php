@extends('admin.layouts.app')

@section('title', 'Transactions')
@section('breadcrumb', 'Admin / Finance')
@section('page_title', 'Transactions')

@section('content')
    <section class="panel">
        <div class="panel-header">
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-between">
                    <div>
                        <h2 class="font-semibold text-slate-950">Transaction Ledger</h2>
                        <p class="mt-1 text-sm text-slate-500">Filter payments by customer, field user, type, and approval status.</p>
                    </div>
                </div>

                <form method="GET" action="{{ route('admin.transactions.index') }}" class="grid grid-cols-1 gap-2 md:grid-cols-4">
                    <input
                        name="q"
                        value="{{ $search }}"
                        class="form-input"
                        placeholder="Search customer, user, notes"
                    >
                    <select name="status" class="form-input">
                        <option value="">All statuses</option>
                        @foreach ($statuses as $status)
                            <option value="{{ $status }}" @selected($selectedStatus === $status)>{{ ucfirst($status) }}</option>
                        @endforeach
                    </select>
                    <select name="type" class="form-input">
                        <option value="">All types</option>
                        @foreach ($types as $type)
                            <option value="{{ $type }}" @selected($selectedType === $type)>{{ ucfirst($type) }}</option>
                        @endforeach
                    </select>
                    <div class="flex gap-2">
                        <button class="btn-primary flex-1">Apply</button>
                        @if ($search || $selectedStatus || $selectedType)
                            <a href="{{ route('admin.transactions.index') }}" class="btn-secondary">Reset</a>
                        @endif
                    </div>
                </form>
            </div>
        </div>

        <div class="table-wrap">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Reference</th>
                        <th>Customer</th>
                        <th>User</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th class="text-right">Amount</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($transactions as $transaction)
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
                                <div class="font-semibold text-slate-950">TXN-{{ str_pad($transaction->id, 5, '0', STR_PAD_LEFT) }}</div>
                                <div class="text-xs text-slate-500">{{ $transaction->notes ? str($transaction->notes)->limit(42) : 'No notes' }}</div>
                            </td>
                            <td>
                                <div class="font-semibold text-slate-950">{{ $transaction->customer?->name ?? '-' }}</div>
                                <div class="text-xs text-slate-500">{{ $transaction->customer?->mobile ?? '' }}</div>
                            </td>
                            <td>
                                <div class="font-medium text-slate-900">{{ $transaction->user?->name ?? '-' }}</div>
                                <div class="text-xs text-slate-500">{{ $transaction->user?->email ?? '' }}</div>
                            </td>
                            <td><span class="badge badge-neutral">{{ ucfirst($transaction->type) }}</span></td>
                            <td><span class="badge {{ $statusClass }}">{{ ucfirst($transaction->status) }}</span></td>
                            <td class="text-right font-bold text-slate-950">INR {{ number_format((float) $transaction->amount, 2) }}</td>
                            <td class="text-slate-500">{{ $transaction->created_at?->format('d M Y') }}</td>
                        </tr>
                    @empty
                        <tr>
                            <td class="py-10 text-center text-slate-500" colspan="7">
                                No transactions found.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <div class="border-t border-slate-200 px-5 py-4">
            {{ $transactions->links() }}
        </div>
    </section>
@endsection
