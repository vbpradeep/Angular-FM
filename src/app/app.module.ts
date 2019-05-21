import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DropDownListComponent, ComboBoxComponent } from '@syncfusion/ej2-angular-dropdowns';
import { ToolbarComponent,TabComponent, TabItemsDirective, TabItemDirective, ItemDirective, ItemsDirective, AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { CalendarComponent, DatePickerComponent, DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxComponent, MaskedTextBoxComponent } from '@syncfusion/ej2-angular-inputs'
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { InPlaceEditorComponent } from '@syncfusion/ej2-angular-inplace-editor';


import { TabFTComponent } from './tab-FT/tab-FT.component';
import { TabDefault } from './tab-FT/TabDefault/Tabdefault'
import { TabNGFor } from './tab-FT/ngFor/ngfor';
import { TabNGContainer } from './tab-FT/ngContainer/ngContainer';
import { TabNGRoute } from './tab-FT/ngRoute/ngRoute';
import { TabNGRouteCalendar  } from './tab-FT/ngRoute/ngRouteCalendar/ngRouteCalendar';
import { TabNGRouteCombo  } from './tab-FT/ngRoute/ngRouteComboBox/ngRouteComboBox';
import { TabNGRouteGrid  } from './tab-FT/ngRoute/ngRouteGrid/ngRouteGrid';
import { TabNGTemplate } from './tab-FT/ngTemplate/TabNGTemplate';
import { TabNGRte } from './tab-FT/RichTextEditorIssue/TabNGRte';

import { AccordionFTComponent } from './accordion-FT/accordion-FT.component';
import { AcrdnDefault } from './accordion-FT/acrdnDefault/acrdnDefault';
import { AcrdnNgFor } from './accordion-FT/acrdnNgFor/acrdnNgFor';
import { AcrdnNgTemplate } from './accordion-FT/acrdnNgTemplate/acrdnNgTemplate';
import { AcrdnNgContainer } from './accordion-FT/acrdnNgContainer/acrdnNgContainer';

import { ToolbarFTComponent } from './toolbar-FT/toolbar-FT.component';
import { TbarDefault } from './toolbar-FT/toolbarDefault/toolbarDefault';
import { TbarNGFor } from './toolbar-FT/toolbarNgFor/toolbarNgFor';
import { TbarNGTemplate } from './toolbar-FT/toolbarNgTemplate/toolbarNgTemplate';
import { ToolbarNgContainer } from './toolbar-FT/toolbarNgContainer/toolbarNgContainer';

import { ToastFTComponent } from './toast-FT/toast-FT.component';
import { ToastDefault } from './toast-FT/toastDefault/toastDefault';
import { ToastContainer } from './toast-FT/toastContainer/toastContainer';
import { ToastContTemp } from './toast-FT/toastcontTemp/toastcontTemp';
import { ToastTemp  } from './toast-FT/toastTemp/toastTemp';

import { InplaceFTComponent } from './inplace-FT/inplace-FT.component';
import { InplaceDefault } from './inplace-FT/inplaceDefault/inplaceDefault';
import { AppComponents } from './inplace-FT/inplaceForm/inplaceForm';
import { NgTemplate } from './inplace-FT/ngTemplate/ngTemplate';
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,AppComponents,TabFTComponent,TabDefault,TabNGFor,TabNGRoute,TabNGRouteCalendar,TabNGRouteCombo,TabNGRouteGrid,TabNGTemplate,TabNGRte,CalendarComponent,
    AccordionFTComponent,AcrdnDefault,AcrdnNgFor,AcrdnNgTemplate,
    ToolbarFTComponent,TbarDefault,TbarNGFor,TabNGContainer,ToolbarNgContainer,
    ToolbarComponent,ItemDirective,ItemsDirective,DropDownListComponent,ComboBoxComponent,
    AccordionItemDirective,AccordionItemsDirective, AccordionComponent,
    TabComponent, TabItemsDirective, TabItemDirective, ButtonComponent,NumericTextBoxComponent,TbarNGTemplate, MaskedTextBoxComponent,
    ToastContainer,ToastContTemp,ToastDefault,ToastFTComponent,ToastTemp,ToastComponent,
    InplaceDefault,InplaceFTComponent,InPlaceEditorComponent,NgTemplate,DatePickerComponent,AcrdnNgContainer
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule,
    GridModule,
    RichTextEditorAllModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
