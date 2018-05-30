import { Routes } from '@angular/router';

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
import { TbarNGFor } from './toolbar-FT/toolbarNgFor/toolbarNgFor';
import { TbarDefault } from './toolbar-FT/toolbarDefault/toolbarDefault';
import { TbarNGTemplate } from './toolbar-FT/toolbarNgTemplate/toolbarNgTemplate';


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
   ]
  },

  {
    path: 'accordion-FT', component: AccordionFTComponent,
    children: [
     { path: 'acrdnDefault', component: AcrdnDefault},
     { path: 'acrdnNgFor', component: AcrdnNgFor},
     { path: 'acrdnNgTemplate', component: AcrdnNgTemplate} ]
  },
  {
    path: 'toolbar-FT', component: ToolbarFTComponent,
    children: [
     { path: 'toolbarDefault', component: TbarDefault},
     { path: 'toolbarNgFor', component: TbarNGFor},
     { path: 'toolbarNgTemplate', component: TbarNGTemplate} ] 
  }



];
