import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';

import { TabComponent, ToolbarComponent, ItemModel, TabItemModel } from '@syncfusion/ej2-angular-navigations';
import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons'
import { Router, ActivatedRoute } from '@angular/router';
import { add,empty,remove,update,inputEle, addTab, removeTab, emptyTab, updateTab, closeBtn,headerPlace,tabRTL,showCloseButton,headerPlacement,tabRtlEnable, disableitem,disableItem, enableitem,enableItem  } from '../tab-FT.component';
import { disabletab,disableTab,enabletab,enableTab,showTabItem,hideTabItem,showItem,hideItem, selectitem,selectItem,refreshTab,refreshComponent, propertyPanlerefresh  } from '../tab-FT.component';

@Component({
  selector: 'tab-angular-for',
  templateUrl: './ngfor.html',
})
export class TabNGFor {

  public headerTexts: Object = [{ 'text': 'HTML' }, { 'text': 'C Sharp(C#)' },{ 'text': 'JavaScript' }];
  public tabLinks = [{con: 'HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to ' +
  'create web pages. Along with CSS, and JavaScript, HTML is a cornerstone technology, used by most websites to create visually ' +
  'engaging web pages, user interfaces for web applications, and user interfaces for many mobile applications.[1] Web ' +
  'browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a ' +
  'website semantically along with cues for presentation, making it a markup language, rather than a programming language.'},{con: 'C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its ' +
  'development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.'},{con: 'Java is a set of computer software and specifications developed by Sun Microsystems, later acquired ' +
  'by Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform ' +
  'computing environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to ' +
  'enterprise servers and supercomputers. While less common, Java applets run in secure, sandboxed environments to ' +
  'provide many features of native applications and can be embedded in HTML pages.'}];

  @ViewChild('element') tabObj: TabComponent;
  public tabItem: TabItemModel[] = [ {
    header: { 'text': 'ASP.NET' },
    content: 'ASP.NET is an open-source server-side web application framework designed for web development to produce ' +
    'dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications ' +
    'and web services. It was first released in January 2002 with version 1.0 of the .NET Framework, and is the successor ' +
    'to Microsoft\'\s Active Server Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing ' +
    'programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension framework allows ' +
    'ASP.NET components to process SOAP messages.'
    }]
  public orginTabitem: TabItemModel[];

  constructor(private route: ActivatedRoute, private router: Router) {

  }


  ngAfterViewInit() {
    if(!add) {
      this.router.navigateByUrl('/tab-FT');
      return;
    }
    propertyPanlerefresh();
    add.element.onclick = () => {
     addTab(this.tabObj);
    }

    remove.element.onclick = () => {
      removeTab(this.tabObj);
    }
    
    empty.element.onclick = () => {
      emptyTab(this.tabObj);
    }

    update.element.onclick = () => {
      updateTab(this.tabObj);
    }

    selectItem.element.onclick = () => {
      selectitem(this.tabObj);
    }

    refreshComponent.element.onclick = () => {
      refreshTab(this.tabObj);
    }

    disableItem.element.onclick = () => {
      disableitem(this.tabObj);
    }

    enableItem.element.onclick = () => {
      enableitem(this.tabObj);
    }

    showItem.element.onclick = () => {
      showTabItem(this.tabObj);
    }

    hideItem.element.onclick = () => {
      hideTabItem(this.tabObj);
    }

    disableTab.element.onclick = () => {
      disabletab(this.tabObj);
    }

    enableTab.element.onclick = () => {
      enabletab(this.tabObj);
    }

    headerPlacement.onchange =() => {
      headerPlace(this.tabObj, headerPlacement.checked);
    }

    closeBtn.onchange =() => {
      showCloseButton(this.tabObj, closeBtn.checked);
    }

    tabRTL.onchange =() => {
      tabRtlEnable(this.tabObj, tabRTL.checked);
    }
    
  }
}
