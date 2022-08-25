import { FeaturesDataItem } from '../../types/data';
import { features } from './data';

import classes from './Features.module.scss';

const FeatureItem = ({ title, body, icon }: FeaturesDataItem) => (
  <article className={classes.item}>
    <figure>
      <img src={icon} alt={title} />
    </figure>
    <h3>{title}</h3>
    <p>{body}</p>
  </article>
);

export const Features = () => (
  <section className={classes.Features}>
    <div className='container'>
      <h2 className={classes.title}>{features.title}</h2>
      <p className={classes.description}>{features.description}</p>
      <div className={classes.items}>
        {features.items.map((item) => (
          <FeatureItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  </section>
);
