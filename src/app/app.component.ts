import {Component, OnInit} from '@angular/core';
import { IDataSet, IDataOptions } from '@syncfusion/ej2-angular-pivotview';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public pivotData: IDataSet[];
  public dataSourceSettings: IDataOptions;
  public width;

  ngOnInit(): void {
    this.pivotData = [
      { Sold: 31, Amount: 52824, Country: 'France', Products: 'Mountain Bikes', Year: 'FY 2015', Quarter: 'Q1' },
      { Sold: 51, Amount: 86904, Country: 'France', Products: 'Mountain Bikes', Year: 'FY 2015', Quarter: 'Q2' },
      { Sold: 90, Amount: 153360, Country: 'France', Products: 'Mountain Bikes', Year: 'FY 2015', Quarter: 'Q3' },
      { Sold: 25, Amount: 42600, Country: 'France', Products: 'Mountain Bikes', Year: 'FY 2015', Quarter: 'Q4' },
      { Sold: 27, Amount: 46008, Country: 'France', Products: 'Mountain Bikes', Year: 'FY 2016', Quarter: 'Q1' }];

    this.dataSourceSettings = {
      dataSource: this.pivotData,
      expandAll: false,
      columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
      values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
      rows: [{ name: 'Country' }, { name: 'Products' }],
      formatSettings: [{ name: 'Amount' }],
      filters: []
    };
    this.width = '100%';
  }
}
