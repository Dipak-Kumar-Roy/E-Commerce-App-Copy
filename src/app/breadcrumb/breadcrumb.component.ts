import { Component, OnInit } from '@angular/core';
import {BreadcrumbService} from '../services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: { name: string, link: string }[] = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.breadcrumb$.subscribe((breadcrumbs) => {
      // Assuming breadcrumbs is an array of objects
      this.breadcrumbs = breadcrumbs.map(item => JSON.parse(item));
      // console.log(this.breadcrumbs);
    });
  }
}
