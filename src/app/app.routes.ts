import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListVirtualScrollerComponent } from './list-virtual-scroller/list-virtual-scroller.component';
import { ListAngularCdkComponent } from './list-angular-cdk/list-angular-cdk.component';

export const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'list-virtual-scroller',
    component: ListVirtualScrollerComponent,
  },
  {
    path: 'list-cdk',
    component: ListAngularCdkComponent,
  },
];
