import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';

import { TabComponent, ToolbarComponent, ItemModel, TabItemModel } from '@syncfusion/ej2-ng-navigations';
import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-ng-buttons'
import { Router, ActivatedRoute } from '@angular/router';

import { add,empty,remove,update,inputEle, addTab, removeTab, emptyTab, updateTab, closeBtn,headerPlace,tabRTL,showCloseButton,headerPlacement,tabRtlEnable, disableitem,disableItem, enableitem,enableItem  } from '../tab-FT.component';
import { disabletab,disableTab,enabletab,enableTab,showTabItem,hideTabItem,showItem,hideItem, selectitem,selectItem,refreshTab,refreshComponent, propertyPanlerefresh  } from '../tab-FT.component';
import { overflowChange, overflowMode } from '../tab-FT.component';
@Component({
  selector: 'tab-default',
  templateUrl: './Tabdefault.html',
})
export class TabDefault {

  @ViewChild('element') tabObj: TabComponent;

 // Mapping Tab items Header property   
 public headerText: Object = [{ text: 'HTML' }, { text: 'C Sharp(C#)' }, { text: 'Java' }, { text: 'VB.Net' },
 { text: 'Xamarin' }, { text: 'ASP.NET MVC' }, { text: 'JavaScript' }];

// Mapping Tab items Content property    
public content0: string = 'HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to ' +
 'create web pages. Along with CSS, and JavaScript, HTML is a cornerstone technology, used by most websites to create visually ' +
 'engaging web pages, user interfaces for web applications, and user interfaces for many mobile applications.[1] Web ' +
 'browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a ' +
 'website semantically along with cues for presentation, making it a markup language, rather than a programming language.';

// Mapping Tab items Content property    
public content1: string = 'C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its ' +
 'development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.';

// Mapping Tab items Content property    
public content2: string = 'Java is a set of computer software and specifications developed by Sun Microsystems, later acquired ' +
 'by Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform ' +
 'computing environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to ' +
 'enterprise servers and supercomputers. While less common, Java applets run in secure, sandboxed environments to ' +
 'provide many features of native applications and can be embedded in HTML pages.';

// Mapping Tab items Content property    
public content3: string = 'The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also ' +
 'includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.';

// Mapping Tab items Content property    
public content4: string = 'Xamarin is a San Francisco, California based software company created in May 2011[3] by the engineers ' +
 'that created Mono,[4] Mono for Android and MonoTouch that are cross-platform implementations of the Common Language ' +
 'Infrastructure (CLI) and Common Language Specifications (often called Microsoft .NET). With a C#-shared codebase, ' +
 'developers can use Xamarin tools to write native Android, iOS, and Windows apps with native user interfaces and share ' +
 'code across multiple platforms.[5] Xamarin has over 1 million developers in more than 120 countries around the World ' +
 'as of May 2015.';

// Mapping Tab items Content property    
public content5: string = 'The ASP.NET MVC is a web application framework developed by Microsoft, which implements the ' +
 'model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web Forms component which is ' +
 'proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET Web API, and ASP.NET Web Pages (a platform using ' +
 'only Razor pages) will merge into a unified MVC 6.The project is called ASP.NET vNext.';

// Mapping Tab items Content property    
public content6: string = 'JavaScript (JS) is an interpreted computer programming language. It was originally implemented as ' +
 'part of web browsers so that client-side scripts could interact with the user, control the browser, communicate ' +
 'asynchronously, and alter the document content that was displayed.[5] More recently, however, it has become common in ' +
 'both game development and the creation of desktop applications.';

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    if(!add) {
      this.router.navigateByUrl('/tab-FT');
    }
  }

  ngAfterViewInit() {
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

    overflowMode.onchange = () => {
      overflowChange(this.tabObj, overflowMode.checked);
    }

    tabRTL.onchange =() => {
      tabRtlEnable(this.tabObj, tabRTL.checked);
    }
  }
}
