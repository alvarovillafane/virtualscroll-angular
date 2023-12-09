import { Component, Input } from '@angular/core';
import { ListCellComponent } from '../list-cell/list-cell.component';
import { CommonModule } from '@angular/common';
import { VirtualScrollerModule } from '@iharbeck/ngx-virtual-scroller';

@Component({
  selector: 'app-list-row-virtual-scroller',
  standalone: true,
  imports: [ListCellComponent, CommonModule, VirtualScrollerModule],
  templateUrl: './list-row-virtual-scroller.component.html',
  styleUrl: './list-row-virtual-scroller.component.scss',
})
export class ListRowVirtualScrollerComponent {
  @Input() row: Array<any> = [];
  @Input() parentScroll: any;
}
