import { LivroAngularPage } from './app.po';

describe('livro-angular App', () => {
  let page: LivroAngularPage;

  beforeEach(() => {
    page = new LivroAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
