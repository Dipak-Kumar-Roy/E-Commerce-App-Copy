import { Component, OnInit } from '@angular/core';
import { signUp } from '../data-types';
import { SellerService } from '../services/seller.service';
import { BreadcrumbService } from '../services/breadcrumb.service';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  authError: string = '';

  constructor(private seller: SellerService, private breadcrumbService: BreadcrumbService ) { }

  ngOnInit(): void {
    // this.breadcrumbService.setBreadcrumb(['Home', 'Seller-auth' ]);
    this.breadcrumbService.setBreadcrumb([
      {
        name: "Home",
        link: "/"
      },

      {
        name: "seller-auth",
        link: "/seller-auth"

      }
    ].map(item => JSON.stringify(item)));



    this.seller.reloadSeller()
  }
  signUp(data: signUp): void {
    console.log(data);
    this.seller.userSignUp(data);

  }
  login(data: signUp): void {
    this.authError=""
    // console.log(data);
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = "Email or Password is not correct"
      }
    })
  }
  openLogin() {
    this.showLogin = true
  }
  openSignUp() {
    this.showLogin = false
  }
}
