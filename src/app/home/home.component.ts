import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user = {
    username: "Shubham",
    profileimage: "assets/image/profile.jpg",
    name: "test"
  }

  updateUsername(){
    this.user.username = "shailesh"
  }
}
