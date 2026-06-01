@extends('admin.layouts.app')

@section('title', 'Orders')
@section('breadcrumb', 'Admin / UI / Orders')
@section('page_title', 'Orders (Reg.)')

@section('content')
    @include('admin.ui.partials.crud-page', [
        'module' => 'orders',
        'title' => 'Orders',
        'subtitle' => 'Order register (mock). Add/Edit/Delete records here (frontend-only).',
        'columns' => 'orderNo:Order No|party:Party|date:Date|amount:Amount|status:Status',
        'seed' => json_encode([
            ['orderNo' => 'ORD-0001', 'party' => '20 MICRONS', 'date' => '2026-05-25', 'amount' => '15000', 'status' => 'Pending'],
            ['orderNo' => 'ORD-0002', 'party' => 'AMPL INDUSTRIES', 'date' => '2026-05-24', 'amount' => '8200', 'status' => 'Approved'],
        ]),
    ])
@endsection

