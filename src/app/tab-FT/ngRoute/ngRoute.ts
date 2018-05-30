import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';

import { TabComponent, ToolbarComponent, ItemModel, SelectEventArgs } from '@syncfusion/ej2-ng-navigations';
import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-ng-buttons';
import { Router, ActivatedRoute } from '@angular/router';
import { add,empty,remove,update,inputEle, addTab, removeTab, emptyTab, updateTab, closeBtn,headerPlace,tabRTL,showCloseButton,headerPlacement,tabRtlEnable, disableitem,disableItem, enableitem,enableItem  } from '../tab-FT.component';
import { disabletab,disableTab,enabletab,enableTab,showTabItem,hideTabItem,showItem,hideItem, selectitem,selectItem,refreshTab,refreshComponent, propertyPanlerefresh  } from '../tab-FT.component';

@Component({
  selector: 'tab-route',
  templateUrl: './ngRoute.html',
})
export class TabNGRoute {

  @ViewChild('element') tabObj: TabComponent;
  public headerText: Object = [{ text: "Calendar" },
  { text: "ComboBox" }, { text: "Grid" }];

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  public tabselect(e: SelectEventArgs) {

    if (e.selectedIndex === 0) {
      this.router.navigateByUrl('/tab-FT/ngRoute/ngRouteCalendar');
    }
    if (e.selectedIndex === 1) {
      this.router.navigateByUrl('/tab-FT/ngRoute/ngRouteComboBox');
    }
    if (e.selectedIndex === 2) {
      this.router.navigateByUrl('/tab-FT/ngRoute/ngRouteGrid');
    }
     
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
