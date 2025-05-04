<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $feker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            $report = new \App\Models\Report();
            $report->nama_pj = $feker->name();
            $report->nama_tamu = $feker->name();
            $report->nik_tamu = $feker->numerify();
            $report->tujuan = $feker->sentence();
            $report->status = $feker->randomElement(['masuk', 'keluar']);
            $report->save();

        }
    }
}
