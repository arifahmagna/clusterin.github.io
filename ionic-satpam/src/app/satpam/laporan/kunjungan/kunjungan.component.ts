import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-kunjungan',
  templateUrl: './kunjungan.component.html',
  styleUrls: ['./kunjungan.component.scss'],
})
export class KunjunganComponent implements OnInit {

  searchTerm: string = "";
  selectedFilter: string = "";
  openedIndex: number | null = null;
  selectedDate: string = "";
  semuaDitampilkan: boolean = false;
  toggleStatus: boolean = false;

  // Data lokal untuk tamu
  tamuList: any[] = [
    {
      nama: "Aburizal Pratama",
      status: "check-in",
      tanggal: "02 Mei 2025",
      waktuMasuk: "10:00",
      waktuKeluar: "12:00",
      alamat: "Jl. Sudirman",
      tujuan: "Silaturahmi kerumah ibu nurhayati",
      alamatTujuan: "Jl. Mangga no.02",
      estimasi: "2 jam",
      keterangan: "Numpang makan",
      dibuka: false
    },
    {
      nama: "Rizky Ananda",
      status: "check-out",
      tanggal: "03 Mei 2025",
      waktuMasuk: "09:00",
      waktuKeluar: "11:30",
      alamat: "Jl. Melati",
      tujuan: "Mengantar dokumen",
      alamatTujuan: "Kantor B",
      estimasi: "2.5 jam",
      keterangan: "Tamu urusan pekerjaan",
      dibuka: false
    }
  ];

  constructor() {}

  ngOnInit() {
    // Tidak ada pemanggilan API, data sudah ada di tamuList
    console.log('Data tamu:', this.tamuList);
  }

  // Filter hanya berdasarkan nama dan tanggal
  get filteredTamu() {
    return this.tamuList.filter(tamu =>
      tamu.nama?.toLowerCase().includes(this.searchTerm?.toLowerCase() || "") &&
      (!this.selectedDate || tamu.tanggal === this.selectedDate)
    );
  }

  tampilkanSemua() {
    this.semuaDitampilkan = true;
  }

  sembunyikanSebagian() {
    this.semuaDitampilkan = false;
  }

  toggleCard(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }

  ubahToggle() {
    this.toggleStatus = !this.toggleStatus;
  }
}
