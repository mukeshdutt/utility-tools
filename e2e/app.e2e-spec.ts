import { UtilityToolsPage } from './app.po';

describe('utility-tools App', () => {
  let page: UtilityToolsPage;

  beforeEach(() => {
    page = new UtilityToolsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
