'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={inputId} className="mb-1 text-sm font-medium text-[var(--text-dark)]">
        {label}
      </label>
      <input
        id={inputId}
        className="border border-[var(--border-color)] rounded-md p-2 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]"
        {...props}
      />
    </div>
  );
}
