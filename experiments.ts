import { Experiment } from '../types';

export const experiments: Experiment[] = [
  {
    id: 'gt-sport',
    title: 'GT Sport, 2021',
    year: 2021,
    description: 'An in-browser recreation of a scene from the game Gran Turismo Sport. Great for learning Blender, namely lighting and camera movement, together with the React Three Fiber ecosystem.',
    icon: 'gt-sport-icon',
    link: 'https://gt-sport-demo.netlify.app'
  },
  {
    id: 'yarnghetti',
    title: 'Yarnghetti, 2019',
    year: 2019,
    description: 'A 3D physics recreation of Sil-o-haw Robb\'s endless rope nightmare. Helped me better understand how React Three Fiber combines with the Cannon physics engine.',
    icon: 'yarnghetti-icon',
    link: 'https://yarnghetti.netlify.app'
  },
  {
    id: 'emerald-hill',
    title: 'Emerald Hill Zone, 2014',
    year: 2014,
    description: 'A recreation of the level from the classic game Sonic the Hedgehog 2. The got me into CSS transforms and learning about browser performance & rendering.',
    icon: 'emerald-hill-icon',
    link: 'https://emerald-hill-zone.netlify.app'
  }
];