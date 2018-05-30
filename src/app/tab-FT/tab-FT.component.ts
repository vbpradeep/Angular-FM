import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { TabDefault } from './TabDefault/Tabdefault';
import { TabComponent, ToolbarComponent, TabItemModel } from '@syncfusion/ej2-ng-navigations';
import { AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-ng-buttons'
import { Router, ActivatedRoute } from '@angular/router';
import { refreshVirtualBlock } from '@syncfusion/ej2-grids';

export let add: ButtonComponent;
export let remove: ButtonComponent;
export let empty: ButtonComponent;
export let update: ButtonComponent;
export let inputEle: ElementRef;
export let headerPlacement: HTMLInputElement;
export let closeBtn: HTMLInputElement;
export let tabRTL: HTMLInputElement;
export let disableItem: ButtonComponent;
export let enableItem: ButtonComponent;
export let hideItem: ButtonComponent;
export let showItem: ButtonComponent;
export let selectItem: ButtonComponent;
export let disableTab: ButtonComponent;
export let enableTab: ButtonComponent;
export let refreshComponent: ButtonComponent;
export let overflowMode: HTMLInputElement;

@Component({
  selector: 'tab-ft',
  templateUrl: './tab-FT.html',
})

export class TabFTComponent {

  @ViewChild('element') tabObj: TabComponent;

  @ViewChild('tabindex') inputEle: ElementRef;
  @ViewChild('addtab') addTab: ButtonComponent;
  @ViewChild('removetab') removetab: ButtonComponent;
  @ViewChild('emptytab') emptytab: ButtonComponent;
  @ViewChild('updateItem') updateTabItem: ButtonComponent;
  @ViewChild('disabletab') disableTabItem: ButtonComponent;
  @ViewChild('enabletab') enabledTabItem: ButtonComponent;
  @ViewChild('hidetab') hideTabItem: ButtonComponent;
  @ViewChild('showtab') showTabItem: ButtonComponent;

  @ViewChild('disabletabfull') disableTab: ButtonComponent;
  @ViewChild('enabletabfull') enabledTab: ButtonComponent;

  @ViewChild('selecttab') selectTabItem: ButtonComponent;
  @ViewChild('desRender') refreshTab: ButtonComponent;

  @ViewChild('headerPlacement') hPlacement: ElementRef;
  @ViewChild('closeButton') closeBtn: ElementRef;
  @ViewChild('tabRTL') tabRTL: ElementRef;
  @ViewChild('overflowMode') overflow: ElementRef;

  @ViewChild('content') content: TemplateRef<any>;
  public headerText: Object = [{ 'text': 'home' }, { 'text': 'about' }];
  public tabItem: Object[];
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  public tabdefault(): void {
     this.router.navigateByUrl('/tab-FT/TabDefault');
  }

  public tabngfor(): void {
    this.router.navigateByUrl('/tab-FT/ngFor');
 }

 public tabngtemplate(): void {
  this.router.navigateByUrl('/tab-FT/ngTemplate');
}

public tabngroute(): void {
  this.router.navigateByUrl('/tab-FT/ngRoute');
}

  ngAfterViewInit() {
    add = this.addTab;
    remove = this.removetab;
    empty = this.emptytab;
    update = this.updateTabItem;
    inputEle = this.inputEle;
    headerPlacement = this.hPlacement.nativeElement as HTMLInputElement;
    closeBtn = this.closeBtn.nativeElement as HTMLInputElement;
    tabRTL = this.tabRTL.nativeElement as HTMLInputElement;
    overflowMode  = this.overflow.nativeElement as HTMLInputElement;
    disableItem= this.disableTabItem;
    enableItem = this.enabledTabItem;
    selectItem = this.selectTabItem;
    disableTab = this.disableTab;
    enableTab = this.enabledTab;
    hideItem = this.hideTabItem;
    showItem = this.showTabItem;
    refreshComponent = this.refreshTab;
    this.router.navigateByUrl('/tab-FT/TabDefault');
  }
}

let tabItem: TabItemModel[] = [ {
  header: { 'text': 'ASP.NET' },
  content: 'ASP.NET is an open-source server-side web application framework designed for web development to produce ' +
  'dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications ' +
  'and web services. It was first released in January 2002 with version 1.0 of the .NET Framework, and is the successor ' +
  'to Microsoft\'\s Active Server Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing ' +
  'programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension framework allows ' +
  'ASP.NET components to process SOAP messages.'
  }]

export function disableitem(tabObj: TabComponent): void {
  tabObj.items[parseInt(inputEle.nativeElement.value)].disabled = true;
  tabObj.dataBind;
}  

export function enableitem(tabObj: TabComponent): void {
  tabObj.items[parseInt(inputEle.nativeElement.value)].disabled = false;
  tabObj.dataBind;
}

export function selectitem(tabObj: TabComponent): void {
  tabObj.select(parseInt(inputEle.nativeElement.value));
}

export function refreshTab(tabObj: TabComponent): void {
  tabObj.refresh();
}

export function disabletab(tabObj:TabComponent): void {
  tabObj.disable(true);
}

export function enabletab(tabObj:TabComponent): void {
  tabObj.disable(false);
}

export function showTabItem(tabObj: TabComponent): void {
 tabObj.hideTab(parseInt(inputEle.nativeElement.value), false);
}

export function hideTabItem(tabObj: TabComponent): void {
  tabObj.hideTab(parseInt(inputEle.nativeElement.value), true);
}

export function addTab(tabObj: TabComponent): void {
  tabObj.addTab(tabItem, parseInt(inputEle.nativeElement.value));
}

export function removeTab(tabObj: TabComponent): void {
  tabObj.removeTab(parseInt(inputEle.nativeElement.value));
}

export function emptyTab (tabObj: TabComponent): void {
  tabObj.items = [];
  tabObj.dataBind();
}

export function headerPlace(tabObj: TabComponent,value: boolean): void {
  if(value) {
    tabObj.headerPlacement = "Top"
  } else {
    tabObj.headerPlacement = "Bottom"
  }
}

export function showCloseButton(tabObj: TabComponent,value: boolean): void {
  if(value) {
    tabObj.showCloseButton = true;
  } else {
    tabObj.showCloseButton = false;
  }
}

export function tabRtlEnable(tabObj: TabComponent,value: boolean): void {
  if(value) {
    tabObj.enableRtl = true;
  } else {
    tabObj.enableRtl = false;
  }
}

export function overflowChange(tabObj: TabComponent,value: boolean): void {
  if (value) {
    tabObj.overflowMode = "Popup";
  } else {
    tabObj.overflowMode = "Scrollable";
  }
  tabObj.dataBind();
}

export function updateTab (tabObj: TabComponent): void {
  tabObj.items[parseInt(inputEle.nativeElement.value)].content = "UpdatedContent";
  tabObj.items[parseInt(inputEle.nativeElement.value)].header.text = "UpdatedheaderText";
}

export function propertyPanlerefresh(): void {
  headerPlacement.checked = true;
  closeBtn.checked = false;
  tabRTL.checked = false;
  overflowMode.checked = false;

}

