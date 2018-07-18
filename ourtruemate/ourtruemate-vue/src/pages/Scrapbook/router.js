import Scrapbook from './';
import ScrapbookScreen from './Screen';

export default [
  {
    path: '/scrapbook',
    name: 'Scrapbook',
    component: Scrapbook,
    children: [
      {
        path: ':to/page/:page',
        name: 'Scrapbook Screen',
        component: ScrapbookScreen,
      },
      {
        path: ':to',
        name: 'Scrapbook Screen',
        component: ScrapbookScreen,
      },
    ],
  },
];
