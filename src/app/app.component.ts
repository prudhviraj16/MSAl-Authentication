import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'msal';

  constructor(private msalService: MsalService) {}
  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then(
      res => {
        if(res != null && res.account != null){
          this.msalService.instance.setActiveAccount(res.account);
        }
      }
    )
  }

  IsLoggedIn() : boolean {
    return this.msalService.instance.getActiveAccount()!==null
  }

  login() {
    // this.msalService
    //   .loginPopup()
    //   .subscribe((response: AuthenticationResult) => {
    //     this.msalService.instance.setActiveAccount(response.account);
    //   });

    this.msalService.loginRedirect()
  }

  logout() {
    this.msalService.logout();
  }
}
