import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { User } from './user'
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  public userModel = new User();
  sample : any;
  constructor() { }

  ngOnInit() {
  }

  checkControl(control: NgModel) { 
    this.sample = control.control.value
    if (control.control.value && control.control.value.length > 5){
      control.control.setErrors({ error: "Max length exceded" })
    }
    else
      control.control.setErrors(null)
  }

  checkPattern(control: NgModel) { 
    const regex1 = new RegExp("([a-z0-9-_\.]+)@([a-z0-9]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$")
    if (control.control.value && (!regex1.test(control.control.value))){
      control.control.setErrors({ error: "invalid Email" })
    }
    else
      control.control.setErrors(null)
  }

  formSubmit(userForm: NgForm){
    console.log(userForm);
  }
}
