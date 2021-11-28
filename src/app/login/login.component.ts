import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string = "";
  public password: string = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  async onSubmit(formData: any): Promise<void> {
    if(formData.valid) {
      console.log(formData);
      await this.authService.login(formData.value.email,formData.value.password);
    }
  };

  checkUser(): void {
    this.authService.checkUser();
  }

  logOut(): void {
    this.authService.logOut();
  }

}
