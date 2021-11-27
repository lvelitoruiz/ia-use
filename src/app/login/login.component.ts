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

  onSubmit(formData: any): void {
    if(formData.valid) {
      console.log(formData);
      this.authService.login(formData.value.email,formData.value.password);
    }
  }

}
