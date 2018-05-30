import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';

import { TabComponent, ToolbarComponent, ItemModel } from '@syncfusion/ej2-ng-navigations';
import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-ng-buttons';
import { Router, ActivatedRoute } from '@angular/router';
import { rtlUpdated } from '@syncfusion/ej2-grids';

export let inputEle: HTMLInputElement;
export let add: ButtonComponent;
export let addMore: ButtonComponent;
export let remove: ButtonComponent;
export let empty: ButtonComponent;
export let disableItem: ButtonComponent;
export let enableItem: ButtonComponent;
export let hideItem: ButtonComponent;
export let showItem: ButtonComponent;
export let updateItem: ButtonComponent;
export let overflowMode: HTMLInputElement;
export let tbarRtl: HTMLInputElement;



@Component({
  selector: 'toolbar-ft',
  templateUrl: './toolbar-FT.html',
})
export class ToolbarFTComponent {

  @ViewChild('element') toolObj: ToolbarComponent;
  @ViewChild('toolindex') inputEle: ElementRef;

  @ViewChild('addItem') addItem: ButtonComponent;
  @ViewChild('addMoreItem') addMoreitem: ButtonComponent;
  @ViewChild('emptyTool') emptyTool: ButtonComponent;
  @ViewChild('removeItem') removeItem: ButtonComponent;
  @ViewChild('disableItem') disableItem: ButtonComponent;
  @ViewChild('enableItem') enableItem: ButtonComponent;
  @ViewChild('hideItem') hideItem: ButtonComponent;
  @ViewChild('showItem') showItem: ButtonComponent;
  @ViewChild('updateItem') updateItem: ButtonComponent;

  @ViewChild('overflowMode') overflowMode: ElementRef;
  @ViewChild('toolRtl') toolRtl: ElementRef;


  constructor(private route: ActivatedRoute, private router: Router) {

  }
  public toolbardefault(): void {
    this.router.navigateByUrl('/toolbar-FT/toolbarDefault');
  }
  public tbarngfor(): void {
    this.router.navigateByUrl('/toolbar-FT/toolbarNgFor');
  }
  public tbarngtemplate(): void {
    this.router.navigateByUrl('/toolbar-FT/toolbarNgTemplate');
  }

  ngAfterViewInit() {
    add = this.addItem;
    addMore = this.addMoreitem;
    remove = this.removeItem;
    empty = this.emptyTool;
    disableItem = this.disableItem;
    enableItem = this.enableItem;
    hideItem = this.hideItem;
    showItem = this.showItem;
    updateItem = this.updateItem;
    overflowMode = this.overflowMode.nativeElement as HTMLInputElement;
    tbarRtl = this.toolRtl.nativeElement as HTMLInputElement;
    inputEle = this.inputEle.nativeElement as HTMLInputElement
   // this.router.navigateByUrl('/toolbar-FT/toolbarDefault');
  }
}

let tbarItems: ItemModel[] = [{ type: 'Button', text: 'Go' }, { type: 'Button', text: 'View' }];


export function additem(toolbarObj: ToolbarComponent): void {
  toolbarObj.addItems([tbarItems[0]], parseInt(inputEle.value));
}

export function removeitem(toolbarObj: ToolbarComponent): void {
  toolbarObj.removeItems(parseInt(inputEle.value));
}

export function addmoreitem(toolbarObj: ToolbarComponent): void {
  toolbarObj.addItems(tbarItems, parseInt(inputEle.value));
}

export function hideitem(toolbarObj: ToolbarComponent): void {
  toolbarObj.hideItem(parseInt(inputEle.value), true);
}

export function showitem(toolbarObj: ToolbarComponent): void {
  toolbarObj.hideItem(parseInt(inputEle.value), false);
}

export function disableitem(toolbarObj: ToolbarComponent): void {
  toolbarObj.enableItems(<HTMLElement>toolbarObj.element.querySelectorAll('.e-toolbar-item')[parseInt(inputEle.value)], false);
}

export function enableitem(toolbarObj: ToolbarComponent): void {
  toolbarObj.enableItems(<HTMLElement>toolbarObj.element.querySelectorAll('.e-toolbar-item')[parseInt(inputEle.value)], true);
}

export function updateitem(toolbarObj: ToolbarComponent): void {
  toolbarObj.items[parseInt(inputEle.value)].text = "updated";
  toolbarObj.dataBind();
}

export function emptyItem(toolbarObj:ToolbarComponent): void {
  toolbarObj.items = [];
  toolbarObj.dataBind();
}

export function rtlModeChange(toolbarObj:ToolbarComponent, value: boolean): void {
  toolbarObj.enableRtl = value;
}

export function overflowmodeChange(toolbarObj:ToolbarComponent, value: boolean): void {
  toolbarObj.overflowMode = value ? 'Popup': 'Scrollable';
}

export function propertyPanlerefresh(): void {
  overflowMode.checked = false;
  tbarRtl.checked = false;
}

