import { browser, element, By, by, ElementArrayFinder, Key, WebElement, protractor } from '@syncfusion/ej2-base/e2e/index';
import { ElementFinder } from 'protractor/built/element';
import { componentList, ComponentOrder, SampleList } from '../app.po';

const EC = browser.ExpectedConditions;
// browser.ignoreSynchronization = true;

function load_delay(waitTime: number, type: string, element?: WebElement) {
  switch (type) {
    case 'presence':
      browser.wait(EC.presenceOf(<ElementFinder>element), waitTime);
      break;
    case 'visible':
      browser.wait(EC.visibilityOf(<ElementFinder>element), waitTime);
      break;
    case 'sleep':
      browser.driver.sleep(waitTime);
      break;
  }
}

function consoleErrorCheck(): void {
  browser.manage().logs().get('browser').then(function (browserLog) {
    expect(browserLog.length).toEqual(0);
  });
}

function captureImage(fileNamePath: string) {
  browser.compareScreen(element(By.id('sample_out')), fileNamePath);
}

describe('EJ2 Component Angular testing', () => {
  browser.get('localhost:4200');

  beforeEach(() => {
  });

  [].slice.call(componentList).forEach((control: ComponentOrder, index: number) => {
    load_delay(3000, 'sleep');

    control.sampleList.forEach((sample: SampleList) => {

      it(control.component + ' ' + sample.sample + ' sample tested', () => {
        element(by.css('#' + control.component.toLowerCase() + 'FT')).click();
        load_delay(300, 'sleep');
        const sampleSelect = '#SampleSwitch #' + sample.sample;
        element(by.css(sampleSelect)).click();
        load_delay(2000, 'sleep');
        captureImage(control.component.toLowerCase() + '/' + control.component.toLowerCase() + '_' + sample.sample);
        const length = element.all(by.css('#componentSection .e-sample-section .e-' + control.component.toLowerCase())).count();
        expect(<any>length).toEqual(1);
      });

      sample.sampleSelector.forEach((props: string) => {
        it(control.component + ' ' + sample.sample + ' sample tested with ' + props, () => {
          load_delay(300, 'sleep');
          element(by.css(props)).click();
          load_delay(2000, 'sleep');
          captureImage(control.component.toLowerCase() + '/' + control.component.toLowerCase() + '_' + sample.sample + '_' + props.toLowerCase());
          consoleErrorCheck();
        });
      });
    });
  });
});
