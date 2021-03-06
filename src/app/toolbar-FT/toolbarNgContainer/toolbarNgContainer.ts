import { Component, ViewChild } from "@angular/core";
import { ToolbarComponent } from "@syncfusion/ej2-angular-navigations";
import { ActivatedRoute, Router } from "@angular/router";
import { add, addMore, remove, disableItem, empty, enableItem, hideItem, overflowMode, tbarRtl, showItem, updateItem } from '../toolbar-FT.component';
import { propertyPanlerefresh, additem, addmoreitem, removeitem, disableitem, emptyItem, enableitem, hideitem, showitem, updateitem, rtlModeChange, overflowmodeChange } from '../toolbar-FT.component';

@Component({
    selector: 'toolbar-ngcontainer',
    templateUrl: './toolbarNgContainer.html'
})
export class ToolbarNgContainer {
    @ViewChild('element') tbarObj: ToolbarComponent;

    constructor(private route: ActivatedRoute, private router: Router) {}

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