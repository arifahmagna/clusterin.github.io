<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::table('pengajuan', function (Blueprint $table) {
            $table->enum('tujuan', ['Permohonan', 'Pengaduan'])->change();
            $table->string('lampiran')->after('tujuan');
        });
    }

    public function down()
    {
        Schema::table('pengajuan', function (Blueprint $table) {
            $table->string('tujuan')->change(); // Balik ke string kalau di-rollback
            $table->dropColumn('lampiran');
        });
    }
};

