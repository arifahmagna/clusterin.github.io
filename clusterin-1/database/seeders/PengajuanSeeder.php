<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PengajuanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            $pengajuan = new \App\Models\Pengajuan();
            $pengajuan->nama_warga = $faker->name();
            $pengajuan->nik_warga = $faker->numerify();
            $pengajuan->no_hp = $faker->phoneNumber();
            $pengajuan->alamat = $faker->address();
            $pengajuan->tujuan = $faker->randomElement(['Pengaduan', 'Permohonan']);
            $pengajuan->lampiran = $faker->sentence();
            $pengajuan->keterangan = $faker->sentence();
            $pengajuan->status = $faker->randomElement(['Diproses', 'Ditolak', 'Selesai']);
            $pengajuan->save();
        }
    }
}
