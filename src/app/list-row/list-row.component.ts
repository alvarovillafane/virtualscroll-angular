import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListCellComponent } from '../list-cell/list-cell.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-row',
  standalone: true,
  imports: [ListCellComponent, CommonModule],
  templateUrl: './list-row.component.html',
  styleUrl: './list-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListRowComponent {
  @Input() row: Array<any> = [];
}
