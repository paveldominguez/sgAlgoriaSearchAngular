import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-refinements',
  templateUrl: './product-refinements.component.html',
  styleUrls: ['./product-refinements.component.scss']
})
export class ProductRefinementsComponent implements OnInit {


  refinements: any = [{
    title: "Category",
    config: {
      attribute: 'Category',
    }
  }, {
    title: "Type",
    config: {
      attribute: 'Type',
      showMoreLimit: 300

    }
  }, {
    title: "Varietals",
    config: {
      attribute: 'Varietal',
      showMoreLimit: 1000

    }
  }, {
    title: "Countries",
    config: {
      attribute: 'Country',
      showMoreLimit: 300
    }
  }, {
    title: "Regions",
    config: {
      attribute: 'Region',
    }
  }];


  constructor() {
  }

  ngOnInit(): void {
  }


  transformItems(items: any) {
    return items.map((item: any) => (
      {
        ...item,
        label: item.label.toLowerCase(),
        highlighted: item.highlighted.toLowerCase(),
      }
    ));
  }
}
