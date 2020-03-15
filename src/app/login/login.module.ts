import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FirebaseUIModule} from 'firebaseui-angular';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login.component';
import { from } from 'rxjs';

// import { SecondComponent} from '../second/second.component'

const routes: Routes = [
{path: '', component: LoginComponent}
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FirebaseUIModule.forFeature({tosUrl: 'MAIN_MODULE'}),
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
