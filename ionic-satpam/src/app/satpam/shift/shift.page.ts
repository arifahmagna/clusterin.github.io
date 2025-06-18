import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TambahShiftComponent } from '../tambah-shift/tambah-shift.component';
import { EditShiftComponent } from '../edit-shift/edit-shift.component';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.page.html',
  styleUrls: ['./shift.page.scss'],
  standalone: false,
})
export class ShiftPage {
  constructor(private modalCtrl: ModalController) {}

   shifts = [
    { name: 'Shift 1', startTime: '06:00', endTime: '14:00', petugas: 'Rina Widya' },
    { name: 'Shift 2', startTime: '14:00', endTime: '22:00', petugas: 'Budi Santoso' },
    { name: 'Shift 3', startTime: '22:00', endTime: '06:00', petugas: 'Sari Melati' }
  ];

  /** Buka modal Tambah Shift */
  async openTambahShiftModal() {
    const activeElement = document.activeElement as HTMLElement | null;
    activeElement?.blur();

    const modal = await this.modalCtrl.create({
      component: TambahShiftComponent, // ✅ PERBAIKAN di sini
      cssClass: 'custom-modal'
    });

    return await modal.present();
  }

  /** Buka modal Edit Shift */
  async openEditShiftModal(shiftName: string, startTime: string, endTime: string, petugas: string) {
    const activeElement = document.activeElement as HTMLElement | null;
    activeElement?.blur();

    const modal = await this.modalCtrl.create({
      component: EditShiftComponent,
      componentProps: {
        selectedShift: {
          name: shiftName,
          petugas: petugas,
          startDate: '',
          endDate: '',
          startTime: startTime,
          endTime: endTime,
          location: '',
          notes: ''
        }
      },
      cssClass: 'custom-modal'
    });

    return await modal.present();
  }
}
