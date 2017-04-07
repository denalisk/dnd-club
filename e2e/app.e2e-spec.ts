import { ClubSitePage } from './app.po';

describe('club-site App', () => {
  let page: ClubSitePage;

  beforeEach(() => {
    page = new ClubSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
