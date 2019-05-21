import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'inplace-default',
    templateUrl: './inplace-FT.html'
  })

export class InplaceFTComponent {

    constructor(private route: ActivatedRoute, private router: Router) {

    }
    public inplacedefault(): void {
        this.router.navigateByUrl('/inplace-FT/inplaceDefault');
      }
    public ngtemplate(): void {
      debugger
      this.router.navigateByUrl('/inplace-FT/ngTemplate');
    }
    public inplaceform(): void {
      this.router.navigateByUrl('/inplace-FT/inplaceForm');
    }
      ngAfterViewInit() {

      }
}