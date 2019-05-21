import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';

import { TabComponent, ToolbarComponent, ItemModel, AccordionComponent } from '@syncfusion/ej2-angular-navigations';
import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons'
import { Router, ActivatedRoute } from '@angular/router';

import { addItem, removeItem, emptyAcrdn, updatetItem, expandItem, collapseItem, expandAll, collapseAll, disableItem, enableItem, hideItem, showItem, refreshAcrdn  } from '../accordion-FT.component';
import { addItemFn, removeItemFn, emptyAcrdnFn, updateItemFn, expandItemFn, collapseItemFn, expandAllFn, collapseAllFn, disableItemFn, enableItemFn, hideItemFn, showItemFn, refreshFn } from '../accordion-FT.component';
import { orderDetails} from '../../tab-FT/ngRoute/ngRouteGrid/data'

@Component({
  selector: 'acrdn-angular-template',
  templateUrl: './acrdnNgTemplate.html',
})
export class AcrdnNgTemplate {

  @ViewChild('element') acrdnObj: AccordionComponent;
  public sportsData: Object[] = [
    { Id: 'Game1', Game: 'American Football' },
    { Id: 'Game2', Game: 'Badminton' },
    { Id: 'Game3', Game: 'Basketball' },
    { Id: 'Game4', Game: 'Cricket' },
    { Id: 'Game5', Game: 'Football' },
    { Id: 'Game6', Game: 'Golf' },
    { Id: 'Game7', Game: 'Hockey' },
    { Id: 'Game8', Game: 'Rugby' },
    { Id: 'Game9', Game: 'Snooker' },
    { Id: 'Game10', Game: 'Tennis' }
  ];
  // maps the appropriate column to fields property
  public fields: Object = { text: 'Game', value: 'Id' };
  // set the height of the popup element
  public height: string = '250px';
  // set the value to select an item based on mapped value at initial rendering
  public value: string = 'Game3';
  // set the placeholder to ComboBox input element
  public waterMark: string = 'Select a game';
  public data: Object[] = [];
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.data = orderDetails;
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
