'use client';

import React, { useState } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-4 mt-6"
      aria-label="contact form"
    >
      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <div className="flex flex-col w-full">
        <label htmlFor="message" className="mb-1 text-sm font-medium text-[var(--text-dark)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="border border-[var(--border-color)] rounded-md p-2 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]"
          value={form.message}
          onChange={handleChange}
          aria-label="Message"
        />
      </div>
      <Button type="submit" aria-label="Submit contact form">
        Send
      </Button>
    </form>
  );
}
