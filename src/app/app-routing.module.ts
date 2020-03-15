import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecondComponent} from './second/second.component';
import { SecondModule} from './second/second.module';
// import { from } from 'rxjs';

const routes: Routes = [
  {path: '', loadChildren: './login/login.module#LoginModule'},
  // {path: 'np', component: SecondComponent},
  // {path: 'page', component: SecondModule },
  {path: 'page', loadChildren: './second/second.module#SecondModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }