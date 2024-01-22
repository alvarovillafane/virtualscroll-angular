import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  constructor() {}

  generateMockData(numRows = 1000, numColumns = 100): any {
    const mockData: any[] = [];

    for (let i = 0; i < numRows; i++) {
      const row: any[] = [];
      for (let j = 0; j < numColumns; j++) {
        const randomString = this.generateRandomString();
        const type = j % 2 ? 'text' : 'text';

        row.push({ value: `${i}-${j}-${randomString}`, type, index: j });
      }
      mockData.push(row);
    }

    return of(mockData).pipe(delay(500));
  }

  private generateRandomString(): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    const stringLength = 10; // You can adjust the length of the random string

    for (let i = 0; i < stringLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}
