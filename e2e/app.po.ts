export interface ComponentOrder {
  component: string;
  sampleList: SampleList[];
}

export interface SampleList {
  sample: string;
  sampleSelector: string[];
}

export const componentList: ComponentOrder[] = [
 {
    component: 'Tab',
    sampleList: [
      { sample: 'default', sampleSelector: ['#sample_out #e-item_0', '#sample_out #e-item_1', '#sample_out #e-item_2'] },
      { sample: 'ng-For', sampleSelector: ['#sample_out #e-item_0', '#sample_out #e-item_1', '#sample_out #e-item_2'] },
      { sample: 'ng-Container', sampleSelector: ['#sample_out #e-item_0', '#sample_out #e-item_1', '#sample_out #e-item_2']},
      { sample: 'ng-Template', sampleSelector: ['#sample_out #e-item_0', '#sample_out #e-item_1', '#sample_out #e-item_2'] },
      { sample: 'ng-RTE-Issue', sampleSelector: [] },
      { sample: 'ng-Route', sampleSelector: ['#sample_out #e-item_0', '#sample_out #e-item_1', '#sample_out #e-item_2'] }
    ],
  },
  {
    component: 'Toolbar',
    sampleList: [
      { sample: 'tbardefault', sampleSelector: [] },
      { sample: 'tbarngfor', sampleSelector: [] },
      { sample: 'tbarngtemplate', sampleSelector: [] },
      { sample: 'tbarngcontainer', sampleSelector: []}],
  },
  {
    component: 'Accordion',
    sampleList: [
      { sample: 'acrdDefault', sampleSelector: [] },
      { sample: 'acrdNgFor', sampleSelector: [] },
      { sample: 'acrdnngTemplate', sampleSelector: [] },
      { sample: 'acrdnNgContainer', sampleSelector: []}],
  },
  {
    component: 'Toast',
    sampleList: [
      { sample: 'default', sampleSelector: [] },
      { sample: 'conTemplate', sampleSelector: [] },
      { sample: 'template', sampleSelector: [] }],
  },
  {
    component: 'Inplace',
    sampleList: [
      { sample: 'default', sampleSelector: ['#sample_out .e-editable-value-wrapper'] },
      { sample: 'ngTemplate', sampleSelector: ['#sample_out .e-editable-value-wrapper'] }
    ],
  }
];
