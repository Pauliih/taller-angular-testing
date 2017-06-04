import { NglabsPage } from './app.po';

describe('nglabs App', () => {
  let page: NglabsPage;

  beforeEach(() => {
    page = new NglabsPage();
  });

  it('Should get first user', () => {
    page.navigateTo();
    expect(page.getFirstUser()).toContain('mojombo');
  });
});
