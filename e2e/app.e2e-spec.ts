import { AngularPostCrudPage } from './app.po';

describe('angular-post-crud App', () => {
  let page: AngularPostCrudPage;

  beforeEach(() => {
    page = new AngularPostCrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
