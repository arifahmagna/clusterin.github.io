<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('akun', function (Blueprint $table) {
            $table->id();
            $table->string('fullname');
            $table->integer('nik_ktp');
            $table->integer('nik_kk');
            $table->string('no_hp');
            $table->enum('status', ['Aktif', 'Tidak Aktif']);
            $table->enum('role', ['RT', 'Satpam', 'Warga', 'Tamu']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('akun');
    }
};
