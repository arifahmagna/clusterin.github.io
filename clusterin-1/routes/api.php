<?php
use App\Http\Controllers\Api\AkunController;
use App\Http\Controllers\Api\PengajuanController;
use App\Http\Controllers\Api\ReportController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Ini AKUN 
Route::get('akun', [AkunController::class, 'index']);
Route::get('akun/{id}', [AkunController::class, 'show']);
Route::post('akun', [AkunController::class, 'store']);
Route::post('akun/{id}', [AkunController::class, 'update']);
Route::delete('akun/{id}', [AkunController::class, 'destroy']);

// INI REPORT
Route::get('report', [ReportController::class, 'index']);
Route::get('report/{id}', [ReportController::class, 'show']);
Route::post('report', [ReportController::class, 'store']);
Route::post('report/{id}', [ReportController::class, 'update']);
Route::delete('report/{id}', [ReportController::class, 'destroy']);

// INI PENGAJUAN
Route::get('pengajuan', [PengajuanController::class, 'index']);
Route::get('pengajuan/{id}', [PengajuanController::class, 'show']);
Route::post('pengajuan', [PengajuanController::class, 'store']);
Route::post('pengajuan/{id}', [PengajuanController::class, 'update']);
Route::delete('pengajuan/{id}', [PengajuanController::class, 'destroy']);