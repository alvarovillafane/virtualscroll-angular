import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { Component, HostListener, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ObserveVisibilityDirective } from '../observe-visibility.directive';

@Component({
  selector: 'app-list-cell',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ObserveVisibilityDirective,
  ],

  templateUrl: './list-cell.component.html',
  styleUrl: './list-cell.component.scss',
})
export class ListCellComponent {
  @Input() cell: any;
  visible = true;
  bgClass = false;

  @HostListener('click', ['$event'])
  onClick(event: any) {
    this.bgClass = true;
  }

  onVisible(value: any) {
    this.visible = true;
    // console.log('visible', value);
  }

  onInvisible(value: any) {
    this.visible = false;
    // console.log('invisible', value);
  }
}
