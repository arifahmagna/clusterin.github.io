<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pengajuan extends Model
{
    use HasFactory;

    protected $table = 'pengajuan';
    protected $fillable = [
        'nama_warga',
        'nik_warga',
        'no_hp',
        'alamat',
        'tujuan',
        'keterangan',
        'status'
    ];
}
