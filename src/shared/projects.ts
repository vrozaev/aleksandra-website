import image1 from '../../public/pages/projects/001-amsterdam/images.json'
import image2 from '../../public/pages/projects/002-amstelveen/images.json'
import image3 from '../../public/pages/projects/003-capelle-aan-den-ijssel/images.json'
import image4 from '../../public/pages/projects/004-haarlem-neptunusstraat/images.json'
import image5 from '../../public/pages/projects/005-haarlem-pladellastraat/images.json'
import image6 from '../../public/pages/projects/006-purmerend/images.json'
import image7 from '../../public/pages/projects/007-amsterdam-ijburg/images.json'
import image8 from '../../public/pages/projects/008-amstelveen-rozenoord/images.json'

export type ProjectType = {
  images: string[];
  name: string;
  details: string;
  description: string[];
  slug: string;
}

export const PROJECTS_LIST: ProjectType[] = [
  {
    name: 'Amsterdam apartment',
    details: 'Interior design',
    description: [],
    images: image1,
    slug: '001-amsterdam',
  },
  {
    name: 'Amstelveen family home',
    details: 'Interior design',
    description: [],
    images: image2,
    slug: '002-amstelveen',
  },
  {
    name: 'Townhouse near Rotterdam',
    details: 'Interior design · Extension · Custom furniture',
    description: [
      'This project marks a new chapter for a family preparing for the next stage of their lives. The home needed to accommodate both present and future needs: a room for elderly parents, bedrooms for the children, welcoming spaces for gatherings with friends, and dedicated areas for new hobbies.',
      'The scope of work went beyond the interior design of the three-storey house, including the design of a new extension and custom-built furniture throughout the home.',
      'The result is a fresh, contemporary interior that balances functionality with warmth, creating space for cosy details and celebrating the natural beauty of materials.',
    ],
    images: image3,
    slug: '003-capelle-aan-den-ijssel',
  },
  {
    name: 'Historic townhouse in Haarlem',
    details: 'Interior design · Renovation',
    description: [
      'This century-old townhouse is a magnificent historic residence. We discovered traces of the Amsterdam School architectural movement and an original ceiling rose hidden beneath a suspended ceiling.',
      'We introduced an enfilade layout on the main living floor to emphasise the continuity between spaces, and used colour to highlight the bedrooms, kitchen, and bathrooms.',
      'The result is an exceptionally colourful, vibrant, and joyful interior that celebrates the building’s history while bringing it into the present. The project is currently under construction in the final quarter of 2026.',
    ],
    images: image4,
    slug: '004-haarlem-neptunusstraat',
  },
  {
    name: 'Contemporary home in Haarlem',
    details: 'Interior design · Renovation',
    description: ['This brand-new home in a beautiful residential development was brought to life through vibrant colours, vintage furniture, and iconic lighting pieces.', 'Expanding the entrance hall and creating a cohesive colour scheme transformed the arrival into a warm, golden experience. The kitchen was also enlarged by rethinking the proportions of the entrance corridor.', 'A walnut-veneered headboard, a striking warm-toned wardrobe, and new storage beneath the roof complete this contemporary interior filled with personality.'],
    images: image5,
    slug: '005-haarlem-pladellastraat',
  },
  {
    name: 'Purmerend family home',
    details: 'Interior design',
    description: [],
    images: image6,
    slug: '006-purmerend',
  },
  {
    name: 'Elegant bathroom and powder room in IJburg',
    details: 'Interior design',
    description: ['These simple yet essential spaces should be functional and comfortable, but also beautiful. Every detail of our morning and evening rituals deserves to bring a sense of pleasure and joy.', 'In this classic-style bathroom, rich red was chosen as a luxurious accent for an otherwise light and understated interior. A spacious vanity unit provides generous storage for everyday essentials.', 'In the powder room, iconic wallpaper and thoughtful IKEA customisation transformed the space through simple, affordable details.'],
    images: image7,
    slug: '007-amsterdam-ijburg',
  },
  {
    name: 'Amstelveen residence',
    details: 'Interior design',
    description: [],
    images: image8,
    slug: '008-amstelveen-rozenoord',
  },
];
