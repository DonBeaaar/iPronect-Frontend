import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  contra: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  OnLogin(){
    if(this.email=="ale@inacap.cl"){
      if(this.contra=='1234'){
        this.router.navigateByUrl('/tabs/tab3');
      }else{
        this.router.navigateByUrl('/perfil');
      }
      
      
    }else{
      this.router.navigateByUrl('/perfil');
    }
  }

}
