export class YakaroulerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('yakarouler-app h1')).getText();
  }
}
