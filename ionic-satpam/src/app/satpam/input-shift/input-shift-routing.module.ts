import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputShiftPage } from './input-shift.page';

const routes: Routes = [
  {
    path: '',
    component: InputShiftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputShiftPageRoutingModule {}
