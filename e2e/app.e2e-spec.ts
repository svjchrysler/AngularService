import { OmdbPage } from './app.po';

describe('omdb App', () => {
  let page: OmdbPage;

  beforeEach(() => {
    page = new OmdbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
