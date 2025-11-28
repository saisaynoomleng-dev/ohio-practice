'use client';

import Link from 'next/link';
import Form from 'next/form';
import { useActionState } from 'react';
import { handleNewsletterSubscription } from '@/lib/actions';
import { Input } from './ui/input';
import SubmitButton from './SubmitButton';
import Image from 'next/image';

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
    <footer className="px-3 py-5 md:px-5 lg:px-8 bg-brand-black/5">
      <div className="py-2 grid md:grid-cols-[auto_1fr] md:justify-between gap-y-3 md:gap-x-10">
        <Link href="/">
          <Image src="/logo.png" width={100} height={100} priority alt="" />
        </Link>
        <p className="text-fs-300 text-right">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          distinctio, inventore tempora, repellat quidem quisquam asperiores
          numquam architecto impedit nihil, ut perspiciatis accusamus velit
          suscipit quibusdam vel voluptatum voluptatibus quaerat.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 md:gap-x-5 gap-y-2 border-y-2 border-brand-black/10 py-3">
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

      <div className="border-b-2 py-3 border-brand-black/10 space-y-3">
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
