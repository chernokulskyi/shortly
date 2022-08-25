import BrandRecognition from '../../images/icons/icon-brand-recognition.svg';
import DetailedRecord from '../../images/icons/icon-detailed-records.svg';
import FullyCustomizable from '../../images/icons/icon-fully-customizable.svg';

import { FeaturesData } from '../../types/data';

export const features: FeaturesData = {
  title: 'Advanced Statistics',
  description:
    'Track how your links are performing across the web with our advanced statistics dashboard.',
  items: [
    {
      id: 1,
      title: 'Brand Recognition',
      body: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      icon: BrandRecognition,
    },
    {
      id: 2,
      title: 'Detailed Records',
      body: 'Gain insights into who is click on your links. Knowing when and where people engage with your content helps inform better decisions.',
      icon: DetailedRecord,
    },
    {
      id: 3,
      title: 'Fully Customizable',
      body: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
      icon: FullyCustomizable,
    },
  ],
};
