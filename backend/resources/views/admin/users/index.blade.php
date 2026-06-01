@extends('admin.layouts.app')

@section('title', 'Users')
@section('breadcrumb', 'Admin / Users')
@section('page_title', 'Users')

@section('content')
    <section class="panel">
        <div class="panel-header">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div>
                    <h2 class="font-semibold text-slate-950">User Directory</h2>
                    <p class="mt-1 text-sm text-slate-500">Review accounts and maintain role-based access.</p>
                </div>

                <form method="GET" action="{{ route('admin.users.index') }}" class="flex w-full flex-col gap-2 sm:flex-row xl:max-w-xl">
                    <input
                        name="q"
                        value="{{ $search }}"
                        class="form-input"
                        placeholder="Search name or email"
                    >
                    <div class="flex gap-2">
                        <button class="btn-primary">Search</button>
                        @if ($search)
                            <a href="{{ route('admin.users.index') }}" class="btn-secondary">Reset</a>
                        @endif
                    </div>
                </form>
            </div>
        </div>

        <div class="table-wrap">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Roles</th>
                        <th>Created</th>
                        @can('users.manage')
                            <th class="w-80">Update Roles</th>
                        @endcan
                    </tr>
                </thead>
                <tbody>
                    @forelse ($users as $user)
                        <tr>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-sm font-bold text-white">
                                        {{ strtoupper(substr($user->name, 0, 1)) }}
                                    </div>
                                    <div>
                                        <div class="font-semibold text-slate-950">{{ $user->name }}</div>
                                        <div class="text-xs text-slate-500">User ID #{{ $user->id }}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{{ $user->email }}</td>
                            <td>
                                <div class="flex flex-wrap gap-2">
                                    @forelse ($user->roles as $role)
                                        <span class="badge badge-info">{{ $role->name }}</span>
                                    @empty
                                        <span class="badge badge-neutral">No role</span>
                                    @endforelse
                                </div>
                            </td>
                            <td class="text-slate-500">{{ $user->created_at?->format('d M Y') }}</td>

                            @can('users.manage')
                                <td>
                                    <form method="POST" action="{{ route('admin.users.roles.update', $user) }}" class="space-y-3">
                                        @csrf
                                        <div class="grid grid-cols-2 gap-2">
                                            @foreach ($roles as $role)
                                                <label class="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700">
                                                    <input
                                                        type="checkbox"
                                                        name="roles[]"
                                                        value="{{ $role->name }}"
                                                        @checked($user->hasRole($role->name))
                                                        class="rounded border-slate-300 text-slate-950 focus:ring-slate-300"
                                                    >
                                                    <span>{{ $role->name }}</span>
                                                </label>
                                            @endforeach
                                        </div>
                                        <button class="btn-primary">Save roles</button>
                                    </form>
                                </td>
                            @endcan
                        </tr>
                    @empty
                        <tr>
                            <td class="py-10 text-center text-slate-500" colspan="@can('users.manage') 5 @else 4 @endcan">
                                No users found.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        <div class="border-t border-slate-200 px-5 py-4">
            {{ $users->links() }}
        </div>
    </section>
@endsection
