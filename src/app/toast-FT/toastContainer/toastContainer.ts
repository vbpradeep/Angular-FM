import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';

import { ToastComponent } from '@syncfusion/ej2-angular-notifications'

import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'toast-container',
  templateUrl: './toastContainer.html',
})
export class ToastContainer {

  @ViewChild('toast') toastObj: ToastComponent;  

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  public onCreate = () => {
    setTimeout(()=>{
    this.toastObj.show();
    },200);
}

  ngAfterViewInit() {
 
  }
}
