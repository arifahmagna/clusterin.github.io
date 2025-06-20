import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  standalone: false,
  selector: 'app-form-pengaduan',
  templateUrl: './form-pengaduan.page.html',
  styleUrls: ['./form-pengaduan.page.scss'],
})
export class FormPengaduanPage implements OnInit {
  showSuccessModal = false;

  formData: any = {
    tanggal: '',
    nama: '',
    tempat: '',
    tanggalLahir: '',
    nik: '',
    jenisKelamin: '',
    alamat: '',
    email: '',
    noHp: '',
    jenisPengaduan: '',
    lokasiKejadian: '',
    deskripsi: '',
    lampiran: null
  };

  constructor(private router: Router) { }

  ngOnInit() {
    const today = new Date();
    this.formData.tanggal = today.toISOString().slice(0, 10);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.formData.lampiran = file;
    console.log('Lampiran:', file?.name);
  }

  submitForm() {
    console.log('Data Pengaduan:', this.formData);

    if (!this.formData.nama || !this.formData.nik || !this.formData.jenisPengaduan) {
      alert('Nama, NIK, dan Jenis Pengaduan wajib diisi.');
      return;
    }

    this.showSuccessModal = true;
}
closeModal() {
  this.showSuccessModal = false;
}

goToPengaduan() {
  this.closeModal();
  this.router.navigate(['/pengaduan']);
}

goToHome() {
  this.closeModal();
  this.router.navigate(['/warga/tabs/home']);
}

}
