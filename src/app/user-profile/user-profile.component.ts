import { Component } from '@angular/core';
import { Users } from './Users';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: Users;

  constructor() {
    this.user = new Users("Doe", "John", 25, "https://randomuser.me/api/portraits/lego/2.jpg");
  }
 
  toggle() {
    this.user.hide = !this.user.hide;
  }
}
