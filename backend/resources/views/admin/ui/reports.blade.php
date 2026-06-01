@extends('admin.layouts.app')

@section('title', 'My Report')
@section('breadcrumb', 'Admin / UI / My Report')
@section('page_title', 'My Report')

@section('content')
    @include('admin.ui.partials.crud-page', [
        'module' => 'reports',
        'title' => 'Daily Reports',
        'subtitle' => 'My Report module (mock). Aap report records add/edit/delete kar sakte ho.',
        'columns' => 'date:Date|owner:Owner|summary:Summary|status:Status',
        'seed' => json_encode([
            ['date' => '2026-05-25', 'owner' => 'Ritik Patel', 'summary' => '2 visits, 1 order, 1 payment', 'status' => 'Submitted'],
        ]),
    ])
@endsection

