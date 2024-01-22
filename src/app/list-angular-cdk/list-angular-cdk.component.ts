import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MockDataService } from '../mock-data.service';
import { CommonModule } from '@angular/common';
import { ListRowComponent } from '../list-row/list-row.component';
import {
  ScrollingModule,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { ListRowAngularCdkComponent } from '../list-row-angular-cdk/list-row-angular-cdk.component';
import { ListRowVirtualScrollerComponent } from '../list-row-virtual-scroller/list-row-virtual-scroller.component';
import {
  FixedSizeVirtualScrollStrategy, // choose any strategy you like
  RxVirtualScrollViewportComponent,
  RxVirtualFor,
} from '@rx-angular/template/experimental/virtual-scrolling';
import { Subject, debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-list-angular-cdk',
  standalone: true,
  imports: [
    ListRowComponent,
    CommonModule,
    ScrollingModule,
    ListRowAngularCdkComponent,
    ListRowVirtualScrollerComponent,
    RxVirtualFor,
    RxVirtualScrollViewportComponent,
    FixedSizeVirtualScrollStrategy,
  ],
  templateUrl: './list-angular-cdk.component.html',
  styleUrl: './list-angular-cdk.component.scss',
})
export class ListAngularCdkComponent {
  listRows: any;
  loading = true;
  numColumns = 100;
  numRows = 30;
  @ViewChild(CdkVirtualScrollViewport)
  viewport!: CdkVirtualScrollViewport;
  private apiCallTrigger$ = new Subject<void>();

  constructor(
    private readonly mockDataService: MockDataService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.mockDataService
      .generateMockData(this.numRows, this.numColumns)
      .subscribe((data: any) => {
        this.listRows = [...data];
        this.loading = false;
      });

    this.apiCallTrigger$
      .pipe(
        debounceTime(300), // Adjust the debounce time according to your needs
        switchMap(() => {
          // Trigger API call
          this.loading = true;
          return this.mockDataService.generateMockData(
            this.numRows,
            this.numColumns
          );
        })
      )
      .subscribe((data: any) => {
        // Handle API response
        this.listRows = this.listRows.concat(data);
        console.log('**********emit loading', this.listRows.length);
        this.loading = false;
        this.changeDetectorRef.detectChanges();
      });
  }

  protected scrolledIndexChange(event: any) {
    const totalRendered = 20;
    console.log({ event });
  }
  protected viewRange(rendered: any) {
    console.log({ rendered }, this.listRows.length, rendered.end + 5);

    if (this.listRows.length <= rendered.end + 5) {
      this.apiCallTrigger$.next();
    }
  }

  public myTrackByFunction(index: number, item: any): number {
    return item.value;
  }
}
