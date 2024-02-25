import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cart, product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | product;
  productQuantity: number = 1;
  removeCart = false;
  cartData: product | undefined;
  showContent = false;
  image:string | undefined;


  content = `Your 50-line paragraph goes here.`;
  displayContent = false;

  images: string[] = [
    'https://cdn.pixabay.com/photo/2018/01/22/14/13/animal-3099035_1280.jpg',

    'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg',

    'https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_1280.jpg',


   "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg",

   "https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg",

'https://cdn.pixabay.com/photo/2017/12/10/20/56/feather-3010848_1280.jpg'


  ];
  constructor(private activeRoute: ActivatedRoute, private product: ProductService) { }

  togglesContent() {
    this.displayContent = !this.displayContent;
  }


  toggleContent() {
    this.showContent = !this.showContent;
  }

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    console.warn(productId);
    productId && this.product.getProduct(productId).subscribe((result) => {
      this.productData = result;
      // if (this.images.length > 0) {
      //   this.productData.image = this.images[0];
      // }
      let cartData = localStorage.getItem('localCart');
      if (productId && cartData) {
        let items = JSON.parse(cartData);
        items = items.filter((item: product) => productId === item.id.toString());
        if (items.length) {
          this.removeCart = true
        } else {
          this.removeCart = false
        }
      }

      let user = localStorage.getItem('user');
      if (user) {
        let userId = user && JSON.parse(user).id;
        this.product.getCartList(userId);

        this.product.cartData.subscribe((result) => {
          let item = result.filter((item: product) => productId?.toString() === item.productId?.toString())
          if (item.length) {
            this.cartData = item[0];
            this.removeCart = true;
          }
        })
      }



    })

  }
  changeImage(image: string): void {
    if (this.productData) {
      this.productData.image = image;
    }
  }
  // zoomImage() {
  //   document.addEventListener("DOMContentLoaded", () => {
  //     const productImage = document.querySelector(".product-image");

  //     if (productImage) {
  //       productImage.addEventListener("click", () => {
  //         productImage.classList.toggle("zoomed");
  //       });
  //     }
  //   });
  // }


  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1
      // this.productQuantity= this.productQuantity + 1
    }
    else
      if (this.productQuantity > 1 && val === 'min') {
        this.productQuantity -= 1
        // this.productQuantity= this.productQuantity + 1
      }
  }
  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity
      if (!localStorage.getItem('user')) {
        this.product.localAddToCart(this.productData)
        this.removeCart = true
      } else {


        let user = localStorage.getItem("user");
        let userId = user && JSON.parse(user).id
        console.log(userId)
        let cartData: cart = {
          ...this.productData,
          userId,
          productId: this.productData.id
        }
        delete cartData.id
        console.log(cartData);
        this.product.addToCart(cartData).subscribe((result) => {
          if (result)
            this.product.getCartList(userId);
          this.removeCart = true;
        })


      }
    }
  }
  removeToCart(productId: number) {
    if (!localStorage.getItem('user')) {
      this.product.removeItemFromCart(productId)
    } else {
      console.warn("cartData", this.cartData);

      this.cartData && this.product.removeToCart(this.cartData.id)
        .subscribe((result) => {
          let user = localStorage.getItem('user');
          let userId = user && JSON.parse(user).id;
          this.product.getCartList(userId)
        })
    }
    this.removeCart = false
  }


}



