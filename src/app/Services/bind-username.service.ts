import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BindUsernameService {
  userName=new Subject<any>();

  constructor() { }

  checkUserNameandPassword(uname:string, pwd:string) {
    if(uname == "admin" && pwd == "admin123")
    {
      localStorage.setItem('userName', uname);
      return true;
    }
    else {
     return false;
    }
  }
}
