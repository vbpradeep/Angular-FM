import { Component, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { InPlaceEditorComponent, AutoCompleteService, ActionBeginEventArgs } from "@syncfusion/ej2-angular-inplace-editor";
import { DatePickerComponent } from "@syncfusion/ej2-angular-calendars";
import { select } from "@syncfusion/ej2-base";

@Component({
    selector: 'inplace-template',
    templateUrl: './ngTemplate.html'
})
export class NgTemplate {
    @ViewChild('mask') inplaceObj : InPlaceEditorComponent;
    @ViewChild('date') dateObj: DatePickerComponent;

    constructor(private route: ActivatedRoute, private router: Router) {
    }
}