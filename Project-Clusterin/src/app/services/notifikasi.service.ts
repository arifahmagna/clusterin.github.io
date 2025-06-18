import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifikasiService {
  constructor() {}

  getNotifikasiHariIni() {
    return [
      {
        jenis: 'tamu',
        title: 'Kunjungan Baru',
        desc: 'Siti Nurhalizah berkunjung ke rumah Bapak RT',
        status: 'menunggu',
        waktu: '5 menit yang lalu'
      },
      {
        jenis: 'permohonan',
        title: 'Surat Permohonan',
        desc: 'Ahmad Fauzi mengajukan surat keterangan domisili',
        status: 'diproses',
        waktu: '1 jam yang lalu'
      },
      {
        jenis: 'pengaduan',
        title: 'Pengaduan',
        desc: 'Keluhan tentang sampah di Jalan Mawar',
        status: 'selesai',
        waktu: '2 jam yang lalu'
      }
    ];
  }
}
