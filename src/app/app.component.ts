import { Component } from '@angular/core';
import {BurnableItem, Item, burnableItems, items} from '../model/Item';
import {ItemComponent} from './item/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedItem: BurnableItem;
  public items = burnableItems;
  public selectItem(item: BurnableItem) {
    this.selectedItem = item;
    console.log(this.selectedItem);
  }
}
