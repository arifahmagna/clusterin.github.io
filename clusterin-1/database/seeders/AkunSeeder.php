<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AkunSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            $akun = new \App\Models\Akun();
            $akun->fullname = $faker->name();
            $akun->nik_ktp = $faker->numerify();
            $akun->nik_kk = $faker->numerify();
            $akun->no_hp = $faker->phoneNumber();
            $akun->status = $faker->randomElement(['Aktif', 'Tidak Aktif']);
            $akun->role = $faker->randomElement(['RT', 'Satpam', 'Warga', 'Tamu']);
            $akun->save();
        }
    }
}
