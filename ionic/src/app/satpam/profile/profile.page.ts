import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InformasiPribadiComponent } from './informasi-pribadi/informasi-pribadi.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage {
  nama = 'Delia Widlanti';
  nik = '321525408976547';
  email = 'Deliawidi1876@gmail.com';
  noHp = '08976543627';
  alamat = 'Karang Pawitan Rt 001/008 Des. Wadas Kec. Karawang Barat';
  status = 'Satpam';

  constructor(private modalCtrl: ModalController) {}

  async openInformasiPribadiModal() {
    const modal = await this.modalCtrl.create({
      component: InformasiPribadiComponent,
      cssClass: 'informasi-pribadi-modal',
    });
    return await modal.present();
  }
}