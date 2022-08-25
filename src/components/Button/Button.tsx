import React, { PropsWithChildren } from 'react';

import classes from './Button.module.scss';
import cn from 'classnames';

interface Props {
  onClick?: () => void;
  variant?: 'square' | 'link';
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  onClick,
  variant = '',
  size = 'medium',
  type = 'button',
  className = '',
  disabled,
  children,
}) => {
  const mainCn = cn(classes.button, classes[size], classes[variant]);

  return (
    <button
      className={`${mainCn} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
