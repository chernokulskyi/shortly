import { Button } from 'components/Button/Button';
import { DataMenuLinkItem } from '../../types/data';

import classes from './Menu.module.scss';

export const Menu = ({ links = [] }: { links: DataMenuLinkItem[] }) => (
  <div className={classes.menu}>
    <div className={classes.pages}>
      {links.map((link) => (
        <a href={link.url} key={link.text} className={classes.link}>
          {link.text}
        </a>
      ))}
    </div>
    <div className={classes.login}>
      <Button variant='link'>Login</Button>
      <Button>Sign Up</Button>
    </div>
  </div>
);
