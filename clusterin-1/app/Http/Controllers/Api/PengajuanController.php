<?php
/**
 * @OA\Get(
 *     path="/api/pengajuan",
 *     summary="Get all akun",
 *     tags={"Akun"},
 *     @OA\Response(
 *         response=200,
 *         description="Successful operation"
 *     )
 * )
 */
namespace App\Http\Controllers\Api;
use App\Models\Pengajuan;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PengajuanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pengajuan = Pengajuan::orderBy('id', 'asc')->get();
        return response()->json([
            'status' => true,
            'data' => $pengajuan
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $pengajuan = new Pengajuan();
        $pengajuan->nama_warga = $request->nama_warga;
        $pengajuan->nik_warga = $request->nik_warga;
        $pengajuan->no_hp = $request->no_hp;
        $pengajuan->alamat = $request->alamat;
        $pengajuan->tujuan = $request->tujuan;
        $pengajuan->keterangan = $request->keterangan;
        $pengajuan->status = $request->status;
        $pengajuan->save();
        if($pengajuan){
            return response()->json([
                'status' => true,
                'message' => 'Data berhasil disimpan',
                'data' => $pengajuan
            ], 200);
        }
        else{
            return response()->json([
                'status' => false,
                'message' => 'Data gagal disimpan',
                'data' => $pengajuan
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $pengajuan = Pengajuan::find($id);        
        if($pengajuan){
            return response()->json([
                'status' => true,
                'message' => 'Data berhasil didapatkan',
                'data' => $pengajuan
            ], 200);
        }
        else{
            return response()->json([
                'status' => false,
                'message' => 'Data gagal didapatkan',
                'data' => $pengajuan
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $pengajuan = Pengajuan::find($id);
        $pengajuan->nama_warga = $request->nama_warga;
        $pengajuan->nik_warga = $request->nik_warga;
        $pengajuan->no_hp = $request->no_hp;
        $pengajuan->alamat = $request->alamat;
        $pengajuan->tujuan = $request->tujuan;
        $pengajuan->keterangan = $request->keterangan;
        $pengajuan->status = $request->status;
        $pengajuan->save();
        if($pengajuan){
            return response()->json([
                'status' => true,
                'message' => 'Data berhasil diubah',
                'data' => $pengajuan
            ], 200);
        }
        else{
            return response()->json([
                'status' => false,
                'message' => 'Data gagal diubah',
                'data' => $pengajuan
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $pengajuan = Pengajuan::find($id);
        if (empty($pengajuan)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan',
                'data' => $pengajuan
            ], 404);
        }
        $pengajuan->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus',
            'data' => $pengajuan
        ], 200);
    }
}
