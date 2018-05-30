import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';

import { TabComponent, ToolbarComponent, ItemModel, AccordionComponent } from '@syncfusion/ej2-ng-navigations';
import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-ng-buttons'
import { Router, ActivatedRoute } from '@angular/router';

import { addItem, removeItem, emptyAcrdn, updatetItem, expandItem, collapseItem, expandAll, collapseAll, disableItem, enableItem, hideItem, showItem, refreshAcrdn  } from '../accordion-FT.component';
import { addItemFn, removeItemFn, emptyAcrdnFn, updateItemFn, expandItemFn, collapseItemFn, expandAllFn, collapseAllFn, disableItemFn, enableItemFn, hideItemFn, showItemFn, refreshFn } from '../accordion-FT.component';

@Component({
  selector: 'acrdn-ng-for',
  templateUrl: './acrdnNgFor.html',
})
export class AcrdnNgFor {

  @ViewChild('element') acrdnObj: AccordionComponent;

  public items: Object[] = [ 
    {header: 'ASP.NET', content: 'Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services. ASP.NET pages execute on the server and generate markup such as HTML, WML, or XML that is sent to a desktop or mobile browser. ASP.NET pages use a compiled,event-driven programming model that improves performance and enables the separation of application logic and user interface.' },
    {header: 'ASP.NET MVC', content: 'The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller. The ASP.NET MVC framework provides an alternative to the ASP.NET Web Forms pattern for creating Web applications. The ASP.NET MVC framework is a lightweight, highly testable presentation framework that (as with Web Forms-based applications) is integrated with existing ASP.NET features, such as master pages and membership-based authentication.' },
    {header: 'JavaScript', content: 'JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.More recently, however, it has become common in both game development and the creation of desktop applications.' },
]


  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngAfterViewInit() {

    addItem.element.onclick = () => {
      addItemFn(this.acrdnObj);
    }

    removeItem.element.onclick = () => {
      removeItemFn(this.acrdnObj);
    }

    updatetItem.element.onclick = () => {
      updateItemFn(this.acrdnObj);
    }

    expandItem.element.onclick = () => {
      expandItemFn(this.acrdnObj);
    }

    updatetItem.element.onclick = () => {
      updateItemFn(this.acrdnObj);
    }

    collapseItem.element.onclick = () => {
      collapseItemFn(this.acrdnObj);
    }

    expandAll.element.onclick = () => {
      expandAllFn(this.acrdnObj);
    }

    collapseAll.element.onclick = () => {
      collapseAllFn(this.acrdnObj);
    }

    disableItem.element.onclick = () => {
      disableItemFn(this.acrdnObj);
    }

    enableItem.element.onclick = () => {
      enableItemFn(this.acrdnObj);
    }

    hideItem.element.onclick = () => {
      hideItemFn(this.acrdnObj);
    }

    showItem.element.onclick = () => {
      showItemFn(this.acrdnObj);
    }

    refreshAcrdn.element.onclick = () => {
      refreshFn(this.acrdnObj);
    }
  }
}
