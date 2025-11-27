'use client';

import Link from 'next/link';
import Form from 'next/form';
import { useActionState } from 'react';
import { handleNewsletterSubscription } from '@/lib/actions';
import { Input } from './ui/input';
import SubmitButton from './SubmitButton';

const FOOTER_LINKS = [
  { name: 'Home', url: '/' },
  { name: 'Our Vision', url: '/about#vision' },
  { name: 'About', url: '/about' },
  { name: 'Projects', url: '/projects' },
  { name: 'Contact', url: '/contact' },
  { name: 'Privacy Policy', url: '/privacy' },
  { name: 'Accessibility Statement', url: '/accessibility' },
  { name: 'Linkedin', url: 'https://www.linkedin.com' },
  { name: 'Facebook', url: 'https://www.facebook.com' },
  { name: 'Instagram', url: 'https://www.instagram.com' },
];

const initialFormState = {
  status: '',
  message: '',
  field: '',
};

const Footer = () => {
  const [state, actionFunction] = useActionState(
    handleNewsletterSubscription,
    initialFormState,
  );

  return (
    <footer className="px-3 py-5 md:px-5 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-5 gap-y-2 border-y border-brand-black py-3">
        {FOOTER_LINKS.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className="hover:underline underline-offset-2"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="border-b py-3 border-brand-black space-y-3">
        <p className="font-semibold text-center text-fs-300">
          Subscribe Our Newsletter
        </p>
        <Form
          action={actionFunction}
          className="grid grid-cols-1 md:grid-cols-2 md:gap-x-2 gap-y-3"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="label-form">
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              className="border-b border-brand-black text-brand-black"
            />
            {state.status === 'error' && state.field === 'name' ? (
              <p className="text-fs-200 text-red-500">{state.message}</p>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="label-form">
              Email
            </label>
            <Input
              id="email"
              type="text"
              name="email"
              className="border-b border-brand-black text-brand-black"
            />
            {state.status === 'error' && state.field === 'email' ? (
              <p className="text-fs-200 text-red-500">{state.message}</p>
            ) : null}
          </div>

          <SubmitButton className="bg-brand-black text-brand-white md:col-start-2" />
        </Form>
      </div>

      <div className="text-right py-3">
        <p className="text-fs-200">
          &copy; {new Date().getFullYear()} Sai Say Noom Leng.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
