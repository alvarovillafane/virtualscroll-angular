import { Component, Input } from '@angular/core';
import { ListCellComponent } from '../list-cell/list-cell.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-list-row-angular-cdk',
  standalone: true,
  imports: [ListCellComponent, ScrollingModule],
  templateUrl: './list-row-angular-cdk.component.html',
  styleUrl: './list-row-angular-cdk.component.scss',
})
export class ListRowAngularCdkComponent {
  @Input() row: Array<any> = [];
}
