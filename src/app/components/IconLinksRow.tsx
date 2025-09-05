import React from 'react';
import { Link } from './types';
import { getIcon } from './iconUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconLinksRow({ links }: { links: Link[] }) {
  return (
    <div className="icons">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.title}
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--highlight)]"
        >
          <FontAwesomeIcon icon={getIcon(link.icon)} />
        </a>
      ))}
    </div>
  );
}
