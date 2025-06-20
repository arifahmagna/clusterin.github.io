import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NotifikasiService } from '../../services/notifikasi.service';
import { ApiService } from '../../api.service';
import { Subscription } from 'rxjs';
interface Notifikasi {
  kategori: string;
  title: string;
  desc: string;
  status: string;
  waktu: string;
}

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  aktivitasTerbaru: Notifikasi[] = [];
  guestList: any[] = [];
  pengaduanList: any[] = [];
  permohonanList: any[] = [];
  isLoading = false;
  private notifSub!: Subscription;

  constructor(
    private router: Router,
    private notifikasiService: NotifikasiService,
    private apiService: ApiService
  ) {}

  

ngOnInit() {
  this.notifSub = this.notifikasiService.getSemuaNotifikasi().subscribe({
    next: (data) => {
      this.aktivitasTerbaru = data.slice(0, 3);
    },
    error: (err) => {
      console.error('Gagal ambil notifikasi:', err);
    }
  });
}


  ionViewWillEnter() {
    this.loadGuestData();
    this.loadPengaduanData();
    this.loadPermohonanData();
  }

  ngOnDestroy() {
    if (this.notifSub) {
      this.notifSub.unsubscribe();
    }
  }

  loadGuestData() {
    this.apiService.getGuest().subscribe({
      next: (response) => {
        const today = new Date().toISOString().split('T')[0];
        this.guestList = response.filter((guest: any) => {
          const createdDate = guest.created_at?.split('T')[0];
          return createdDate === today;
        });
      },
      error: (err) => {
        console.error('Error load guest:', err);
      }
    });
  }

  loadPengaduanData() {
    this.apiService.getPengajuan().subscribe({
      next: (response) => {
        this.pengaduanList = response.filter((item: any) => item.kategori === 'Pengaduan');
      },
      error: (err) => {
        console.error('Error pengaduan:', err);
      }
    });
  }

  loadPermohonanData() {
    this.apiService.getPengajuan().subscribe({
      next: (response) => {
        this.permohonanList = response.filter((item: any) => item.kategori === 'Permohonan');
      },
      error: (err) => {
        console.error('Error permohonan:', err);
      }
    });
  }

  // 🔁 Routing
  
  goToNotifikasi() {
    this.router.navigate(['/notifikasi']);
  }

  // 🧩 Icon by kategori (bukan jenis!)
  getIconByJenis(kategori: string): string {
    const iconMap: { [key: string]: string } = {
      Permohonan: 'document-text-outline',
      Tamu: 'person-outline',
      Pengaduan: 'alert-circle-outline'
    };
    return iconMap[kategori] || 'help-circle-outline';
  }

  getStatusClass(status: string): string {
    return {
      selesai: 'status-done',
      menunggu: 'status-waiting',
      diproses: 'status-processing',
      aktif: 'status-active',
      proses: 'status-proses'
    }[status.toLowerCase()] || '';
  }

}
