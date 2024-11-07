import { FC } from 'react';

interface LinkProps {
  title: string;
  url: string;
  onClick: () => void;
  isActive: boolean;
}

export const Link: FC<LinkProps> = ({ url, title, onClick, isActive }) => {
  return (
    <div className='text-white uppercase'>
      <a
        href={url}
        className={`text-sm uppercase tracking-wider ${
          isActive ? 'text-purple-400' : 'text-gray-100 hover:text-purple-400'
        }`}
        onClick={onClick}
      >
        {title}
      </a>
    </div>
  );
};
