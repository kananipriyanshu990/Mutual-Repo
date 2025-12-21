import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'smiling-mind',
    title: 'Smiling Mind',
    backgroundColor: '#f5f5f5',
    logo: 'smiling-mind-logo',
    expandedContent: {
      description: 'I have been lead front end developer at Smiling Mind since 2020. We provide mental wellbeing support to Australian families and classrooms. I maintain the React Native app and the distribution across the Apple App Store, Google Play Store and web platform. I care about providing an equivalent experience to our users regardless of their device, their experience with technology, or their physical abilities. I am a UX accessibility advocate and strive to put users first.',
      technologies: ['NEXT.js', 'Expo', 'DATO CMS'],
      images: [
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop'
      ],
      links: [
        { text: 'Apple App Store', url: 'https://apps.apple.com/app/smiling-mind/id560442518' },
        { text: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.smilingmind.app' }
      ]
    }
  },
  {
    id: 'mass-studio',
    title: 'MASS Studio',
    backgroundColor: '#2a2a2a',
    logo: 'mass-logo',
    expandedContent: {
      description: 'A full website rebuild, both front-end and back. The backend consists of Prismic as the headless CMS with Netlify as the CI and hosting tool, and the front end is at Gatsby. Sprinkled throughout are some unique visual flourishes - like the SVG blooping text effect, and imagery that moves based on mouse and scroll position.',
      technologies: ['Gatsby', 'React', 'Prismic'],
      images: [
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop'
      ],
      links: [
        { text: 'Visit Site', url: 'https://mass.studio' },
        { text: 'FWA of the Day', url: 'https://thefwa.com/cases/mass-studio' }
      ]
    }
  },
  {
    id: 'soccer-tool',
    title: 'Soccer Strategy Tool',
    backgroundColor: '#7dd3c0',
    logo: 'soccer-logo',
    expandedContent: {
      description: 'A web-based 2D drawing tool created for soccer coaches and strategists to plan and visualise manoeuvres for their team. It gives the user complete control to draw curved lines signalling direction of play, and to drag/drop assets (such as cones, balls, players) anywhere on the field. Built for the KNVB (Royal Dutch Football Association) whilst working at Monkee in 2018.',
      technologies: ['JavaScript', 'Canvas API', 'SVG'],
      images: [
        'https://images.unsplash.com/photo-1502164980785-9556d7f7b2a2?w=1200&q=80&auto=format&fit=crop'
      ],
      links: []
    }
  },
  {
    id: 'fenton',
    title: 'Fenton Band Website',
    backgroundColor: '#f4e04d',
    logo: 'fenton-logo',
    expandedContent: {
      description: 'Built as a playful online presence for the band which I\'m a part of. I\'ve used the popular three.js library and combined it with cannon.js which provides the physics. The models were found online and loaded up using Blender - simplifying model complexity greatly for performance. It works great on mobile and desktop, and on larger screens you can play around with a few of the camera and physics settings for fun.',
      technologies: ['Three.js', 'Cannon.js', 'Blender'],
      images: [
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80&auto=format&fit=crop'
      ],
      links: [
        { text: 'Band Site', url: '#' }
      ]
    }
  },
];