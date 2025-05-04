<?php
/**
 * @OA\Get(
 *     path="/api/akun",
 *     summary="Get all akun",
 *     tags={"Akun"},
 *     @OA\Response(
 *         response=200,
 *         description="Successful operation"
 *     )
 * )
 */
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Akun;
use Illuminate\Http\Request;

class AkunController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $akun = Akun::orderBy('id', 'asc')->get();
        return response()->json([
            'status' => true,
            'data' => $akun
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dataAkun = new Akun();
        $dataAkun->fullname = $request->fullname;
        $dataAkun->nik_ktp = $request->nik_ktp;
        $dataAkun->nik_kk = $request->nik_kk;
        $dataAkun->no_hp = $request->no_hp;
        $dataAkun->status = $request->status;
        $dataAkun->role = $request->role;
        $dataAkun->save();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil disimpan',
            'data' => $dataAkun
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Akun::find($id);
        if($data) {
            return response()->json([
                'status' => true,
                'message' => 'Data ditemukan',
                'data' => $data
            ], 200);
        }
        else{
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan',
                'data' => $data
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $dataAkun = Akun::find($id);

        if (empty($dataAkun)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan',
                'data' => $dataAkun
            ], 404);
        }

        $dataAkun->fullname = $request->fullname;
        $dataAkun->nik_ktp = $request->nik_ktp;
        $dataAkun->nik_kk = $request->nik_kk;
        $dataAkun->no_hp = $request->no_hp;
        $dataAkun->status = $request->status;
        $dataAkun->role = $request->role;
        $dataAkun->save();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil diubah',
            'data' => $dataAkun
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $dataAkun = Akun::find($id);
        if (empty($dataAkun)) {
            return response()->json([
                'status' => false,
                'message' => 'Data tidak ditemukan',
                'data' => $dataAkun
            ], 404);
        }
        $dataAkun->delete();
        return response()->json([
            'status' => true,
            'message' => 'Data berhasil dihapus',
            'data' => $dataAkun
        ], 200);
    }
}
