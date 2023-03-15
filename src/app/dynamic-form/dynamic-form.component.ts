import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {
  nameValidation,
  lastNameValidation,
  skillValidation,
} from './validation';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  lang: any;
  data = [];
  dynamicForm!: FormGroup;
  addskill: any;
  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService
  ) {
    this.dynamicForm = this.fb.group({
      firstName: ['', [Validators.required, nameValidation]],
      lastName: ['', [Validators.required, lastNameValidation]],
      skill: this.fb.array([this.fb.control('')]),
    });
    this.translateService.setDefaultLang('fr');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }
  addSkill() {
    (<FormArray>this.dynamicForm.controls['skill']).push(this.fb.control(''));
  }
  get skill() {
    return this.dynamicForm.get('skill') as FormArray;
  }
  onSubmit(form: FormGroup) {
    console.log(form);
    console.log(this.dynamicForm.controls['skill']);
  }
  changeLanguage(event: any) {
    localStorage.setItem('lang', (event.target as HTMLInputElement).value);
    window.location.reload();
  }
}
