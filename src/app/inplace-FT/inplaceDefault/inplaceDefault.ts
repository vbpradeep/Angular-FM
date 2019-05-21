import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { InPlaceEditorComponent } from "@syncfusion/ej2-angular-inplace-editor";

@Component({
    selector: 'inplace-default',
    templateUrl: './inplaceDefault.html'
})
export class InplaceDefault {
    @ViewChild('element') inplaceObj : InPlaceEditorComponent;

    constructor(private route: ActivatedRoute, private router: Router) {
        
    }
    ngAfterViewInit() {

    }
}