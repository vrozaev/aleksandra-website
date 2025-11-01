import { StaticImageData } from 'next/image'
import image1 from '../../public/pages/projects/001-den-hague/1.jpg'
import image2 from '../../public/pages/projects/002-lelistaad/mastello.jpg'
import image3 from '../../public/pages/projects/003-den-hague/kitchen.jpg'
import image4 from '../../public/pages/projects/004-rotterdam/room.jpg'

export type ProjectType = {
  images: StaticImageData[];
  name: string;
  details: string;
  description: string[];
  slug: string;
}

export const PROJECTS_LIST: ProjectType[] = [
  {
    name: 'Den Hauge Batroom',
    details: 'TODO: project details',
    description: ['TODO: project description'],
    images: [image1],
    slug: '001-den-hague',
  },
  {
    name: 'Lelistaad',
    details: 'TODO: project details',
    description: ['TODO: project description'],
    images: [image2],
    slug: '002-lelistaad',
  },
  {
    name: 'Den Hauge Apartment',
    details: 'TODO: project details',
    description: ['TODO: project description'],
    images: [image3],
    slug: '003-den-hague',
  },
  {
    name: 'Rotterdam',
    details: 'TODO: project details',
    description: ['TODO: project description'],
    images: [image4],
    slug: '004-rotterdam',
  },
];