import { Routes } from '@angular/router';
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
import { TbarNGFor } from './toolbar-FT/toolbarNgFor/toolbarNgFor';
import { TbarDefault } from './toolbar-FT/toolbarDefault/toolbarDefault';
import { TbarNGTemplate } from './toolbar-FT/toolbarNgTemplate/toolbarNgTemplate';
import { ToolbarNgContainer } from './toolbar-FT/toolbarNgContainer/toolbarNgContainer';

import { ToastFTComponent } from './toast-FT/toast-FT.component'
import { ToastDefault } from './toast-FT/toastDefault/toastDefault';
import { ToastContainer } from './toast-FT/toastContainer/toastContainer';
import { ToastContTemp } from './toast-FT/toastcontTemp/toastcontTemp';
import { ToastTemp  } from './toast-FT/toastTemp/toastTemp';

import { InplaceFTComponent } from './inplace-FT/inplace-FT.component';
import { InplaceDefault } from './inplace-FT/inplaceDefault/inplaceDefault';
import { AppComponents } from './inplace-FT/inplaceForm/inplaceForm';
import { NgTemplate } from './inplace-FT/ngTemplate/ngTemplate';

export const rootRouterConfig: Routes = [
  { path: 'tab-FT', component: TabFTComponent,
   children: [
    { path: 'TabDefault', component: TabDefault},
    { path: 'ngFor', component: TabNGFor},
    { path: 'ngRoute', component: TabNGRoute, children: [
      { path: 'ngRouteCalendar', component: TabNGRouteCalendar },
      { path: 'ngRouteComboBox', component: TabNGRouteCombo },
      { path: 'ngRouteGrid', component: TabNGRouteGrid },
    ]},
    { path: 'ngTemplate', component: TabNGTemplate},
    { path: 'ngContainer', component: TabNGContainer},
    { path: 'RichTextEditorIssue', component: TabNGRte},
   ]
  },

  {
    path: 'accordion-FT', component: AccordionFTComponent,
    children: [
     { path: 'acrdnDefault', component: AcrdnDefault},
     { path: 'acrdnNgFor', component: AcrdnNgFor},
     { path: 'acrdnNgTemplate', component: AcrdnNgTemplate},
     { path: 'acrdnNgContainer', component: AcrdnNgContainer} ]
  },
  {
    path: 'toolbar-FT', component: ToolbarFTComponent,
    children: [
     { path: 'toolbarDefault', component: TbarDefault},
     { path: 'toolbarNgFor', component: TbarNGFor},
     { path: 'toolbarNgTemplate', component: TbarNGTemplate},
     { path: 'toolbarNgContainer', component: ToolbarNgContainer} ] 
  },
  {
    path: 'toast-FT', component: ToastFTComponent,
    children: [
     { path: 'toastDefault', component: ToastDefault},
     { path: 'toastContainer', component: ToastContainer},
     { path: 'toastcontTemp', component: ToastContTemp},
     { path: 'toastTemp', component: ToastTemp} ] 
  },
{
    path: 'inplace-FT', component: InplaceFTComponent,
    children: [
      { path: 'inplaceDefault', component: InplaceDefault},
      { path: 'ngTemplate', component: NgTemplate},
      { path: 'inplaceForm', component: AppComponents}
    ]
  }
];
