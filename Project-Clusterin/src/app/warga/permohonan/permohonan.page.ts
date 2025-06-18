import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-permohonan',
  templateUrl: './permohonan.page.html',
  styleUrls: ['./permohonan.page.scss'],
})
export class PermohonanPage implements OnInit {
  selectedStatus: string = 'Semua';

  permohonanList = [
    {
      judul: 'Permohonan Surat Domisili',
      tanggal: '10 Mei 2025',
      status: 'Selesai',
      catatan: 'Berkas Lengkap',
      
    },
    {
      judul: 'Pengaduan Jembatan Roboh',
      tanggal: '8 Mei 2025',
      status: 'Diproses',
      catatan: '-',
      
    },
    {
      judul: 'Permohonan Surat Pengantar Nikah',
      tanggal: '3 Mei 2025',
      status: 'Ditolak',
      catatan: 'Berkas Tidak Lengkap',
     
    }
  ];

  filteredPermohonan() {
    if (this.selectedStatus === 'Semua') {
      return this.permohonanList;
    }
    return this.permohonanList.filter(p => p.status === this.selectedStatus);
  }

  

  getBorderColor(status: string): string {
  switch (status) {
    case 'Selesai':
      return '#16a34a'; // hijau
    case 'Diproses':
      return '#f59e0b'; // kuning
    case 'Ditolak':
      return '#dc2626'; // merah
    default:
      return '#6b7280'; // abu-abu
  }
}




  constructor() { }

  ngOnInit() {
  }

}
