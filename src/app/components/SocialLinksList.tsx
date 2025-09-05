import React from 'react';
import { Link } from './types';
import { getIcon } from './iconUtils';
import SocialCard from './SocialCard';

export default function SocialLinksList({ links }: { links: Link[] }) {
  return (
    <>
      {links.map((link, index) => (
        <SocialCard
          key={index}
          icon={getIcon(link.icon)}
          text={link.displayTitle || link.title}
          link={link.url}
        />
      ))}
    </>
  );
}
