const Links = {
  root: '/',
  mainPage: '/main/:pageId',
  detailsPage: '/main/:pageId/planet/:planetId',
  notFoundPage: '/',
} as const;

export default Links;
