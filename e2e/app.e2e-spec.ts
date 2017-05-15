import { AngularValidatorsPage } from './app.po';

describe('angular-validators App', () => {
  let page: AngularValidatorsPage;

  beforeEach(() => {
    page = new AngularValidatorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
