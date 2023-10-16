import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
  Tag: 'link' | 'button';
  to?: string;
};

const ButtonGreen = ({
  onClick = (event: React.MouseEvent<HTMLElement>) => {},
  children = 'new',
  Tag = 'button' || 'link',
  to = '#',
}: Props) => {
  return (
    <div>
      {Tag === 'button' ? (
        <button
          onClick={onClick}
          className="inline-flex items-center justify-center bg-meta-3 rounded-md py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          {children}
        </button>
      ) : (
        <Link
          onClick={onClick}
          to={to}
          className="inline-flex items-center justify-center bg-meta-3 rounded-md py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          {children}
        </Link>
      )}
    </div>
  );
};

export default ButtonGreen;
