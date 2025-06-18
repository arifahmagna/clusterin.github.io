import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  aktivitas = [
    {
      nama: 'Aburizal Pratama',
      status: 'check-in',
      statusColor: 'success',
      tanggal: '02 Mei 2025',
      alamat: 'Jl. Melati No.10',
      tujuan: 'Silaturahmi ke bp RT',
      alamatTujuan: 'Jln.Melati',
      estimasi: '2 jam',
      keterangan: 'Numpang Makan',
      waktuMasuk: '12:00',
      waktuKeluar: '14:00',
      isOpen: false
    },
    {
      nama: 'Aburizal Pratama',
      status: 'check-out',
      statusColor: 'failed',
      tanggal: '02 Mei 2025',
      alamat: 'Jl. Melati No.10',
      Tujuan: 'Silaturahmi ke bp andi ',
      AlamatTujuan: 'Jln.Melati',
      estimasi: '2 jam',
      keterangan: 'Numpang Makan',
      waktuMasuk: '12:00',
      waktuKeluar: '14:00',
      isOpen: false
    }
  ];

     constructor(private navController: NavController) { }

       ngOnInit() {
  }

   goToLaporan() {
       this.navController.navigateForward('/laporan');
     }

}

