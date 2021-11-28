import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss']
})
export class UserControlComponent implements OnInit {
  public user: boolean = false;
  public userData: any;

  constructor(private authService: AuthService) { 
    this.userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if(Object.keys(this.userData).length) {
      this.user = true;
    }
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.authService.logOut();
  }

}
