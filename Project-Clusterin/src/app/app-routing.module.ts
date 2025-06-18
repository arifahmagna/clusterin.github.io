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
  {path: 'shift',loadChildren: () => import('./satpam/shift/shift.module').then( m => m.ShiftPageModule)},
  { path: 'profile', loadChildren: () => import('./satpam/profile/profile.module').then( m => m.ProfilePageModule)},
  { path: 'laporan', loadChildren: () => import('./satpam/laporan/laporan.module').then(m => m.LaporanPageModule)},
  { path: 'warga/tabs', loadChildren: () => import('./warga/tabs/tabs.module').then( m => m.TabsPageModule) },
  { path: 'home', loadChildren: () => import('./warga/home/home.module').then( m => m.HomePageModule) },
  {
    path: 'notifikasi',
    loadChildren: () => import('./warga/notifikasi/notifikasi.module').then( m => m.NotifikasiPageModule)
  },
  {
    path: 'layanan',
    loadChildren: () => import('./warga/layanan/layanan.module').then( m => m.LayananPageModule)
  },
  {
    path: 'permohonan',
    loadChildren: () => import('./warga/permohonan/permohonan.module').then( m => m.PermohonanPageModule)
  },
  {
    path: 'pengaduan',
    loadChildren: () => import('./warga/pengaduan/pengaduan.module').then( m => m.PengaduanPageModule)
  },
  {
    path: 'form-permohonan',
    loadChildren: () => import('./warga/form-permohonan/form-permohonan.module').then( m => m.FormPermohonanPageModule)
  },
  {
    path: 'form-pengaduan',
    loadChildren: () => import('./warga/form-pengaduan/form-pengaduan.module').then( m => m.FormPengaduanPageModule)
  },
  {
    path: 'kunjungan',
    loadChildren: () => import('./warga/kunjungan/kunjungan.module').then( m => m.KunjunganPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./warga/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'info-pribadi',
    loadChildren: () => import('./warga/info-pribadi/info-pribadi.module').then( m => m.InfoPribadiPageModule)
  },
  {
    path: 'info-keluarga',
    loadChildren: () => import('./warga/info-keluarga/info-keluarga.module').then( m => m.InfoKeluargaPageModule)
  },
  {
    path: 'profile-rumah',
    loadChildren: () => import('./warga/profile-rumah/profile-rumah.module').then( m => m.ProfileRumahPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
