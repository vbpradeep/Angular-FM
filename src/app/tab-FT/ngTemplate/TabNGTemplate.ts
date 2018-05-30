import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';

import { TabComponent, ToolbarComponent, ItemModel } from '@syncfusion/ej2-ng-navigations';
import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-ng-buttons'
import { Router, ActivatedRoute } from '@angular/router';
import { add, empty, remove, update, inputEle, addTab, removeTab, emptyTab, updateTab, closeBtn, headerPlace, tabRTL, showCloseButton, headerPlacement, tabRtlEnable, disableitem, disableItem, enableitem, enableItem } from '../tab-FT.component';
import { disabletab, disableTab, enabletab, enableTab, showTabItem, hideTabItem, showItem, hideItem, selectitem, selectItem, refreshTab, refreshComponent, propertyPanlerefresh } from '../tab-FT.component';
import { orderDetails} from '../ngRoute/ngRouteGrid/data'

@Component({
  selector: 'tab-ng-template',
  templateUrl: './TabNGTemplate.html',
})
export class TabNGTemplate {

  @ViewChild('element') tabObj: TabComponent;
  public headerText: Object = [{ text: 'Calendar' }, { text: 'ComboBox' }, { text: 'Grid' }];
  // define the JSON of data
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
    if (!add) {
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

    headerPlacement.onchange = () => {
      headerPlace(this.tabObj, headerPlacement.checked);
    }

    closeBtn.onchange = () => {
      showCloseButton(this.tabObj, closeBtn.checked);
    }

    tabRTL.onchange = () => {
      tabRtlEnable(this.tabObj, tabRTL.checked);
    }

  }
}
