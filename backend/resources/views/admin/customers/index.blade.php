@extends('admin.layouts.app')

@section('title', 'Customers')
@section('breadcrumb', 'Admin / Customers')
@section('page_title', 'Customers')

@section('content')
    <section class="panel">
        <div class="panel-header">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                    <h2 class="font-semibold text-slate-950">Customer Master</h2>
                    <p class="mt-1 text-sm text-slate-500">Browse parties, contact details, and customer records.</p>
                </div>

                <form method="GET" action="{{ route('admin.customers.index') }}" class="flex w-full flex-col gap-2 sm:flex-row xl:max-w-xl">
                    <input
                        name="q"
                        value="{{ $search }}"
                        class="form-input"
                        placeholder="Search name, mobile, or email"
                    >
                    <div class="flex gap-2">
                        <button class="btn-primary">Search</button>
                        @if ($search)
                            <a href="{{ route('admin.customers.index') }}" class="btn-secondary">Reset</a>
                        @endif
                    </div>
                </form>
            </div>
        </div>

        <div class="table-wrap">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($customers as $customer)
                        <tr>
                            <td>
                                <div class="font-semibold text-slate-950">{{ $customer->name }}</div>
                                <div class="text-xs text-slate-500">Customer ID #{{ $customer->id }}</div>
                            </td>
                            <td>{{ $customer->mobile ?? '-' }}</td>
                            <td>{{ $customer->email ?? '-' }}</td>
                            <td class="max-w-sm text-slate-500">{{ $customer->address ?? '-' }}</td>
                            <td class="text-slate-500">{{ $customer->created_at?->format('d M Y') }}</td>
                        </tr>
                    @empty
                        <tr>
                            <td class="py-10 text-center text-slate-500" colspan="5">
                                No customers found.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <div class="border-t border-slate-200 px-5 py-4">
            {{ $customers->links() }}
        </div>
    </section>
@endsection
