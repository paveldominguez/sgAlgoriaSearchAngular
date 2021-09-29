import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  constructor() { }

  transformItems(items: any) {
    return items.map((item: any) => {
      const refinements = item.refinements.map((refinementsItem: any) => ({
        ...refinementsItem,
        label: refinementsItem.label.toLowerCase(),
      }));

      return {...item, refinements};
    });
  }
}
