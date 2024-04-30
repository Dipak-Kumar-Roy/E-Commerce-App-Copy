import { Component, OnInit } from '@angular/core';
import { product } from '../data-types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularProducts: undefined | product[];
  trendyProducts: undefined | product[];
  currentIndex = 0;

  sliderData = [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
    { id: 3, text: "3" },
    { id: 4, text: "4" },
    { id: 5, text: "5" },
    { id: 6, text: "6" },
    { id: 1, text: "7" },
    { id: 2, text: "8" },
    { id: 3, text: "9" },
    { id: 4, text: "10" },
    { id: 5, text: "11" },
    { id: 6, text: "12" }
  ]

  imageData = [
    { name: 'Category 1', imageUrl: "https://media.istockphoto.com/id/493934948/photo/octocopter-copter-drone.jpg?s=2048x2048&w=is&k=20&c=iEMGfqXUqiupcTk_mKie94AS7L7Eq3WhprSe8J-qMGk=" },
    { name: 'Category 2', imageUrl: "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg" },

    { name: 'Category 3', imageUrl: "https://images.pexels.com/photos/1170344/pexels-photo-1170344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: 'Category 4', imageUrl: "https://images.pexels.com/photos/3945676/pexels-photo-3945676.jpeg" },
    { name: 'Category 5', imageUrl: "https://images.pexels.com/photos/2044044/pexels-photo-2044044.jpeg" },
    { name: 'Category 6', imageUrl: "https://images.pexels.com/photos/3722737/pexels-photo-3722737.jpeg" },
    //  { name: 'Category 7', imageUrl: "https://images.pexels.com/photos/343238/pexels-photo-343238.jpeg" },
    //  { name: 'Category 8', imageUrl: "https://images.pexels.com/photos/1852984/pexels-photo-1852984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    // { name: 'Category 9', imageUrl: "https://images.pexels.com/photos/1353896/pexels-photo-1353896.jpeg" },
    // { name: 'Category 10', imageUrl: "https://images.pexels.com/photos/1757697/pexels-photo-1757697.jpeg" },
    // { name: 'Category 11', imageUrl: "https://images.pexels.com/photos/378268/pexels-photo-378268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    // { name: 'Category 12', imageUrl: "https://images.pexels.com/photos/8572502/pexels-photo-8572502.jpeg?auto=compress&cs=tinysrgb&w=600" },

  ];
  categories = [
    { name: 'Category 1', imageUrl: "https://media.istockphoto.com/id/493934948/photo/octocopter-copter-drone.jpg?s=2048x2048&w=is&k=20&c=iEMGfqXUqiupcTk_mKie94AS7L7Eq3WhprSe8J-qMGk=" },
    { name: 'Category 2', imageUrl: "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg" },

    { name: 'Category 3', imageUrl: "https://images.pexels.com/photos/1170344/pexels-photo-1170344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: 'Category 4', imageUrl: "https://images.pexels.com/photos/3945676/pexels-photo-3945676.jpeg" },
    { name: 'Category 5', imageUrl: "https://images.pexels.com/photos/2044044/pexels-photo-2044044.jpeg" },
    { name: 'Category 6', imageUrl: "https://images.pexels.com/photos/3722737/pexels-photo-3722737.jpeg" },
    { name: 'Category 7', imageUrl: "https://images.pexels.com/photos/343238/pexels-photo-343238.jpeg" },
    { name: 'Category 8', imageUrl: "https://images.pexels.com/photos/1852984/pexels-photo-1852984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: 'Category 9', imageUrl: "https://images.pexels.com/photos/1353896/pexels-photo-1353896.jpeg" },
    { name: 'Category 9', imageUrl: "https://images.pexels.com/photos/1353896/pexels-photo-1353896.jpeg" },
    { name: 'Category 9', imageUrl: "https://images.pexels.com/photos/1353896/pexels-photo-1353896.jpeg" },
    { name: 'Category 9', imageUrl: "https://images.pexels.com/photos/1353896/pexels-photo-1353896.jpeg" },
    { name: 'Category 9', imageUrl: "https://images.pexels.com/photos/1353896/pexels-photo-1353896.jpeg" },
    { name: 'Category 9', imageUrl: "https://images.pexels.com/photos/1353896/pexels-photo-1353896.jpeg" },
    { name: 'Category 9', imageUrl: "https://images.pexels.com/photos/1353896/pexels-photo-1353896.jpeg" },
    { name: 'Category 9', imageUrl: "https://images.pexels.com/photos/1353896/pexels-photo-1353896.jpeg" },
    { name: 'Category 10', imageUrl: "https://images.pexels.com/photos/1757697/pexels-photo-1757697.jpeg" },
    { name: 'Category 11', imageUrl: "https://images.pexels.com/photos/378268/pexels-photo-378268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: 'Category 12', imageUrl: "https://images.pexels.com/photos/8572502/pexels-photo-8572502.jpeg?auto=compress&cs=tinysrgb&w=600" },

  ];

  drones_list = [
    {
      name: 'CAMERA DRONES',
      price: '₹ 1 66 999',
      images: "https://img.freepik.com/free-photo/quadcopter-flying-nature_231208-10459.jpg",
      shopLink: 'https://example.com'
    },
    {
      name: 'ENTERPRISE DRONES',
      price: '₹ 1 66 999',
      images: "https://images.pexels.com/photos/3945676/pexels-photo-3945676.jpeg",
      shopLink: 'https://example.com'
    },
    {
      name: 'AGRI DRONES',
      price: '₹ 1 66 999',
      images: "https://images.unsplash.com/photo-1588495077262-e41593eb23c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyb25lc3xlbnwwfHwwfHx8MA%3D%3D",
      shopLink: 'https://example.com'
    },
    {
      name: 'THERMAL DRONES',
      price: '₹ 1 66 999',
      images: "https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=612x612&w=0&k=20&c=Dt8mbQjRDI09sl_Q2gaEdw88dDHi2627FzeKcXu0DOw=",
      shopLink: 'https://example.com'
    },
    {
      name: 'CONSUMERS DRONES',
      price: '₹ 1 66 999',
      images: "https://img.freepik.com/free-photo/quadcopter-flying-nature_231208-10459.jpg",
      shopLink: 'https://example.com'
    },
    {
      name: 'TOY DRONES',
      price: '₹ 1 66 999',
      images: "https://images.pexels.com/photos/3945676/pexels-photo-3945676.jpeg",
      shopLink: 'https://example.com'
    },
    {
      name: 'DJI MAVIC 2',
      price: '₹ 1 66 999',
      images: "https://images.unsplash.com/photo-1588495077262-e41593eb23c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyb25lc3xlbnwwfHwwfHx8MA%3D%3D",
      shopLink: 'https://example.com'
    },
    {
      name: 'DJI MAVIC 2',
      price: '₹ 1 66 999',
      images: "https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=612x612&w=0&k=20&c=Dt8mbQjRDI09sl_Q2gaEdw88dDHi2627FzeKcXu0DOw=",
      shopLink: 'https://example.com'
    },
    {
      name: 'DJI MAVIC 2',
      price: '₹ 1 66 999',
      images: "https://img.freepik.com/free-photo/quadcopter-flying-nature_231208-10459.jpg",
      shopLink: 'https://example.com'
    },
    {
      name: 'DJI MAVIC 2',
      price: '₹ 1 66 999',
      images: "https://images.pexels.com/photos/3945676/pexels-photo-3945676.jpeg",
      shopLink: 'https://example.com'
    },
    {
      name: 'DJI MAVIC 2',
      price: '₹ 1 66 999',
      images: "https://images.unsplash.com/photo-1588495077262-e41593eb23c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyb25lc3xlbnwwfHwwfHx8MA%3D%3D",
      shopLink: 'https://example.com'
    },
    {
      name: 'DJI MAVIC 2',
      price: '₹ 1 66 999',
      images: "https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=612x612&w=0&k=20&c=Dt8mbQjRDI09sl_Q2gaEdw88dDHi2627FzeKcXu0DOw=",
      shopLink: 'https://example.com'
    },

  ];


  replacement_list = [
    { logo: 'assets/logo 1.svg', title: '1 year ', word: 'Warranty' },
    { logo: 'assets/logo2.svg', title: '7-day', word: 'Replacement' },
    { logo: 'assets/logo3.svg', title: 'Free', word: 'Shipping' },
    { logo: 'assets/logo4.svg', title: 'GST ', word: 'Billing' }
  ];


  // nextCategory() {
  //   this.currentIndex = (this.currentIndex + 1) % this.categories.length;
  // }

  // prevCategory() {
  //   this.currentIndex = (this.currentIndex - 1 + this.categories.length) % this.categories.length;
  // }

  constructor(private product: ProductService) { }





  ngOnInit(): void {
    this.product.popularProducts().subscribe((data) => {
      this.popularProducts = data;
    })

    this.product.trendyProducts().subscribe((data) => {
      this.trendyProducts = data;
    })
  }
}
