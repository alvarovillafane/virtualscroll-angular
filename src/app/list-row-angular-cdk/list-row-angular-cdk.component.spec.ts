import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRowAngularCdkComponent } from './list-row-angular-cdk.component';

describe('ListRowAngularCdkComponent', () => {
  let component: ListRowAngularCdkComponent;
  let fixture: ComponentFixture<ListRowAngularCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRowAngularCdkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRowAngularCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
