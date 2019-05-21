import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';

import { TabComponent, ToolbarComponent } from '@syncfusion/ej2-angular-navigations';
import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'angularTemplate.html',
})

export class AppComponent {


  constructor(private route: ActivatedRoute, private router: Router) {

  }


  public tabclick(): void {
    this.router.navigateByUrl('/tab-FT');
  }
  public toolbarclick(): void {
    this.router.navigateByUrl('/toolbar-FT');
  }
  public accordionclick(): void {
    this.router.navigateByUrl('/accordion-FT');
  }
  public toastclick(): void {
    this.router.navigateByUrl('/toast-FT');
  }
  public inplaceclick(): void {
    this.router.navigateByUrl('/inplace-FT');
  }

  ngAfterViewInit() { 
    this.router.navigateByUrl('/tab-FT');
  }

}
