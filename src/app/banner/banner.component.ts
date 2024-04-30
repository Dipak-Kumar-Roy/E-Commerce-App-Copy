import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})


export class BannerComponent implements OnInit, OnDestroy {
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  private interval: any;

  blogList = [
    {
      date: '21 MAR , 2024',
      title: 'corporis, ad deserunt ver at Lorem ipsum dolor sit amet.Id, quibusdam iure....',
      content: 'aspernatur. Consequuntur deserunt obcaecati eius facilis quisquam odit commodi in.....',
      imageUrl: 'https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=612x612&w=0&k=20&c=Dt8mbQjRDI09sl_Q2gaEdw88dDHi2627FzeKcXu0DOw='
    },
    {
      date: '21 MAR , 2024',
      title: 'corporis, ad deserunt ver at Lorem ipsum dolor sit amet.Id, quibusdam iure....',
      content: 'aspernatur. Consequuntur deserunt obcaecati eius facilis quisquam odit commodi in.....',
      imageUrl: 'https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=612x612&w=0&k=20&c=Dt8mbQjRDI09sl_Q2gaEdw88dDHi2627FzeKcXu0DOw='
    },
    {
      date: '21 MAR , 2024',
      title: 'corporis, ad deserunt ver at Lorem ipsum dolor sit amet.Id, quibusdam iure....',
      content: 'aspernatur. Consequuntur deserunt obcaecati eius facilis quisquam odit commodi in.....',
      imageUrl: 'https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=612x612&w=0&k=20&c=Dt8mbQjRDI09sl_Q2gaEdw88dDHi2627FzeKcXu0DOw='
    },
    {
      date: '21 MAR , 2024',
      title: 'corporis, ad deserunt ver at Lorem ipsum dolor sit amet.Id, quibusdam iure....',
      content: 'aspernatur. Consequuntur deserunt obcaecati eius facilis quisquam odit commodi in.....',
      imageUrl: 'https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=612x612&w=0&k=20&c=Dt8mbQjRDI09sl_Q2gaEdw88dDHi2627FzeKcXu0DOw='
    },
    {
      date: '21 MAR , 2024',
      title: 'corporis, ad deserunt ver at Lorem ipsum dolor sit amet.Id, quibusdam iure....',
      content: 'aspernatur. Consequuntur deserunt obcaecati eius facilis quisquam odit commodi in.....',
      imageUrl: 'https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=612x612&w=0&k=20&c=Dt8mbQjRDI09sl_Q2gaEdw88dDHi2627FzeKcXu0DOw='
    },
    {
      date: '21 MAR , 2024',
      title: 'corporis, ad deserunt ver at Lorem ipsum dolor sit amet.Id, quibusdam iure....',
      content: 'aspernatur. Consequuntur deserunt obcaecati eius facilis quisquam odit commodi in.....',
      imageUrl: 'https://media.istockphoto.com/id/911190112/photo/quadcopter-drone-with-4k-video-camera-flying-in-the-air.jpg?s=612x612&w=0&k=20&c=Dt8mbQjRDI09sl_Q2gaEdw88dDHi2627FzeKcXu0DOw='
    },

  ]

  drones_list = [
    {
      name: 'DJI MAVIC 2',
      price: '₹ 1 66 999',
      images: "https://img.freepik.com/free-photo/quadcopter-flying-nature_231208-10459.jpg",
      shopLink: 'https://example.com'
    },
    {
      name: 'DJI MAVIC 2',
      price: '₹ 1 66 999',
      images:"https://images.pexels.com/photos/3945676/pexels-photo-3945676.jpeg" ,
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
      images:"https://images.pexels.com/photos/3945676/pexels-photo-3945676.jpeg" ,
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

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.updateTime();
    // Update time every second on the banner
    this.interval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  updateTime() {
    const currentDate = new Date();
    const formattedTime = this.datePipe.transform(currentDate, 'HH:mm:ss') ?? '00:00:00';
    const [hours, minutes, seconds] = formattedTime.split(':');
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
}


