import { browser, by, element } from 'protractor';

export class NglabsPage {
  navigateTo() {
    return browser.get('/');
  }

  getFirstUser() {
    return element(by.id('user-0')).getText();
  }
}
