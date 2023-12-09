import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-cell',
  standalone: true,
  imports: [],
  templateUrl: './list-cell.component.html',
  styleUrl: './list-cell.component.scss',
})
export class ListCellComponent {
  @Input() cell: any;
}
