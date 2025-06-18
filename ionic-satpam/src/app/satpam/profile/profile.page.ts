import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  goToEditProfile() {
       this.navController.navigateForward('profile/edit-profile');
     }

}
