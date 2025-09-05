import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
  faUtensils,
  faShoppingBag,
  faShoppingCart,
  faStore,
  faCalendar,
  faClock,
  faInfoCircle,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';

const iconMap: Record<string, IconDefinition> = {
  phone: faPhone,
  email: faEnvelope,
  envelope: faEnvelope,
  website: faGlobe,
  map: faMapMarkerAlt,
  instagram: faInstagram,
  facebook: faFacebook,
  twitter: faTwitter,
  linkedin: faLinkedin,
  youtube: faYoutube,
  tiktok: faTiktok,
  menu: faUtensils,
  shop: faShoppingBag,
  cart: faShoppingCart,
  store: faStore,
  calendar: faCalendar,
  clock: faClock,
  info: faInfoCircle,
  link: faLink,
};

export const getIcon = (name: string): IconDefinition => iconMap[name] || faLink;

export const isContactIcon = (name: string): boolean =>
  ['phone', 'email', 'envelope', 'website', 'map'].includes(name);
