<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::table('akun', function (Blueprint $table) {
            $table->string('password')->after('role'); // letakkan setelah kolom 'role'
        });
    }

    public function down()
    {
        Schema::table('akun', function (Blueprint $table) {
            $table->dropColumn('password');
        });
    }
};

