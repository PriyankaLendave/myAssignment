import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BindUsernameService } from '../Services/bind-username.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   userName;
  constructor(private route:Router, private service:BindUsernameService ) {
    this.service.userName.subscribe((data=>{
      this.userName=data}))
   }

  ngOnInit() {

    
  }
  
  login(userName:string,password:string){
    var output=this.service.checkUserNameandPassword(userName,password)
    if(output==true){
      this.route.navigate(['./home'])
    }else{
      
    }

    
  }

}
