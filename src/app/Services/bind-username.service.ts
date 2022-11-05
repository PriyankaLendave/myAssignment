import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BindUsernameService {
  userName=new Subject<any>();

  constructor() { }

  checkUserNameandPassword(uname:string, pwd:string) {
    if(uname == "!null" && pwd == "!null")
    {
      localStorage.setItem('userName', 'password');
      return true;
    }
    else {
     return false;
    }
  }
}
