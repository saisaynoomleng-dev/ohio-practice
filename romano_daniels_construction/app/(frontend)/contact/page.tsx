'use client';

import Bounded from '@/components/Bounded';
import Subtitle from '@/components/Subtitle';
import Image from 'next/image';
import Link from 'next/link';
import Form from 'next/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SubmitButton from '@/components/SubmitButton';
import { useActionState } from 'react';
import { handleContactForm } from '@/lib/actions';

const initialFormState = {
  status: '',
  message: '',
  field: '',
};

const ContactPage = () => {
  const [state, actionFunciton] = useActionState(
    handleContactForm,
    initialFormState,
  );

  return (
    <Bounded>
      <div className="grid md:grid-cols-2 gap-3">
        <h2 className="font-semibold text-fs-600 md:text-fs-700">Contact</h2>

        <div className="flex flex-col gap-y-3">
          <Subtitle title="how we can help?" />
          <address className="flex flex-col gap-y-1">
            <p>500 Terry Francine St, San Francisco, CA 94158</p>
            <Link
              href="tel:+1234567890"
              className="hover:underline underline-offset-2"
            >
              123-456-7890
            </Link>
            <Link
              href="mailto:info@mysite.com"
              className="hover:underline underline-offset-2"
            >
              info@mysite.com
            </Link>
          </address>
        </div>
      </div>

      <div className="divider mx-auto" />

      <div className="grid md:grid-cols-2 gap-3 md:gap-x-5">
        <div>
          <Image
            src="/contact.avif"
            alt=""
            width={1000}
            height={1000}
            className="min-w-full mx-auto"
          />
        </div>

        <Form action={actionFunciton} className="flex flex-col gap-y-3">
          <Subtitle title="contact us" />
          <h2 className="font-semibold text-fs-500 md:text-fs-600">
            Tell us about your next project
          </h2>

          <div className="divider mx-auto" />

          <div className="flex flex-col gap-y-3">
            <label htmlFor="firstName" className="form-label">
              first name
            </label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              autoComplete="first name"
            />
            {state.status === 'error' && state.field === 'firstName' ? (
              <p className="text-red-500 italic">{state.message}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-y-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              autoComplete="last name"
            />
            {state.status === 'error' && state.field === 'lastName' ? (
              <p className="text-red-500 italic">{state.message}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-y-3">
            <label htmlFor="email" className="form-label">
              email
            </label>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="example@mail.com"
              autoComplete="email"
            />{' '}
            {state.status === 'error' && state.field === 'email' ? (
              <p className="text-red-500 italic">{state.message}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-y-3">
            <label htmlFor="message" className="form-label">
              message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
            />
            {state.status === 'error' && state.field === 'message' ? (
              <p className="text-red-500 italic">{state.message}</p>
            ) : null}
          </div>

          <SubmitButton />
        </Form>
      </div>
    </Bounded>
  );
};

export default ContactPage;
