import { Component, ViewChild, OnInit, ElementRef, Inject } from '@angular/core';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { InPlaceEditorComponent } from '@syncfusion/ej2-angular-inplace-editor';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';


@Component({
    selector: 'app-container',
    templateUrl: './inplaceForm.html'
})
export class AppComponents {
    @ViewChild('text') inplaceObj: InPlaceEditorComponent;
    @ViewChild('date') dateObj: InPlaceEditorComponent;
    @ViewChild('submitbtn') btnObj: ButtonComponent
    public targetElement: HTMLElement;
    public placeholder: String = 'Select here';
    public textmodel: object;
    public datepickermodel: object;
    public textboxRule: object;
    public dateRule: object;
    skillForm: FormGroup;
    build: FormBuilder;
    constructor(@Inject(FormBuilder) private builder: FormBuilder) {
        this.build = builder;
        this.createForm();
    }
    createForm() {
        this.skillForm = this.build.group({
            textbox: new FormControl('', Validators.required),
            datepicker: new FormControl('', Validators.required)
        });
    }
    get textbox() {
        return this.skillForm.get('textbox');
    }
    get datepicker() {
        return this.skillForm.get('datepicker');
    }
    ngOnInit(): void {
       this.textmodel = {
           placeholder: 'Enter userName'
       }
       this.textboxRule = {
        text : {required: [true, 'Please enter userName']}
       }
       this.datepickermodel = {
           placeholder: 'select your DOB'
       }
       this.dateRule = {
           date: {required: [true, 'please select DOB']}
       }
    }

    onSubmit() {
        if(this.skillForm.invalid) {
            return;
        }
        alert("Form Submitted!");
    }
}