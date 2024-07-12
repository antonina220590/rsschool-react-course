const Links = {
  root: '/',
  mainPage: '/page/:pageId',
  detailsPage: '/page/:pageId/planet/:planetId',
  notFoundPage: '/',
} as const;

export default Links;
