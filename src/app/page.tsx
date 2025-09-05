'use client';

import React from 'react';
import { ClientData } from './components/types';
import { isContactIcon } from './components/iconUtils';
import Logo from './components/Logo';
import Title from './components/Title';
import IconLinksRow from './components/IconLinksRow';
import SocialLinksList from './components/SocialLinksList';
import ContactInfoList from './components/ContactInfoList';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ContactForm from './components/ContactForm';

const defaultData: ClientData = {
  name: 'Test Data',
  logo: 'https://sandybrown-ant-159541.hostingersite.com/wp-content/uploads/2025/05/Dr.-Nahla-02.png',
  links: [],
};

export default function Page() {
  const customHTMLBase64 = process.env.NEXT_PUBLIC_CUSTOM_HTML_BASE64;

  if (customHTMLBase64) {
    try {
      const customHTML = Buffer.from(customHTMLBase64, 'base64').toString('utf8');
      return (
        <div
          dangerouslySetInnerHTML={{ __html: customHTML }}
          style={{ width: '100%', height: '100vh' }}
        />
      );
    } catch (error) {
      console.error('Error decoding custom HTML:', error);
    }
  }

  const clientData: ClientData = (() => {
    try {
      const envData = process.env.NEXT_PUBLIC_CLIENT_DATA;
      if (!envData) return defaultData;
      return JSON.parse(envData);
    } catch (error) {
      console.error('Error parsing client data:', error);
      return defaultData;
    }
  })();

  const contactLinks = clientData.links.filter((link) => isContactIcon(link.icon));
  const socialLinks = clientData.links.filter((link) => !isContactIcon(link.icon));

  return (
    <div className="container">
      <ThemeToggle />
      <Logo src={clientData.logo} alt={`${clientData.name} Logo`} />
      <Title text={clientData.name} />
      <IconLinksRow links={contactLinks} />
      <SocialLinksList links={socialLinks} />
      <ContactInfoList links={contactLinks} />
      <ContactForm />
      <Footer />
    </div>
  );
}
