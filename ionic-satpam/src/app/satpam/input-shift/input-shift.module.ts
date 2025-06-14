import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputShiftPageRoutingModule } from './input-shift-routing.module';

import { InputShiftPage } from './input-shift.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputShiftPageRoutingModule
  ],
  declarations: [InputShiftPage]
})
export class InputShiftPageModule {}
