@extends('admin.layouts.app')

@section('title', 'Parties')
@section('breadcrumb', 'Admin / UI / Parties')
@section('page_title', 'Parties (Customers)')

@section('content')
    @include('admin.ui.partials.crud-page', [
        'module' => 'parties',
        'title' => 'Party Master',
        'subtitle' => 'Mobile app ke "Customer (Party)" module ka admin version (frontend-only).',
        'columns' => 'name:Party Name|mobile:Mobile|city:City|balance:Balance',
        'seed' => json_encode([
            ['name' => '292 - 20 MICRONS LIMITED', 'mobile' => '9925002964', 'city' => 'VADODDARA', 'balance' => '0 Db'],
            ['name' => 'AMPL INDUSTRIES', 'mobile' => '9630884927', 'city' => 'JABALPUR', 'balance' => '1200 Db'],
        ]),
    ])
@endsection

