import Links from './links';

describe('Links constant', () => {
  test('should have the correct route links', () => {
    expect(Links.root).toEqual('/');
    expect(Links.detailsPage).toEqual('/planet/:planetId');
    expect(Links.notFoundPage).toEqual('/error');
  });
});
