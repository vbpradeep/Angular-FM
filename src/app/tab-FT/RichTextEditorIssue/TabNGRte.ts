import { Component, ViewEncapsulation, ElementRef, Inject, ViewChild, TemplateRef } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { SwitchComponent } from '@syncfusion/ej2-angular-buttons';
import { rippleMouseHandler } from '@syncfusion/ej2-buttons';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { dataMockSource } from './datasource';
import { GridComponent, EditService } from '@syncfusion/ej2-angular-grids';
import { Router, ActivatedRoute } from '@angular/router';
import { add,empty,remove,update,inputEle, addTab, removeTab, emptyTab, updateTab, closeBtn,headerPlace,tabRTL,showCloseButton,headerPlacement,tabRtlEnable, disableitem,disableItem, enableitem,enableItem  } from '../tab-FT.component';
import { disabletab,disableTab,enabletab,enableTab,showTabItem,hideTabItem,showItem,hideItem, selectitem,selectItem,refreshTab,refreshComponent, propertyPanlerefresh  } from '../tab-FT.component';

import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';
import { DropDownList, MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
@Component({
  selector: 'tab-angular-rte',
  templateUrl: './TabNGRte.html',
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class TabNGRte {
  public dropdownData = [{   //dataSource for the multiselect dropdown 
    "roles": ["Base", "Small", "Thumbnail", "Swatch"]
  }];

  public valueAccess = (field: string, data: Object, column: Object) => {
    return data['roles'];   //to bind the data to the categories column 
  }

  public data: DataManager;

  public dataMock: Object[];
  public editSettings: Object;
  public toolbar: string[];
  public elem: HTMLElement;
  public dropdownObj: DropDownList;
  public msObject: MultiSelect;

  public valueHtml: string = ``;
  public tools: object = {
    items: ['Undo', 'Redo', '|',
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'SubScript', 'SuperScript', '|',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  };

  valForm: FormGroup;

  constructor(fb: FormBuilder, private route: ActivatedRoute, private router: Router) {

    // Model Driven validation
    this.valForm = fb.group({

      'productName': [null, Validators.required],
      'productSku': [null, Validators.required],
      'productStockStatus': [null, Validators.required],
      'productVisibility': [null, Validators.required],
      'productWeight': [null, Validators.required],
      'productHeight': [null, Validators.required],

    });

  }

  ngOnInit(): void {
    this.dataMock = dataMockSource;

    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

  }


  @ViewChild('adaptiveTab')
  public tabObj: TabComponent;

  // Mapping Tab items Header property   
  public headerText: Object = [{ text: 'Content' }, { text: 'Images & Videos' }, { text: 'Variations' }, { text: 'Related Products' }];
  
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
