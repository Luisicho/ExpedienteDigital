import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component'
import { LoginComponent } from './pages/login/login.component'
import { ForgetPassComponent } from './pages/forget-pass/forget-pass.component'
import { AboutUsComponent } from './pages/about-us/about-us.component'


const routes: Routes = [
  {path: 'inicio',component:InicioComponent},
  {path: 'login',component:LoginComponent},
  {path: 'forgetpass',component:ForgetPassComponent},
  {path: 'aboutus',component:AboutUsComponent},
  {path: '**',pathMatch: 'full',redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
