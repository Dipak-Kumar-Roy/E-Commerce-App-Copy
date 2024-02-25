import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-types';
import { ProductService } from '../services/product.service';
import { hide } from '@popperjs/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private route: Router, private product: ProductService) { }
  menuType: string = 'default';
  sellerName: string = ''
  searchResult: undefined | product[];
  userName: string = ''
  cartItems=0;
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          this.menuType = 'seller';
          if (localStorage.getItem(`seller`)) {
            
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          }
        } else
          if (localStorage.getItem('user')) {
            let userStore = localStorage.getItem('user')
            let userData = userStore && JSON.parse(userStore)
            this.userName = userData.name;
            this.menuType = 'user';
            this.product.getCartList(userData.id)

          } else {

            // Set to a different value if needed
            this.menuType = 'default';
          }
      }
    });
    let cartData=localStorage.getItem('localCart')
    if(cartData){
      this.cartItems= JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items)=>{
      this.cartItems=items.length
    })
  }

  logout() {
    // Perform logout logic, for example, clearing local storage and navigating to the login page
    localStorage.removeItem('seller');
    this.route.navigate(['/']); // Adjust the route as needed
  }
  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result) => {

        if (result.length > 5) {
          result.length = length
        }
        this.searchResult = result;
      })
    }
  }
  hideSearch() {
    this.searchResult = undefined
  }

  redirectToDetails(id: number) {
    this.route.navigate(['/details/' + id])
  }
  submitSearch(val: string) {
    console.warn(val)
    this.route.navigate([`search/${val}`]);
  }
  userLogout() {
    // Perform logout logic, for example, clearing local storage and navigating to the login page
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth']); // Adjust the route as needed
    this.product.cartData.emit([])
  }
}
