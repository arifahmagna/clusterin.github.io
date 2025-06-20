import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-profile-rumah',
  templateUrl: './profile-rumah.page.html',
  styleUrls: ['./profile-rumah.page.scss'],
})
export class ProfileRumahPage implements OnInit {
  editMode = false;
  showSuccessModal = false;

  data = {
    foto: 'assets/images/rumah-default.jpg',
    nomorRumah: 'A12',
    alamat: 'Jl. Cluster Harmoni No. 12, Bandung',
    cluster: 'Harmoni',
    statusKepemilikan: 'Milik Sendiri',
    jumlahPenghuni: 4,
    namaPenghuni: 'Delia Widianti, Roni Saputra, Wulan, Dimas'
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  toggleEdit() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      console.log('Data rumah disimpan:', this.data);
      this.showSuccessModal = true;
    }
  }

  kembali() {
    this.router.navigate(['/warga/tabs/profile']);
  }

  kembaliKeProfil() {
    this.showSuccessModal = false;
    this.router.navigate(['/warga/tabs/profile']);
  }

  kembaliKeBeranda() {
    this.showSuccessModal = false;
    this.router.navigate(['/warga/tabs/home']);
  }

  gantiFoto() {
    console.log('Trigger ganti foto');
    
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.data.foto = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
