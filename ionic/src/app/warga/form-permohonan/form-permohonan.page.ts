import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  standalone: false,
  selector: 'app-form-permohonan',
  templateUrl: './form-permohonan.page.html',
  styleUrls: ['./form-permohonan.page.scss'],
})
export class FormPermohonanPage implements OnInit {
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
    jenisPermohonan: '',
    tujuanPermohonan: '',
    lampiran: null
  };

  constructor(private router: Router) { }

  submitForm() {
    console.log('Form dikirim:', this.formData);

    if (!this.formData.nama || !this.formData.nik) {
      alert('Nama dan NIK wajib diisi.');
      return;
    }

    this.showSuccessModal = true;
  }

  closeModal() {
  this.showSuccessModal = false;
}

goToPermohonan() {
  this.closeModal();
  this.router.navigate(['/permohonan']);
}

goToHome() {
  this.closeModal();
  this.router.navigate(['/warga/tabs/home']);
}

  ngOnInit() {
    const today = new Date();
    this.formData.tanggal = today.toISOString().slice(0, 10);

  };

    onFileSelected(event: any) {
    const file = event.target.files[0];
    this.formData.lampiran = file;
  }





}
