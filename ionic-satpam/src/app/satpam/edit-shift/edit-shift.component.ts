import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.scss'],
  standalone: false,
})
export class EditShiftComponent {
  shiftData = {
    name: '',
    petugas: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    location: '',
    notes: ''
  };

  constructor(private modalCtrl: ModalController) {}

  updateShift() {
    // Validasi sederhana
    if (!this.shiftData.name || !this.shiftData.petugas) {
      // Jika tidak valid, tidak melakukan apa-apa (atau kamu bisa kasih alert browser biasa)
      return;
    }

    // Simpan shift (misalnya disimpan di service atau API — di luar modal)
    console.log('Shift diperbarui:', this.shiftData);

    // Tutup modal tanpa kirim data
    this.modalCtrl.dismiss();
  }

  cancel() {
    // Tutup modal tanpa kirim data
    this.modalCtrl.dismiss();
  }
}
