import { Angular4ResolverPage } from './app.po';

describe('resolver-tutorial App', () => {
  let page: Angular4ResolverPage;

  beforeEach(() => {
    page = new Angular4ResolverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
