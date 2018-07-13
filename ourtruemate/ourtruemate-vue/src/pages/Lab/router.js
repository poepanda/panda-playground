import Lab from './';
import Lottie from './Lottie';
import Animated from './Animated';
import TextTyping from './TextTyping';
import MoJs from './MoJs';

export default [
  {
    path: '/lab',
    name: 'Lab',
    component: Lab,
  },
  {
    path: '/lab/lottie',
    name: 'Lottie',
    component: Lottie,
  },
  {
    path: '/lab/animated',
    name: 'Animated',
    component: Animated
    ,
  },
  {
    path: '/lab/text-typing',
    name: 'TextTyping',
    component: TextTyping
    ,
  },
  {
    path: '/lab/mojs',
    name: 'Mojs',
    component: MoJs,
  },

];
