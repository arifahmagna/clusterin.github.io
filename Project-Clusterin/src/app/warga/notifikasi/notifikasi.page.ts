import { Component, OnInit } from '@angular/core';
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
  selector: 'app-notifikasi',
  templateUrl: './notifikasi.page.html',
  styleUrls: ['./notifikasi.page.scss'],
})
export class NotifikasiPage implements OnInit {

  notifikasiHariIni : Notifikasi[] = [];

  constructor(private notifikasiService: NotifikasiService) { }

  ngOnInit() {
    this.notifikasiHariIni = this.notifikasiService.getNotifikasiHariIni();
  }

  getIconByJenis(jenis: string): string {
    const map: Record<string, string> = {
      tamu: 'person-outline',
      permohonan: 'document-text-outline',
      pengaduan: 'alert-circle-outline'
    };
    return map[jenis] || 'notifications-outline';
  }

  getBadgeClass(status: string): string {
    const map: Record<string, string> = {
      menunggu: 'badge-waiting',
      diproses: 'badge-processing',
      selesai: 'badge-done'
    };
    return map[status] || '';
  }
}
