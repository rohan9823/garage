import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {firebase, FirebaseUIModule} from 'firebaseui-angular';
 
import { SecondComponent } from './second.component';

const routes: Routes = [
  {path: '', component: SecondComponent},
];

@NgModule({
  declarations: [SecondComponent],
  imports: [
    CommonModule,
    FirebaseUIModule.forFeature({
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    }),
    RouterModule.forChild(routes)
  ]
})
export class SecondModule { }
