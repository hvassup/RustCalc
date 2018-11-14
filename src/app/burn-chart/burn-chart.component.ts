import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {BurnableItem} from '../../model/Item';

@Component({
  selector: 'app-burn-chart',
  templateUrl: './burn-chart.component.html',
  styleUrls: ['./burn-chart.component.scss']
})
export class BurnChartComponent implements OnInit {
  @Input()
  public set itemToBurn(item: BurnableItem) {
    this._itemToBurn = item;
    this.numbersChanged();
  }
  public _itemToBurn: BurnableItem;
  public itemAmount = 1;
  public splitCount = 1;
  public requiredWoodAmount = 0;
  constructor() { }

  ngOnInit() {
  }

  numbersChanged() {
    this.requiredWoodAmount = Math.ceil(this.itemAmount / this.splitCount) * this._itemToBurn.burnrate;
    if (this.requiredWoodAmount === Infinity || this.requiredWoodAmount == NaN) {
      this.requiredWoodAmount = 0;
    }
  }

}
