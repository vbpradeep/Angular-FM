import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';

import { TabComponent, ToolbarComponent, ItemModel, AccordionComponent } from '@syncfusion/ej2-angular-navigations';
import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons'
import { Router, ActivatedRoute } from '@angular/router';

import { addItem, removeItem, emptyAcrdn, updatetItem, expandItem, collapseItem, expandAll, collapseAll, disableItem, enableItem, hideItem, showItem, refreshAcrdn  } from '../accordion-FT.component';
import { addItemFn, removeItemFn, emptyAcrdnFn, updateItemFn, expandItemFn, collapseItemFn, expandAllFn, collapseAllFn, disableItemFn, enableItemFn, hideItemFn, showItemFn, refreshFn } from '../accordion-FT.component';

@Component({
  selector: 'acrdn-default',
  templateUrl: './acrdnDefault.html',
})
export class AcrdnDefault {

  @ViewChild('element') acrdnObj: AccordionComponent;

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
