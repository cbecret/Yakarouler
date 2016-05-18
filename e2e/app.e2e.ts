import { YakaroulerPage } from './app.po';

describe('yakarouler App', function() {
  let page: YakaroulerPage;

  beforeEach(() => {
    page = new YakaroulerPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('yakarouler works!');
  });
});
