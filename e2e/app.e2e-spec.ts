import { browser, element, By, by, ElementArrayFinder, Key, WebElement, protractor } from '@syncfusion/ej2-base/e2e/index';
import { ElementFinder } from 'protractor/built/element';
import { componentList, ComponentOrder } from './app.po';

const EC = browser.ExpectedConditions;
browser.ignoreSynchronization = true;
browser.waitForAngular();


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

describe('EJ2 Component Angular testing', () => {
  browser.get('http://localhost:4200');

  beforeEach(() => {
    //
  });

  afterEach(() => {
    consoleErrorCheck();
  });

  [].slice.call(componentList).forEach((control: ComponentOrder) => {
    load_delay(3000, 'sleep');

    control.sampleList.forEach((sample: string) => {

      element(by.css('#' + control.component.toLowerCase() + 'FT')).click();
      it(control.component + ' ' + sample + ' sample tested', () => {
        load_delay(300, 'sleep');
        const sampleSelect = '#SampleSwitch #' + sample;
        load_delay(2000, 'presence', element(By.css(sampleSelect)));
        consoleErrorCheck();
        element(by.css(sampleSelect)).click();
        load_delay(2000, 'sleep');
        const length = element.all(by.css('#componentSection .e-sample-section .e-' + control.component.toLowerCase())).count();
        expect(length).toEqual(1);
      });

      control.panelProbs.forEach((props: string) => {
        it(control.component + ' ' + sample + ' sample tested with ' + props, () => {
          load_delay(300, 'sleep');
          const selector = '#componentSection .e-property-section #' + props;
          element(by.css(selector)).click();
          load_delay(2000, 'sleep');
          consoleErrorCheck();
          if (control.checkBoxProbs.indexOf(props) !== -1) {
            element(by.css(selector)).click();
            load_delay(2000, 'sleep');
          }
        });
      });
    });
  });
});
