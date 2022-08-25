import { useState } from 'react';

import useMatchMedia from 'use-match-media-hook';
import { DataMenuLinkItem } from '../../types/data';

import { IoMenu } from 'react-icons/io5';
import { Menu } from './Menu';
import Logo from 'images/logo.svg';

import classes from './Header.module.scss';

const menuItems: DataMenuLinkItem[] = [
  {
    url: '#',
    text: 'Features',
  },
  {
    url: '#',
    text: 'Prices',
  },
  {
    url: '#',
    text: 'Resources',
  },
];

const queries = ['(max-width: 766px)', '(min-width: 767px)'];

export const Header = () => {
  const [mobile] = useMatchMedia(queries);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <header className={`${classes.header} container`}>
        <img src={Logo} alt='logo' className={classes.logo} />
        {mobile ? (
          <IoMenu
            className={classes.burger}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
        ) : (
          <Menu links={menuItems} />
        )}
        {showMobileMenu && mobile && (
          <div className={classes.mobileMenu}>
            <Menu links={menuItems} />
          </div>
        )}
      </header>
    </>
  );
};
