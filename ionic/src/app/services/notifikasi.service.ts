import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotifikasiService {
  constructor(private apiService: ApiService) {}

  getSemuaNotifikasi(): Observable<any[]> {
    return forkJoin({
      guests: this.apiService.getGuest(),
      pengajuan: this.apiService.getPengajuan()
    }).pipe(
      map(({ guests, pengajuan }) => {
        const notifTamu = guests.map((guest: any) => ({
          kategori: 'Tamu',
          title: 'Kunjungan',
          desc: `${guest.fullname} berkunjung ke ${guest.destination || 'lokasi tidak diketahui'}`,
          status: guest.status,
          waktu: guest.created_at,
          id:guest.id
        }));

        const notifPengajuan = pengajuan.map((item: any) => ({
          kategori: item.kategori, // "Pengaduan" atau "Permohonan"
          title: `${item.kategori}: ${item.judul}`,
          desc: item.deskripsi || '(Tidak ada deskripsi)',
          status: item.status,
          waktu: item.created_at,
          id: item.id
        }));

        return [...notifTamu, ...notifPengajuan].sort(
          (a, b) => new Date(b.waktu).getTime() - new Date(a.waktu).getTime()
        );
      })
    );
  }
}
