import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';

import { TabComponent, ToolbarComponent, AccordionComponent } from '@syncfusion/ej2-angular-navigations';
import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons'
import { Router, ActivatedRoute } from '@angular/router';

let inputEle: ElementRef;
export let addItem: ButtonComponent;
export let removeItem: ButtonComponent;
export let emptyAcrdn: ButtonComponent;
export let updatetItem: ButtonComponent;
export let expandItem: ButtonComponent;
export let collapseItem: ButtonComponent;
export let expandAll: ButtonComponent;
export let collapseAll: ButtonComponent;
export let disableItem: ButtonComponent;
export let enableItem: ButtonComponent;
export let hideItem: ButtonComponent;
export let showItem: ButtonComponent;
export let refreshAcrdn: ButtonComponent;

@Component({
  selector: 'accordion-ft',
  templateUrl: './accordion-FT.html',
})
export class AccordionFTComponent {

  @ViewChild('acrdnIndex') inputEle: ElementRef;
  @ViewChild('addItem') addItem: ButtonComponent;
  @ViewChild('removeItem') removeItem: ButtonComponent;
  @ViewChild('emptyAcrdn') emptyAcrdn: ButtonComponent;
  @ViewChild('updateitem') updatetItem: ButtonComponent;
  @ViewChild('expandItem') expandItem: ButtonComponent;
  @ViewChild('collapseItem') collapseItem: ButtonComponent;
  @ViewChild('expandAll') expandAll: ButtonComponent;
  @ViewChild('collapseAll') collapseAll: ButtonComponent;
  @ViewChild('disableItem') disableItem: ButtonComponent;
  @ViewChild('enableItem') enableItem: ButtonComponent;
  @ViewChild('hideItem') hideItem: ButtonComponent;
  @ViewChild('showItem') showItem: ButtonComponent;
  @ViewChild('refreshAcrdn') refreshAcrdn: ButtonComponent;



  constructor(private route: ActivatedRoute, private router: Router) {

  }


  public accordiondefault(): void {
    this.router.navigateByUrl('/accordion-FT/acrdnDefault');
  }
  public accordionngfor(): void {
    this.router.navigateByUrl('/accordion-FT/acrdnNgFor');
  }
  public accordionngtemplate(): void {
    this.router.navigateByUrl('/accordion-FT/acrdnNgTemplate');
  }
  public accordionngcontainer(): void {
    this.router.navigateByUrl('/accordion-FT/acrdnNgContainer');
  }

  ngAfterViewInit() {
    inputEle = this.inputEle;
    addItem = this.addItem;
    removeItem = this.removeItem;
    emptyAcrdn = this.emptyAcrdn;
    updatetItem = this.updatetItem;
    expandItem = this.expandItem;
    collapseItem = this.collapseItem;
    expandAll = this.expandAll;
    collapseAll = this.collapseAll;
    disableItem = this.disableItem;
    enableItem = this.enableItem;
    hideItem = this.hideItem;
    showItem = this.showItem;
    refreshAcrdn = this.refreshAcrdn;
    this.router.navigateByUrl('/accordion-FT/acrdnDefault');
  }
}

let acrdItem = { header: 'Dynamic Header', content: 'Dynamic Content' };

export function addItemFn(acrdnObj: AccordionComponent) {
  acrdnObj.addItem(acrdItem, parseInt(inputEle.nativeElement.value))
}

export function removeItemFn(acrdnObj: AccordionComponent) {
  acrdnObj.removeItem(parseInt(inputEle.nativeElement.value))
}

export function emptyAcrdnFn(acrdnObj: AccordionComponent) {
  acrdnObj.items = [];
  acrdnObj.dataBind();
}

export function updateItemFn(acrdnObj: AccordionComponent) {
  acrdnObj.items[parseInt(inputEle.nativeElement.value)] = acrdItem;
  acrdnObj.dataBind();
}

export function expandItemFn(acrdnObj: AccordionComponent) {
  acrdnObj.expandItem(true, parseInt(inputEle.nativeElement.value));
}

export function collapseItemFn(acrdnObj: AccordionComponent) {
  acrdnObj.expandItem(false, parseInt(inputEle.nativeElement.value));
}

export function expandAllFn(acrdnObj: AccordionComponent) {
  acrdnObj.expandItem(true);
}

export function collapseAllFn(acrdnObj: AccordionComponent) {
  acrdnObj.expandItem(false);
}

export function disableItemFn(acrdnObj: AccordionComponent) {
  acrdnObj.enableItem(parseInt(inputEle.nativeElement.value), false);
}

export function enableItemFn(acrdnObj: AccordionComponent) {
  acrdnObj.enableItem(parseInt(inputEle.nativeElement.value), true);
}

export function hideItemFn(acrdnObj: AccordionComponent) {
  acrdnObj.hideItem(parseInt(inputEle.nativeElement.value), true);
}

export function showItemFn(acrdnObj: AccordionComponent) {
  acrdnObj.hideItem(parseInt(inputEle.nativeElement.value), false);
}

export function refreshFn(acrdnObj: AccordionComponent) {
  acrdnObj.refresh();
}

