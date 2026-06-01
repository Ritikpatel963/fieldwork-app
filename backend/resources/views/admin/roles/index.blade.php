@extends('admin.layouts.app')

@section('title', 'Roles & Permissions')
@section('breadcrumb', 'Admin / Roles')
@section('page_title', 'Roles & Permissions')

@section('content')
    <div class="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <section class="panel xl:col-span-2">
            <div class="panel-header">
                <h2 class="font-semibold text-slate-950">Role Matrix</h2>
                <p class="mt-1 text-sm text-slate-500">Current roles and the permissions granted to each access level.</p>
            </div>

            <div class="divide-y divide-slate-100">
                @foreach ($roles as $role)
                    <article class="px-5 py-5">
                        <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h3 class="text-base font-bold text-slate-950">{{ $role->name }}</h3>
                                <p class="mt-1 text-sm text-slate-500">{{ $role->permissions->count() }} permissions assigned</p>
                            </div>
                            <span class="badge badge-info">{{ $role->guard_name }} guard</span>
                        </div>

                        <div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                            @forelse ($role->permissions as $permission)
                                <span class="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                                    {{ $permission->name }}
                                </span>
                            @empty
                                <span class="text-sm text-slate-500">No permissions assigned.</span>
                            @endforelse
                        </div>
                    </article>
                @endforeach
            </div>
        </section>

        <section class="panel">
            <div class="panel-header">
                <h2 class="font-semibold text-slate-950">Permission Registry</h2>
                <p class="mt-1 text-sm text-slate-500">All permission keys available to the system.</p>
            </div>

            <div class="p-5">
                <div class="flex flex-wrap gap-2">
                    @foreach ($permissions as $permission)
                        <span class="badge badge-neutral">{{ $permission->name }}</span>
                    @endforeach
                </div>
            </div>
        </section>
    </div>
@endsection
