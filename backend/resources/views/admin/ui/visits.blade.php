@extends('admin.layouts.app')

@section('title', 'Visits')
@section('breadcrumb', 'Admin / UI / Visits')
@section('page_title', 'Visits')

@section('content')
    @include('admin.ui.partials.crud-page', [
        'module' => 'visits',
        'title' => 'Visit Register',
        'subtitle' => 'Visit entries (mock). Notes + status maintained locally (frontend-only).',
        'columns' => 'visitNo:Visit No|party:Party|purpose:Purpose|date:Date|status:Status',
        'seed' => json_encode([
            ['visitNo' => 'VIS-001', 'party' => '20 MICRONS', 'purpose' => 'Order', 'date' => '2026-05-25', 'status' => 'Open'],
            ['visitNo' => 'VIS-002', 'party' => 'AMPL INDUSTRIES', 'purpose' => 'Payment', 'date' => '2026-05-24', 'status' => 'Closed'],
        ]),
    ])
@endsection

