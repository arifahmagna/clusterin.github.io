import { Component, OnInit } from '@angular/core';
import { NotifikasiService } from '../../services/notifikasi.service';
import { Router } from '@angular/router';
interface Notifikasi {
  id: number;
  kategori: string;
  title: string;
  desc: string;
  status: string;
  waktu: string;
}

@Component({
  standalone: false,
  selector: 'app-notifikasi',
  templateUrl: './notifikasi.page.html',
  styleUrls: ['./notifikasi.page.scss'],
})
export class NotifikasiPage implements OnInit {

  notifikasiHariIni: Notifikasi[] = [];

  constructor(
    private notifikasiService: NotifikasiService,
    private router: Router
  ) {}

ngOnInit() {
  this.notifikasiService.getSemuaNotifikasi().subscribe({
    next: (data) => {
      this.notifikasiHariIni = data;
    },
    error: (err) => {
      console.error('Gagal ambil notifikasi:', err);
    }
  });
}


  getIconByJenis(kategori: string): string {
    const map: Record<string, string> = {
      Permohonan: 'document-text-outline',
      Tamu: 'person-outline',
      Pengaduan: 'alert-circle-outline'
    };
    return map[kategori] || 'notifications-outline';
  }

  getBadgeClass(status: string): string {
    const map: Record<string, string> = {
      Menunggu: 'badge-waiting',
      Ditolak: 'badge-denied',
      Disetujui: 'badge-done',
      Keluar: 'badge-denied',
      Masuk: 'badge-done',
    };
    return map[status] || '';
  }

  goToDetail(item: Notifikasi) {
  if (item.kategori === 'Pengaduan') {
    this.router.navigate(['/pengaduan']);
  } else if (item.kategori === 'Permohonan') {
    this.router.navigate(['/permohonan']);
  } else if (item.kategori === 'Tamu') {
    this.router.navigate(['warga/tabs/kunjungan']);
  }
}


}
