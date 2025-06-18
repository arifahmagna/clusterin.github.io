import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShiftPageRoutingModule } from './shift-routing.module';
import { ShiftPage } from './shift.page';
import { Routes, RouterModule } from '@angular/router';
import { TambahShiftComponent } from '../tambah-shift/tambah-shift.component';
import { EditShiftComponent } from '../edit-shift/edit-shift.component';







const routes: Routes = [
  {
    path : '',
    component : ShiftPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShiftPageRoutingModule,
    RouterModule.forChild(routes)
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  declarations: [ShiftPage,TambahShiftComponent,
    EditShiftComponent
] // Pastikan ShiftPage dideklarasikan di sini
})
export class ShiftPageModule {}
