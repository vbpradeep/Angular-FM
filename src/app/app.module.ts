import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { GridModule } from '@syncfusion/ej2-ng-grids';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DropDownListComponent, ComboBoxComponent } from '@syncfusion/ej2-ng-dropdowns';
import { ToolbarComponent,TabComponent, TabItemsDirective, TabItemDirective, ItemDirective, ItemsDirective, AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-ng-navigations';
import { ButtonComponent, ButtonModule } from '@syncfusion/ej2-ng-buttons';
import { CalendarComponent } from '@syncfusion/ej2-ng-calendars';
import { NumericTextBoxComponent, MaskedTextBoxComponent } from '@syncfusion/ej2-ng-inputs'


import { TabFTComponent } from './tab-FT/tab-FT.component';
import { TabDefault } from './tab-FT/TabDefault/Tabdefault'
import { TabNGFor } from './tab-FT/ngFor/ngfor';
import { TabNGRoute } from './tab-FT/ngRoute/ngRoute';
import { TabNGRouteCalendar  } from './tab-FT/ngRoute/ngRouteCalendar/ngRouteCalendar';
import { TabNGRouteCombo  } from './tab-FT/ngRoute/ngRouteComboBox/ngRouteComboBox';
import { TabNGRouteGrid  } from './tab-FT/ngRoute/ngRouteGrid/ngRouteGrid';
import { TabNGTemplate } from './tab-FT/ngTemplate/TabNGTemplate';

import { AccordionFTComponent } from './accordion-FT/accordion-FT.component';
import { AcrdnDefault } from './accordion-FT/acrdnDefault/acrdnDefault';
import { AcrdnNgFor } from './accordion-FT/acrdnNgFor/acrdnNgFor';
import { AcrdnNgTemplate } from './accordion-FT/acrdnNgTemplate/acrdnNgTemplate';

import { ToolbarFTComponent } from './toolbar-FT/toolbar-FT.component';
import { TbarDefault } from './toolbar-FT/toolbarDefault/toolbarDefault';
import { TbarNGFor } from './toolbar-FT/toolbarNgFor/toolbarNgFor';
import { TbarNGTemplate } from './toolbar-FT/toolbarNgTemplate/toolbarNgTemplate';


import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes } from '@angular/router';
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent,TabFTComponent,TabDefault,TabNGFor,TabNGRoute,TabNGRouteCalendar,TabNGRouteCombo,TabNGRouteGrid,TabNGTemplate,CalendarComponent,
    AccordionFTComponent,AcrdnDefault,AcrdnNgFor,AcrdnNgTemplate,
    ToolbarFTComponent,TbarDefault,TbarNGFor,
    ToolbarComponent,ItemDirective,ItemsDirective,DropDownListComponent,ComboBoxComponent,
    AccordionItemDirective,AccordionItemsDirective, AccordionComponent,
    TabComponent, TabItemsDirective, TabItemDirective, ButtonComponent,NumericTextBoxComponent,TbarNGTemplate, MaskedTextBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GridModule,
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
