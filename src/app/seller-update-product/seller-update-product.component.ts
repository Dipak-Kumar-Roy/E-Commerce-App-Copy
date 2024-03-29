import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent implements OnInit {
  // productData: undefined | product;

  productData: product = {
    name: '',
    price: 0, 
    color: '',
    category: '',
    description: '',
    image: '',
    id: 0,
    quantity: undefined,
    productId: undefined
  };

  productMessage: undefined | string;
  constructor(private route: ActivatedRoute, private product: ProductService) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId &&
      this.product.getProduct(productId).subscribe((data) => {
        console.warn(data);
        this.productData = data;
      });
  }
  submit(data:product){
    console.log(data)
    if(this.productData){
      data.id=this.productData.id
    }
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
       this.productMessage="product has updated"
      }
    })
    setTimeout(()=>{
      this.productMessage=undefined;
    }, 5000)
  }
}
