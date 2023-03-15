import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ObservablesComponent } from './observables/observables.component';
import { TemplateComponent } from './template/template.component';
import { TranslationFileComponent } from './translation-file/translation-file.component';

const routes: Routes = [
  {path:'',component:DynamicFormComponent},
  {path:'observables',component:ObservablesComponent},
  {path:'translate',component:TranslationFileComponent},
  {path:'template',component:TemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
