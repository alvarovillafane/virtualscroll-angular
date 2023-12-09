import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAngularCdkComponent } from './list-angular-cdk.component';

describe('ListAngularCdkComponent', () => {
  let component: ListAngularCdkComponent;
  let fixture: ComponentFixture<ListAngularCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAngularCdkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAngularCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
