import { Component, ElementRef } from '@angular/core';
import {
  IPageInfo,
  VirtualScrollerModule,
} from '@iharbeck/ngx-virtual-scroller';
import { MockDataService } from '../mock-data.service';
import { ListRowComponent } from '../list-row/list-row.component';
import { CommonModule } from '@angular/common';
import { ListRowVirtualScrollerComponent } from '../list-row-virtual-scroller/list-row-virtual-scroller.component';

@Component({
  selector: 'app-list-virtual-scroller',
  standalone: true,
  imports: [
    ListRowComponent,
    CommonModule,
    VirtualScrollerModule,
    ListRowVirtualScrollerComponent,
  ],
  templateUrl: './list-virtual-scroller.component.html',
  styleUrl: './list-virtual-scroller.component.scss',
})
export class ListVirtualScrollerComponent {
  listRows: any;
  loading = true;
  numColumns = 50;
  numRows = 50;
  parentScroll!: ElementRef;
  refresh = () => {};

  constructor(
    private readonly mockDataService: MockDataService,
    private readonly elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.parentScroll = this.elementRef;
    this.mockDataService
      .generateMockData(this.numRows, this.numColumns)
      .subscribe((data: any) => {
        this.listRows = [...data];
        this.loading = false;
      });
  }

  protected fetchMore(event: IPageInfo) {
    if (event.endIndex !== this.listRows.length - 1) return;
    this.loading = true;

    this.mockDataService
      .generateMockData(this.numRows, this.numColumns)
      .subscribe((data: any) => {
        this.listRows = this.listRows.concat(data);
        this.loading = false;
      });
  }

  public myTrackByFunction(index: number, item: any): number {
    return item.value;
  }
}
