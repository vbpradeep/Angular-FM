import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';

import { TabComponent, ToolbarComponent, ItemModel } from '@syncfusion/ej2-ng-navigations';
import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-ng-buttons'
import { Router, ActivatedRoute } from '@angular/router';
import { orderDetails } from './data';

@Component({
  selector: 'tab-route-grid',
  templateUrl: './ngRouteGrid.html',
})
export class TabNGRouteGrid {
  constructor(private route: ActivatedRoute, private router: Router) {

  }
  public data: Object[] = [];

  ngOnInit(): void {
      this.data = orderDetails;
  }
}
