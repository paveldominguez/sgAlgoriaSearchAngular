import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-refinements',
  templateUrl: './product-refinements.component.html',
  styleUrls: ['./product-refinements.component.scss']
})
export class ProductRefinementsComponent implements OnInit {

  refinements: any = [
    // {
    //   title: "Category",
    //   type: "hierarchical-menu",
    //   config: {
    //     attribute: [
    //       ["Category", "type"]
    //     ],
    //   }
    // },
    {
      title: "Category",
      config: {
        attribute: 'Category',
      }
    },
    {
      title: "Type",
      config: {
        attribute: 'Type',
      }
    },
    {
      title: "Varietals",
      config: {
        attribute: 'Varietal',
      }
    },
    {
      title: "Countries",
      config: {
        attribute: 'Country',
      }
    },
    {
      title: "Regions",
      config: {
        attribute: 'Region',
      }
    },
    {
      title: "Price per Case",
      type: "range",
      config: {
        attribute: 'FLPrice1',
      }
    },
    {
      title: "Price per Unit",
      type: "range",
      config: {
        attribute: 'PricePerBottle1',
      }
    },
    {
      title: "Deals",
      type: "toggle",
      config: {
        attribute: 'HasDeals',
        label: "has deals",

      }
    },
    {
      title: "availability",
      config: {
        attribute: 'StockStatus',
        searchable: false
      }
    }
  ];


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
