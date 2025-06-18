<?php

namespace App\Http\Controllers\Api;

use App\Models\Report;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $report = Report::orderBy('id', 'asc')->get();
        return response()->json([
            'status' => true,
            'data' => $report
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $report = new Report();
        $report->nama_pj = $request->nama_pj;
        $report->nama_tamu = $request->nama_tamu;
        $report->nik_tamu = $request->nik_tamu;
        $report->tujuan = $request->tujuan;
        $report->status = $request->status;
        $report->save();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil disimpan',
            'data' => $report
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $report = Report::find($id);
        if(empty($report)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan',
                'data' => $report
            ], 404);
        }  

        return response()->json([
            'status' => true,
            'message' => 'Data ditemukan',
            'data' => $report
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $report = Report::find($id);
        if(empty($report)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan',
                'data' => $report
            ], 404);
        }  
        $report->nama_pj = $request->nama_pj;
        $report->nama_tamu = $request->nama_tamu;
        $report->nik_tamu = $request->nik_tamu;
        $report->tujuan = $request->tujuan;
        $report->status = $request->status;
        $report->save();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil disimpan',
            'data' => $report
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $report = Report::find($id);
        if(empty($report)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan',
                'data' => $report
            ], 404);
        }  
        $report->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus',
            'data' => $report
        ], 200);
    }
}
