import { Component } from '@angular/core';
import { MockDataService } from '../mock-data.service';
import { ListRowComponent } from '../list-row/list-row.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListRowComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  listRows: any;

  constructor(private readonly mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.listRows = this.mockDataService.generateMockData(20);
  }
}