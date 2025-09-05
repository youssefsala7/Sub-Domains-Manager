import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

interface SocialCardProps {
  icon: IconDefinition;
  text: string;
  link: string;
  subText?: string;
  className?: string;
}

export default function SocialCard({
  icon,
  text,
  link,
  subText,
  className = '',
}: SocialCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-card w-full ${className} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--highlight)]`}
      aria-label={text}
    >
      <FontAwesomeIcon icon={icon} className="social-card-icon" />
      <span className="social-card-text">
        {text}
        {subText && <br />}
        {subText}
      </span>
      <FontAwesomeIcon icon={faEllipsisV} className="dots" />
    </a>
  );
}
