import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName:string='';

  addInfo:newEntry=new newEntry();
  newtableinformation:newEntry[]=[]
  isEdit:boolean=false;

  constructor(private route:Router) {
    this.userName=localStorage.getItem('userName');
    this.createForm();
  }
  

  myReactiveForm: FormGroup;

  ngOnInit() {
  }

  OnSubmit() {
    console.log(this.myReactiveForm);
  }


  OnAddSkills() {
    const control = new FormControl() ;
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
    this.addInfo=new newEntry();
    this.addInfo.name = this.myReactiveForm.controls.name.value;
    this.addInfo.mobile = this.myReactiveForm.controls.mobile.value;
    this.addInfo.address = this.myReactiveForm.controls.address.value;
    this.addInfo.skills=this.myReactiveForm.controls.skills.value;
    this.addInfo.hobbies = this.myReactiveForm.controls.hobbies.value;
    this.addInfo.photo=this.myReactiveForm.controls.photo.value;
    this.newtableinformation.push(this.addInfo);
    this.myReactiveForm.reset();
    this.isEdit = false;
    this.skillArray.clear();
  }

  edit(entry:newEntry){
  
    this.myReactiveForm.controls.name.setValue(entry.name);
    this.myReactiveForm.controls.mobile.setValue(entry.mobile);
    this.myReactiveForm.controls.address.setValue(entry.address);

    entry.skills.forEach(element => {
      const control = new FormControl(element) ;
      this.skillArray.push(control);
    });
    this.myReactiveForm.controls.hobbies.setValue(entry.hobbies);

    //this.myReactiveForm.controls.photo.value(entry.photo);
    
    let index =this.newtableinformation.indexOf(entry);
    this.newtableinformation.splice(index,1)
    this.isEdit = true;
  }

  delete(entry:newEntry){
    let index =this.newtableinformation.indexOf(entry);
    this.newtableinformation.splice(index,1)
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['./login'])

  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      'name' : new FormControl(null,[Validators.required]),
      'mobile': new FormControl(null, [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
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
  skills:string[];
  hobbies:string
  photo:string
}
