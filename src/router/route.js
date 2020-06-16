import layout from '@src/layout';
import home from '@src/views/home';
import notFound from '@src/views/notFound';

const inFrame = [
  {
    path: '/',
    component: layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: home
      }
    ]
  }
];

const outFrame = [
  {
    path: '*',
    component: notFound
  }
];

export default [ ...inFrame, ...outFrame ];