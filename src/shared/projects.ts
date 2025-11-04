import image1 from '../../public/pages/projects/001-den-hague/images.json'
import image2 from '../../public/pages/projects/002-lelistaad/images.json'
import image3 from '../../public/pages/projects/003-den-hague/images.json'
import image4 from '../../public/pages/projects/004-rotterdam/images.json'

export type ProjectType = {
  images: string[];
  name: string;
  details: string;
  description: string[];
  slug: string;
}

export const PROJECTS_LIST: ProjectType[] = [
  {
    name: 'Den Hauge Batroom',
    details: 'TODO: project details',
    description: [
      'TODO: project description paragraph 1',
      'TODO: project description paragraph 2',
      'TODO: project description paragraph 3',
    ],
    images: image1,
    slug: '001-den-hague',
  },
  {
    name: 'Lelistaad',
    details: 'TODO: project details',
    description: [
      'TODO: project description paragraph 1',
      'TODO: project description paragraph 2',
      'TODO: project description paragraph 3',
    ],
    images: image2,
    slug: '002-lelistaad',
  },
  {
    name: 'Den Hauge Apartment',
    details: 'TODO: project details',
    description: [
      'TODO: project description paragraph 1',
      'TODO: project description paragraph 2',
      'TODO: project description paragraph 3',
    ],
    images: image3,
    slug: '003-den-hague',
  },
  {
    name: 'Rotterdam',
    details: 'TODO: project details',
    description: [
      'TODO: project description paragraph 1',
      'TODO: project description paragraph 2',
      'TODO: project description paragraph 3',
    ],
    images: image4,
    slug: '004-rotterdam',
  },
];