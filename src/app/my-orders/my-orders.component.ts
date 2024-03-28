import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { order } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orderData: MatTableDataSource<order>;
  displayedColumns: string[] = ['orderImage', 'orderId', 'price', 'status',  'date','cancelOrder'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private product: ProductService) {
    this.orderData = new MatTableDataSource<order>([]);
  }

  ngOnInit(): void {
    this.getOrderList();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement)?.value;
    this.orderData.filter = filterValue.trim().toLowerCase();
  }


  // applyFilter(filterValue: string): void {
  //   this.orderData.filter = filterValue.trim().toLowerCase();
  // }

  cancelOrder(orderId: number | undefined): void {
        orderId && this.product.cancelOrder(orderId).subscribe((result) => {
          if (result) {
            this.getOrderList();
          }
        });
      }

      getOrderList(): void {
        this.product.orderList().subscribe((result) => {
          this.orderData.data = result;
          this.orderData.paginator = this.paginator;
          this.orderData.sort = this.sort;
        });
      }
    }




// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { order } from '../data-types';
// import { ProductService } from '../services/product.service';

// @Component({
//   selector: 'app-my-orders',
//   templateUrl: './my-orders.component.html',
//   styleUrls: ['./my-orders.component.css']
// })
// export class MyOrdersComponent implements OnInit {

//   orderData: MatTableDataSource<order>; // Fix the type here
//   displayedColumns: string[] = ['orders', 'orderId', 'price', 'status', 'cancelOrder'];

//   @ViewChild(MatPaginator)
//   paginator!: MatPaginator;
//   @ViewChild(MatSort)
//   sort!: MatSort;

//   constructor(private product: ProductService) {
//     this.orderData = new MatTableDataSource<order>([]);
//   }

//   ngOnInit(): void {
//     this.getOrderList();
//   }

//   cancelOrder(orderId: number | undefined): void {
//     orderId && this.product.cancelOrder(orderId).subscribe((result) => {
//       if (result) {
//         this.getOrderList();
//       }
//     });
//   }

//   getOrderList(): void {
//     this.product.orderList().subscribe((result) => {
//       this.orderData.data = result;
//       this.orderData.paginator = this.paginator;
//       this.orderData.sort = this.sort;
//     });
//   }
// }




// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { order } from '../data-types';
// import { ProductService } from '../services/product.service';

// @Component({
//   selector: 'app-my-orders',
//   templateUrl: './my-orders.component.html',
//   styleUrls: ['./my-orders.component.css']
// })
// export class MyOrdersComponent implements OnInit {

//   orderData: MatTableDataSource<order> | undefined;
//   // orderData!: order;
//   displayedColumns: string[] = ['orders', 'orderId', 'price', 'status', 'cancelOrder'];

//   @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
//   @ViewChild(MatSort) sort: MatSort | undefined;

//   constructor(private product: ProductService) { }

//   ngOnInit(): void {
//     this.getOrderList();
//   }

//   cancelOrder(orderId: number | undefined): void {
//     orderId && this.product.cancelOrder(orderId).subscribe((result) => {
//       if (result) {
//         this.getOrderList();
//       }
//     });
//   }

//   getOrderList(): void {
//     this.product.orderList().subscribe((result) => {
//       this.orderData = new MatTableDataSource(result);

//       if (this.paginator) {
//         this.orderData.paginator = this.paginator;
//       }

//       if (this.sort) {
//         this.orderData.sort = this.sort;
//       }
//     });
//   }
// }




// import { Component, OnInit } from '@angular/core';
// import { order } from '../data-types';
// import { ProductService } from '../services/product.service';

// @Component({
//   selector: 'app-my-orders',
//   templateUrl: './my-orders.component.html',
//   styleUrls: ['./my-orders.component.css']
// })
// export class MyOrdersComponent implements OnInit {

//   orderData:order[]|undefined
//   constructor(private product:ProductService) { }

//   ngOnInit(): void {
//     this.getOrderList()
//   }
//   cancelOrder(orderId:number|undefined){
//     orderId && this.product.cancelOrder(orderId).subscribe((result)=>{
//       if(result){
//         this.getOrderList();
//       }
//     })
//   }
//   getOrderList(){
//     this.product.orderList().subscribe((result)=>{
//       this.orderData=result;
//     })
//   }

// }
