import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  editMode = false;

  profile = {
    nama: 'Delia Widianti',
    nik: '3213524098675437',
    email: 'Deliawati123@gmail.com',
    emailTerverifikasi: true,
    noHp: '08976543627',
    password: '123',
    status: 'Warga',
    foto: ''
  };

  informasiLain = [
    {
      title: 'Informasi Pribadi',
      route: '/info-pribadi',
      icon: 'person-circle-outline'
    },
    {
      title: 'Informasi Keluarga',
      route: '/info-keluarga',
      icon: 'people-outline'
    },
    {
      title: 'Profil Rumah',
      route: '/profile-rumah',
      icon: 'home-outline'
    }
  ];
  toggleEdit() {
    this.editMode = !this.editMode;
  }


  onChangeFoto(event: any) {
    const file = event.target.files[0];
    if (file && file.size < 5 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profile.foto = reader.result as string;
      };
      reader.readAsDataURL(file);
    } else {
      alert('Ukuran foto maksimal 5MB');
    }
  }

  bukaHalaman(route: string) {
    this.router.navigate([route]);
    console.log('Navigasi ke:', route);
  }


  constructor(private router: Router) { }

  

  ngOnInit() {
  }

}
