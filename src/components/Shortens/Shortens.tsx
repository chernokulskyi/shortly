import { useState } from 'react';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { clearAll } from 'store/linkSlice';

import { Button } from 'components/Button/Button';
import classes from './Shortens.module.scss';

export const Shortens = () => {
  const links = useAppSelector((state) => state.links.items);
  const dispatch = useAppDispatch();

  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const copyToClipboard = (link: string) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLink(link);
    });
  };

  if (!links?.length) return null;

  return (
    <section className={classes.Shortens}>
      <div className='container'>
        <Button
          variant='square'
          className={classes.clear}
          onClick={() => dispatch(clearAll())}
        >
          {links.length === 1 ? 'Clear' : 'Clear all'}
        </Button>

        {links.map((item, i) => (
          <div
            className={classes.item}
            data-active={copiedLink === item.full_short_link2}
            key={item.full_short_link2 + i}
          >
            <span>{item.original_link}</span>
            <span>{item.full_short_link2}</span>
            <Button
              variant='square'
              onClick={() => copyToClipboard(item.full_short_link2)}
            >
              {copiedLink === item.full_short_link2 ? 'Copied!' : 'Copy'}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
