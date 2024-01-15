import { Component, ViewChild } from '@angular/core';
import { MockDataService } from '../mock-data.service';
import { CommonModule } from '@angular/common';
import { ListRowComponent } from '../list-row/list-row.component';
import {
  ScrollingModule,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { ListRowAngularCdkComponent } from '../list-row-angular-cdk/list-row-angular-cdk.component';
import { ListRowVirtualScrollerComponent } from '../list-row-virtual-scroller/list-row-virtual-scroller.component';

@Component({
  selector: 'app-list-angular-cdk',
  standalone: true,
  imports: [
    ListRowComponent,
    CommonModule,
    ScrollingModule,
    ListRowAngularCdkComponent,
    ListRowVirtualScrollerComponent,
  ],
  templateUrl: './list-angular-cdk.component.html',
  styleUrl: './list-angular-cdk.component.scss',
})
export class ListAngularCdkComponent {
  listRows: any;
  loading = true;
  numColumns = 100;
  numRows = 100;
  @ViewChild(CdkVirtualScrollViewport)
  viewport!: CdkVirtualScrollViewport;

  constructor(private readonly mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.mockDataService
      .generateMockData(this.numRows, this.numColumns)
      .subscribe((data: any) => {
        this.listRows = [...data];
        this.loading = false;
      });
  }

  protected fetchMore(event: any) {
    console.log(
      { event },
      { viewport: this.viewport },
      this.viewport.getRenderedRange(),
      this.viewport.getDataLength()
    );
    if (
      this.viewport.getRenderedRange().end <=
      this.viewport.getDataLength() - 10
    ) {
      return;
    }

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
