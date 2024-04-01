import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablefilterComponent } from './tablefilter.component';

describe('TablefilterComponent', () => {
  let component: TablefilterComponent;
  let fixture: ComponentFixture<TablefilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablefilterComponent]
    });
    fixture = TestBed.createComponent(TablefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
