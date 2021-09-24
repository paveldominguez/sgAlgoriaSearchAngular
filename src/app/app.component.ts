import {Component} from '@angular/core';
import algoliasearch from "algoliasearch/lite";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private searchClient = algoliasearch(
    'XQ4FZVC6EV',
    'ca262ae0cd15d2b2e5425fe68a81809b'
  );

  config = {
    indexName: 'ProductSiteWarehouseCatalog',
    searchClient: this.searchClient
  };

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
