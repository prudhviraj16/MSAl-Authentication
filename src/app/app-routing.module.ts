import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';
import { MsalGuard } from './msal.guard';


const routes: Routes = [

  {path : 'public-page', component : PublicPageComponent},
  {path : 'restricted-page', component : RestrictedPageComponent, canActivate : [MsalGuard]},
  {path : '**', component : PublicPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
