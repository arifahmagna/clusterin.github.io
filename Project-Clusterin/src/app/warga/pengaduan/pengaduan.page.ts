import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-pengaduan',
  templateUrl: './pengaduan.page.html',
  styleUrls: ['./pengaduan.page.scss'],
})
export class PengaduanPage implements OnInit {
  selectedStatus: string = 'Semua';

  pengaduanList = [
    {
      judul: 'Pengaduan Jalan Berlubang',
      tanggal: '12 Juni 2025',
      status: 'Diproses',
      catatan: 'Akan ditindak lanjuti minggu depan',
    },
    {
      judul: 'Pengaduan Sampah Menumpuk',
      tanggal: '10 Juni 2025',
      status: 'Selesai',
      catatan: 'Sudah dibersihkan oleh petugas',
    },
    {
      judul: 'Pengaduan Lampu Jalan Mati',
      tanggal: '5 Juni 2025',
      status: 'Ditolak',
      catatan: 'Diluar kewenangan RT',
    }
  ];

  filteredPengaduan() {
    if (this.selectedStatus === 'Semua') {
      return this.pengaduanList;
    }
    return this.pengaduanList.filter(p => p.status === this.selectedStatus);
  }

  getBorderColor(status: string): string {
    switch (status) {
      case 'Selesai':
        return '#16a34a';
      case 'Diproses':
        return '#f59e0b';
      case 'Ditolak':
        return '#dc2626';
      default:
        return '#6b7280';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
