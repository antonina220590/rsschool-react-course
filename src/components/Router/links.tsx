const Links = {
  root: '/',
  mainPage: '/page/:pageId',
  detailsPage: 'planet/:planetId',
  notFoundPage: '/error',
} as const;

export default Links;
