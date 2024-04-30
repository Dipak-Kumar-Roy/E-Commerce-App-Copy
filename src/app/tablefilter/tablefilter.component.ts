
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



export interface UserData {
  id: number;
  name: string;
  age: number;
  gender: string;
  date: Date;
}



const DATA: UserData[] = [
  { id: 1, name: 'Alice', age: 30, gender: 'Female', date: new Date('2023-09-15') },
    { id: 2, name: 'Bob', age: 35, gender: 'Male', date: new Date('2024-08-20') },
    { id: 3, name: 'Charlie', age: 25, gender: 'Male', date: new Date('2024-07-10') },
    { id: 1, name: 'Alice', age: 30, gender: 'Female', date: new Date('2023-09-15') },
    { id: 2, name: 'Bob', age: 35, gender: 'Male', date: new Date('2024-08-20') },
    { id: 3, name: 'Charlie', age: 25, gender: 'Male', date: new Date('2024-07-10') },
    { id: 3, name: 'Charlie', age: 25, gender: 'Male', date: new Date('2024-03-29') },
    { id: 3, name: 'Charlie', age: 25, gender: 'Male', date: new Date('1999-03-29') },
    { id: 1, name: 'Alice', age: 30, gender: 'Female', date: new Date('2001-01-01') },
    { id: 2, name: 'Bob', age: 35, gender: 'Male', date: new Date('2002-02-02') },
    { id: 3, name: 'Charlie', age: 25, gender: 'Male', date: new Date('2003-03-03') },
    { id: 4, name: 'Diana', age: 40, gender: 'Female', date: new Date('2004-04-04') },
    { id: 5, name: 'Eve', age: 28, gender: 'Female', date: new Date('2005-05-05') },
    { id: 6, name: 'Frank', age: 45, gender: 'Male', date: new Date('2006-06-06') },
    { id: 7, name: 'Grace', age: 32, gender: 'Female', date: new Date('2007-07-07') },
    { id: 8, name: 'Henry', age: 38, gender: 'Male', date: new Date('2008-08-08') },
    { id: 9, name: 'Ivy', age: 27, gender: 'Female', date: new Date('2009-09-09') },
    { id: 10, name: 'Jack', age: 33, gender: 'Male', date: new Date('2010-10-10') },
    { id: 11, name: 'Katie', age: 29, gender: 'Female', date: new Date('2011-11-11') },
    { id: 12, name: 'Leo', age: 42, gender: 'Male', date: new Date('2012-12-12') },
    { id: 13, name: 'Mia', age: 36, gender: 'Female', date: new Date('2013-01-13') },
    { id: 14, name: 'Nathan', age: 31, gender: 'Male', date: new Date('2014-02-14') },
    { id: 15, name: 'Olivia', age: 37, gender: 'Female', date: new Date('2015-03-15') },
    { id: 16, name: 'Peter', age: 34, gender: 'Male', date: new Date('2016-04-16') },
    { id: 17, name: 'Quinn', age: 41, gender: 'Female', date: new Date('2017-05-17') },
    { id: 18, name: 'Ryan', age: 26, gender: 'Male', date: new Date('2018-06-18') },
    { id: 19, name: 'Sophia', age: 39, gender: 'Female', date: new Date('2019-07-19') },
    { id: 20, name: 'Tom', age: 43, gender: 'Male', date: new Date('2020-08-20') },
];



@Component({
  selector: 'app-tablefilter',
  templateUrl: './tablefilter.component.html',
  styleUrls: ['./tablefilter.component.css']
})
export class TablefilterComponent implements AfterViewInit {
  selectedFilter:string | undefined;
  displayedColumns: string[] = ['id', 'name', 'age', 'gender', 'date'];
  dataSource: MatTableDataSource<UserData>;

  startDate: Date | null;
  endDate: Date | null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(DATA);
    this.startDate = null;
    this.endDate = null;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  filterData() {
    if (this.startDate && this.endDate) {
      const adjustedEndDate = new Date(this.endDate);
      adjustedEndDate.setDate(adjustedEndDate.getDate() + 1);

      const filteredData = DATA.filter(user =>
        user.date >= this.startDate! && user.date < adjustedEndDate!
      );
      this.dataSource.data = filteredData;
    } else {
      this.dataSource.data = DATA;
    }
  }

}

