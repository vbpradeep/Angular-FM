import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'toast-angular-ft',
  templateUrl: './toast-FT.html',
})
export class ToastFTComponent {




  constructor(private route: ActivatedRoute, private router: Router) {

  }
  public toastdefault(): void {
    this.router.navigateByUrl('/toast-FT/toastDefault');
  }
  public toastcontainer(): void {
    this.router.navigateByUrl('/toast-FT/toastContainer');
  }
  public toastconTem(): void {
    this.router.navigateByUrl('/toast-FT/toastcontTemp');
  }
  public toastTemplate(): void {
    this.router.navigateByUrl('/toast-FT/toastTemp');
  }

  ngAfterViewInit() {

  }
}



