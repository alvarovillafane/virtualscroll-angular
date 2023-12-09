import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRowVirtualScrollerComponent } from './list-row-virtual-scroller.component';

describe('ListRowVirtualScrollerComponent', () => {
  let component: ListRowVirtualScrollerComponent;
  let fixture: ComponentFixture<ListRowVirtualScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRowVirtualScrollerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRowVirtualScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
