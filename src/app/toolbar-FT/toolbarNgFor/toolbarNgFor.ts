import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';

import { TabComponent, ToolbarComponent, ItemModel } from '@syncfusion/ej2-angular-navigations';
import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons'
import { Router, ActivatedRoute } from '@angular/router';

import { add, addMore, remove, disableItem, empty, enableItem, hideItem, overflowMode, tbarRtl, showItem, updateItem } from '../toolbar-FT.component';
import { propertyPanlerefresh, additem, addmoreitem, removeitem, disableitem, emptyItem, enableitem, hideitem, showitem, updateitem, rtlModeChange, overflowmodeChange } from '../toolbar-FT.component';

@Component({
  selector: 'tbar-angular-for',
  templateUrl: './toolbarNgFor.html',
})
export class TbarNGFor {

  @ViewChild('element') tbarObj: ToolbarComponent;

  public toolbarItems = [
    {prefixIcon :'e-cut-icon tb-icons', tooltipText: 'Cut' },
    {prefixIcon :'e-copy-icon tb-icons', tooltipText: 'Copy' },
    {prefixIcon :'e-paste-icon tb-icons', tooltipText: 'Paste' },
    {prefixIcon :'e-bold-icon tb-icons', tooltipText: 'Bold' },
    {prefixIcon :'e-underline-icon tb-icons', tooltipText: 'Underline' },
    {prefixIcon :'e-italic-icon tb-icons', tooltipText: 'Italic' },
    {prefixIcon :'e-color-icon tb-icons', tooltipText: 'Color' },
    {prefixIcon :'e-alignleft-icon tb-icons', tooltipText: 'Align-Left' },
    {prefixIcon :'e-alignright-icon tb-icons', tooltipText: 'Align-Right' },
    {prefixIcon :'e-aligncenter-icon tb-icons', tooltipText: 'Align-Center' },
    {prefixIcon :'e-alignjustify-icon tb-icons', tooltipText: 'Align-Justify' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngAfterViewInit() {
    propertyPanlerefresh();
    add.element.onclick = () => {
      additem(this.tbarObj);
    }
    addMore.element.onclick = () => {
      addmoreitem(this.tbarObj);
    }
    disableItem.element.onclick = () => {
      disableitem(this.tbarObj);
    }

    remove.element.onclick = () => {
      removeitem(this.tbarObj);
    }

    empty.element.onclick = () => {
      emptyItem(this.tbarObj);
    }
    enableItem.element.onclick = () => {
      enableitem(this.tbarObj);
    }

    hideItem.element.onclick = () => {
      hideitem(this.tbarObj);
    }
    showItem.element.onclick = () => {
      showitem(this.tbarObj);
    }
    updateItem.element.onclick = () => {
      updateitem(this.tbarObj);
    }

    tbarRtl.onchange = () => {
      rtlModeChange(this.tbarObj, tbarRtl.checked);
    }

    overflowMode.onchange = () => {
      overflowmodeChange(this.tbarObj, overflowMode.checked);
    }
  }
}
