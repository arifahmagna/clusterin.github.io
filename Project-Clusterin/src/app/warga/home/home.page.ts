import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifikasiService } from '../../services/notifikasi.service';

interface Notifikasi {
  jenis: string;
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
export class HomePage implements OnInit {

  aktivitasTerbaru : Notifikasi[] =[];

  constructor(
    private router: Router,
    private notifikasiService: NotifikasiService
  ) {}

  ngOnInit() {
    this.aktivitasTerbaru = this.notifikasiService.getNotifikasiHariIni().slice(0, 3);
  }


  goToPermohonan() {
    this.router.navigate(['/permohonan']);
  }

  goToPengaduan() {
    this.router.navigate(['/pengaduan']);
  }

  goToTamu() {
    this.router.navigate(['/warga/tabs/kunjungan']);
  }

  goToNotifikasi() {
    this.router.navigate(['/notifikasi']);
  }

  getIconByJenis(jenis: string): string {
    const iconMap: { [key: string]: string } = {
      permohonan: 'document-text-outline',
      tamu: 'person-outline',
      pengaduan: 'alert-circle-outline'
    };
    return iconMap[jenis] || 'help-circle-outline';
  }

  getStatusClass(status: string): string {
    return {
      selesai: 'status-done',
      menunggu: 'status-waiting',
      diproses: 'status-processing',
      aktif: 'status-active',
      proses: 'status-proses'
    }[status] || '';
  }

}
