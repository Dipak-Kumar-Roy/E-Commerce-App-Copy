import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbSubject = new BehaviorSubject<string[]>([]);
  breadcrumb$ = this.breadcrumbSubject.asObservable();

  setBreadcrumb(labels: string[]) {
    this.breadcrumbSubject.next(labels);
  }
}

