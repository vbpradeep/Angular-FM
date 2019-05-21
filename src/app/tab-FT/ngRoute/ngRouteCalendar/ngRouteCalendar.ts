import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';

import { TabComponent, ToolbarComponent, ItemModel } from '@syncfusion/ej2-angular-navigations';
import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'tab-route-calendar',
  templateUrl: './ngRouteCalendar.html',
})
export class TabNGRouteCalendar {
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngAfterViewInit() {
  }
}
