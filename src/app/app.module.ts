import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MSAL_INSTANCE, MsalModule, MsalService } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';

export function MSALInstanceFactory() : IPublicClientApplication {
  return new PublicClientApplication({
      auth : {
        clientId : '840dcd79-fe20-443f-be4a-e2d0b4539b89',
        redirectUri : 'http://localhost:4200',
        postLogoutRedirectUri : 'http://localhost:4200'
      }
  })
}

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    RestrictedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule,
  ],
  providers: [
    {
      provide : MSAL_INSTANCE,
      useFactory : MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
