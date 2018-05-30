export interface ComponentOrder {
  component: string;
  sampleList: string[];
  panelProbs: string[];
  checkBoxProbs: string[];
}

export const componentList: ComponentOrder[] = [
   {
     component: 'Tab',
     sampleList: ['default'], // ['default', 'ng-For', 'ng-Template', 'ng-Route'],
      // panelProbs: ['addTabItem', 'removeTabItem', 'updateTabItem', 'disableTabItem', 'enableTabItem',
      //              'hideTabItem', 'showTabItem', 'disableTab', 'enableTab', 'selectTab', 'refreshTab',
      //              'orientation', 'closeButton', 'rtlMode', 'overflowMode'],
     panelProbs: ['addTabItem'],
     checkBoxProbs: ['orientation', 'closeButton', 'rtlMode', 'overflowMode'] },
   {
     component: 'Toolbar',
     sampleList: ['tbardefault'], // ['tbardefault', 'tbarngfor', 'tbarngtemplate'],
      // panelProbs: ['addTbarItem', 'addTbarMoreItem', 'removeTbarItem', 'disableTbarItem', 'enableTbarItem',
      //              'hideTbarItem', 'showTbarItem', 'updateTbarItem', 'overflowModeCheck', 'toolRTL'],
      panelProbs: ['addTbarItem'],
     checkBoxProbs: ['overflowModeCheck', 'toolRTL'] },
  // {
  //    component: 'Accordion',
  //    sampleList: ['acrdDefault', 'acrdNgFor', 'acrdnngTemplate'],
  //    panelProbs: ['addItem', 'removeItem', 'emptyAcrdn', 'updateItem', 'expandItem', 'collapseItem',
  //                 'expandAll', 'collapseAll', 'disableItem', 'enableItem', 'hideItem', 'showItem', 'refreshAcrdn'],
  //    checkBoxProbs: []
  //  }
   ];
