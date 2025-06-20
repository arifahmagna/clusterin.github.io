// import { Component, OnInit } from '@angular/core';
// import { ModalController } from '@ionic/angular';
// import { TambahShiftComponent } from 'src/app/satpam/tambah-shift/tambah-shift.component';
// import { EditShiftComponent } from 'src/app/satpam/edit-shift/edit-shift.component';


// @Component({
//   selector: 'app-shift',
//   templateUrl: './shift.component.html',
//   styleUrls: ['./shift.component.scss'],
//   standalone: false,
// })
// export class ShiftComponent  implements OnInit {

//   selectedFilter: string = "";
//   searchTerm: string = "";
//   selectedDate: string = "";
//   semuaDitampilkan: boolean = false;

//   constructor(private modalCtrl: ModalController) { }

  // buka modal tambha shift
   /** Buka modal tambah shift */
//   async openTambahShiftModal() {
//     const modal = await this.modalCtrl.create({
//       component: TambahShiftComponent,
//       cssClass: 'custom-modal'
//     });
//     return await modal.present();
//   }

//   /** Buka modal edit shift */
//   async openEditShiftModal(shiftName: string, startTime: string, endTime: string) {
//     const modal = await this.modalCtrl.create({
//       component: EditShiftComponent,
//       componentProps: { selectedShift: { name: shiftName, startTime, endTime } },
//       cssClass: 'custom-modal'
//     });
//     return await modal.present();
//   }

//    ngOnInit(): void {
//     // Bisa kosong atau tambahkan log untuk cek apakah dipanggil
//     console.log('ShiftComponent initialized');
//     console.log('Data dari LaporanPage:', this.searchTerm, this.selectedFilter, this.selectedDate, this.semuaDitampilkan);
//   }

// }




import { Component, OnInit} from '@angular/core';

@Component({
 selector: 'app-shift',
  templateUrl: './shift.component.html',
   styleUrls: ['./shift.component.scss'],
   standalone: false,
})
export class ShiftComponent{
  // Kosong, karena konten sudah statis di HTML
}

