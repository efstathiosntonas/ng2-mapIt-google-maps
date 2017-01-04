import { TsPage } from './app.po';

describe('ts App', function() {
  let page: TsPage;

  beforeEach(() => {
    page = new TsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
