import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVirtualScrollerComponent } from './list-virtual-scroller.component';

describe('ListVirtualScrollerComponent', () => {
  let component: ListVirtualScrollerComponent;
  let fixture: ComponentFixture<ListVirtualScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVirtualScrollerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListVirtualScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
