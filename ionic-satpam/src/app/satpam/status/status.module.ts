import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StatusPageRoutingModule } from './status-routing.module';
import { StatusPage } from './status.page';

// Komponen anak yang digunakan dalam status.page.html
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusPageRoutingModule  // ✅ routing sudah diatur di sini
  ],
  declarations: [
    StatusPage,
    CheckInComponent,
    CheckOutComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // ✅ untuk dukung komponen custom seperti <app-masuk>
})
export class StatusPageModule {}
