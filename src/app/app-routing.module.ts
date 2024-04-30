import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';


const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    data: { breadcrumb: 'Home' }
  },
  {
    component: SellerAuthComponent,
    path: 'seller-auth',
    data: { breadcrumb: 'Seller-auth' }
  },
  {
    component:SellerHomeComponent,
    path:'seller-home',
    canActivate:[AuthGuard],
    data: { breadcrumb: 'Seller-home' }
  },
  {
    component:SellerAddProductComponent,
    path:'seller-add-product',
    canActivate:[AuthGuard],
    data: { breadcrumb: 'Seller-add-product' }
  },
  {
    component:SellerUpdateProductComponent,
    path:'seller-update-product/:id',
    canActivate:[AuthGuard],
    data: { breadcrumb: 'Seller-update-product'}
  },
  {
    component:SearchComponent,
    path:'search/:query',
    data: { breadcrumb: 'search'}

  },
  {
    component:ProductDetailsComponent,
    path:'details/:productId',
    data: { breadcrumb: 'Product-detail/:productId' }
  },
  {
    component:UserAuthComponent,
    path:'user-auth',
    data: { breadcrumb: 'User-auth' }
  },
  {
    component:CartPageComponent,
    path:'cart-page',
    data: { breadcrumb: 'Cart-page' }
  },
  {
    component:CheckoutComponent,
    path:'checkout',
    data: { breadcrumb: 'Checkout' }
  }
  ,
  {
    component:MyOrdersComponent,
    path:'my-orders',
    data: { breadcrumb: 'my-orders' }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
