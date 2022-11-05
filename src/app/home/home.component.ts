import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BindUsernameService } from '../Services/bind-username.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName:'';

  addInfo:newEntry=new newEntry();
  newtableinformation:newEntry[]=[]

  constructor(private service:BindUsernameService) {
    this.service.userName.subscribe((data=>{
      this.userName=data}))
    this.createForm();
  }
  

  myReactiveForm: FormGroup;

  ngOnInit() {
  }

  OnSubmit() {
    console.log(this.myReactiveForm);
  }


  OnAddSkills() {
    const control = new FormControl(null) ;
    this.skillArray.push(control);
  }
  get skillArray() {
    return this.myReactiveForm.get('skills') as FormArray;
  }
  
 deletSkill(i){
  const control = new FormControl(null) ;
  this.skillArray.removeAt(i)
 }

 add(form : FormGroup ){
  this.addInfo.name = this.myReactiveForm.controls.name.value;
  this.addInfo.mobile = this.myReactiveForm.controls.mobile.value;
  this.addInfo.address = this.myReactiveForm.controls.address.value;
  this.addInfo.skills=this.myReactiveForm.controls.skills.value;
  this.addInfo.hobbies = this.myReactiveForm.controls.hobbies.value;
  this.addInfo.photo=this.myReactiveForm.controls.photo.value
  //this.addInfo.skills = this.skillArray;
    this.newtableinformation.push(this.addInfo);
    this.myReactiveForm.reset()
 
    console.log(`addInfo`,this.addInfo);
  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      'name' : new FormControl(null,[Validators.required]),
      'mobile': new FormControl(null, [Validators.required]),
      'address': new FormControl(null, [Validators.required]),
      'skills': new FormArray([ 
        new FormControl(null, Validators.required)
      ]),
      'hobbies': new FormControl(null, [Validators.required]),
      'photo':new FormControl(null,[Validators.required])
    })
  }
}

class newEntry {
  name: string;
  mobile:number;
  address: string;
  skills: string;
  hobbies:string
  photo:string
}
