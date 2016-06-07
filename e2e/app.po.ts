export class BlogAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('blog-app-app h1')).getText();
  }
}
