import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-kunjungan',
  templateUrl: './kunjungan.page.html',
  styleUrls: ['./kunjungan.page.scss'],
})
export class KunjunganPage implements OnInit {
  tamuList = [
    {
      nama: 'Aburizal Pratama',
      status: 'Check-in',
      tanggal: '02 Mei 2025',
      jamMasuk: '10:00 WIB',
      jamKeluar: '-',
      tujuan: 'Rumah Pak RT',
      keterangan: 'Ngapel Malam Jumat'
    },
    {
      nama: 'Arifah Magna',
      status: 'Check-in',
      tanggal: '02 Mei 2025',
      jamMasuk: '-',
      jamKeluar: '-',
      tujuan: '',
      keterangan: ''
    },
    {
      nama: 'Delia',
      status: 'Check-Out',
      tanggal: '02 Mei 2025',
      jamMasuk: '-',
      jamKeluar: '-',
      tujuan: '',
      keterangan: ''
    },
    {
      nama: 'Rama',
      status: 'Check-Out',
      tanggal: '02 Mei 2025',
      jamMasuk: '-',
      jamKeluar: '-',
      tujuan: '',
      keterangan: ''
    }
  ];

  searchTerm = '';
  selectedStatus = 'Semua';
  selectedIndex: number | null = 0;

  get filteredTamuList() {
    return this.tamuList.filter((tamu) => {
      const cocokNama = tamu.nama.toLowerCase().includes(this.searchTerm.toLowerCase());
      const cocokStatus = this.selectedStatus === 'Semua' || tamu.status === this.selectedStatus;
      return cocokNama && cocokStatus;
    });
  }

  toggleDetail(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }

  constructor() { }

  ngOnInit() {
  }

}
