<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Akun extends Model
{
    use HasFactory;

    protected $table = 'akun';
    protected $fillable = ['fullname', 'nik_ktp', 'nik_kk', 'no_hp', 'password', 'status','role'];
}
