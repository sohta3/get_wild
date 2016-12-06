import { GetWildPage } from './app.po';

describe('get-wild App', function() {
  let page: GetWildPage;

  beforeEach(() => {
    page = new GetWildPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
