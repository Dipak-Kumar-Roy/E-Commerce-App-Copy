import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList: product[] = [];
  productMessage: string | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProductList();
  }


  

  deleteProduct(id: number): void {
    console.log("Deleting product with ID:", id);

    this.productService.deleteProduct(id).subscribe(
      () => {
        this.productMessage = "Product deleted successfully";
        this.loadProductList();
      },
      (error) => {
        console.error("Error deleting product:", error);
        this.productMessage = "Error deleting product";
      }
    );

    setTimeout(() => {
      this.productMessage = undefined;
    }, 5000);
  }

  private loadProductList(): void {
    this.productService.produtList().subscribe(
      (result) => {
        console.log(result);
        this.productList = result;
      },
      (error) => {
        console.error("Error loading product list:", error);
      }
    );
  }
}


