import React from 'react';

export default function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="logo">
      <img src={src} alt={alt} />
    </div>
  );
}
