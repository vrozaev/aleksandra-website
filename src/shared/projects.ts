import image1 from '../../public/pages/projects/001-den-hague/images.json'
import image2 from '../../public/pages/projects/002-lelistaad/images.json'
import image3 from '../../public/pages/projects/003-den-hague/images.json'
import image4 from '../../public/pages/projects/004-rotterdam/images.json'
import image5 from '../../public/pages/projects/005-amsterdam/images.json'
import image6 from '../../public/pages/projects/006-amstelveen/images.json'
import image7 from '../../public/pages/projects/007-capelle-aan-den-ijssel/images.json'
import image8 from '../../public/pages/projects/008-haarlem/images.json'
import image9 from '../../public/pages/projects/009-amsterdam/images.json'
import image10 from '../../public/pages/projects/010-amstelveen/images.json'

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
  {
    name: '005 Amsterdam',
    details: 'Visualisations',
    description: [],
    images: image5,
    slug: '005-amsterdam',
  },
  {
    name: '006 Amstelveen',
    details: 'Visualisations',
    description: [],
    images: image6,
    slug: '006-amstelveen',
  },
  {
    name: '007 Capelle aan den IJssel',
    details: 'Visualisations',
    description: [],
    images: image7,
    slug: '007-capelle-aan-den-ijssel',
  },
  {
    name: '008 Haarlem',
    details: 'Collages',
    description: [],
    images: image8,
    slug: '008-haarlem',
  },
  {
    name: '009 Amsterdam',
    details: 'Visualisations',
    description: [],
    images: image9,
    slug: '009-amsterdam',
  },
  {
    name: '010 Amstelveen',
    details: 'Visualisations',
    description: [],
    images: image10,
    slug: '010-amstelveen',
  },
];
