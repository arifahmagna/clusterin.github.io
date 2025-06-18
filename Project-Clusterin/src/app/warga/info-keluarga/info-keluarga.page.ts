import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-info-keluarga',
  templateUrl: './info-keluarga.page.html',
  styleUrls: ['./info-keluarga.page.scss'],
})
export class InfoKeluargaPage implements OnInit {
  editMode = false;
  showSuccessModal = false;

  data = {
    kepalaKeluarga: 'Delia Widianti',
    alamat: 'Jl. Mawar No. 123, Bandung',
    jumlahAnggota: 3,
    anggotaKeluarga: [
      {
        nama: 'Delia Widianti',
        hubungan: 'Ibu',
        tanggalLahir: '1985-03-12',
        nik: '3213524098675437'
      },
      {
        nama: 'Aldi Wiraatmaja',
        hubungan: 'Anak',
        tanggalLahir: '2010-07-20',
        nik: '3213524098671234'
      }
    ]
  };

  constructor(private router: Router) {}

  toggleEdit() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      console.log('Data disimpan:', this.data);
      this.showSuccessModal = true;
    }
  }

  kembaliKeProfil() {
    this.showSuccessModal = false;
    this.router.navigate(['/warga/tabs/profile']);
  }

  kembaliKeBeranda() {
    this.showSuccessModal = false;
    this.router.navigate(['/warga/tabs/home']);
  }

  tambahAnggota() {
    this.data.anggotaKeluarga.push({
      nama: '',
      hubungan: '',
      tanggalLahir: '',
      nik: ''
    });
  }

  kembali() {
    this.router.navigate(['/warga/tabs/profile']);
  }

  ngOnInit() {}
}
