import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./satpam/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  { path: 'forgot-password', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule) },
  { path: 'reset-password', loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordPageModule) },
  { path: 'status', loadChildren: () => import('./satpam/status/status.module').then(m => m.StatusPageModule) },
  { path: 'input-shift', loadChildren: () => import('./satpam/input-shift/input-shift.module').then(m => m.InputShiftPageModule) },
  {
    path: 'shift',
    loadChildren: () => import('./satpam/shift/shift.module').then( m => m.ShiftPageModule)
  },

      {
        path: 'profile',
        loadChildren: () => import('./satpam/profile/profile.module').then( m => m.ProfilePageModule)
      },
      
      {
  path: 'laporan',
  loadChildren: () => import('./satpam/laporan/laporan.module').then(m => m.LaporanPageModule)
}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
