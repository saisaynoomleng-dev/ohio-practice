'use client';

import Bounded from '@/components/Bounded';
import SubmitButton from '@/components/SubmitButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { handleContacts } from '@/lib/actions';
import Form from 'next/form';
import { useActionState } from 'react';

const initialFormState = {
  status: '',
  message: '',
  field: '',
};

const ContactPage = () => {
  const [state, actionFunction] = useActionState(
    handleContacts,
    initialFormState,
  );
  return (
    <Bounded>
      <h2 className="text-fs-600 md:text-fs-700 lg:text-fs-800 uppercase">
        ready to collaborate?
      </h2>

      <Form
        action={actionFunction}
        className="grid md:grid-cols-2 gap-3 md:gap-5"
      >
        <div className="flex flex-col gap-y-2">
          <label htmlFor="firstName" className="label-form">
            First Name
          </label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            autoComplete="first name"
            placeholder="John"
          />
          {state.status === 'error' && state.field === 'firstName' ? (
            <p className="italic text-red-500 text-fs-300">{state.message}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="lastName" className="label-form">
            Last Name
          </label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            autoComplete="last name"
            placeholder="Doe"
          />
          {state.status === 'error' && state.field === 'lastName' ? (
            <p className="italic text-red-500 text-fs-300">{state.message}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="email" className="label-form">
            Email
          </label>
          <Input
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="sample@email.com"
          />
          {state.status === 'error' && state.field === 'email' ? (
            <p className="italic text-red-500 text-fs-300">{state.message}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="phone" className="label-form">
            Phone
          </label>
          <Input
            type="text"
            id="phone"
            name="phone"
            autoComplete="phone"
            placeholder="1 234 5678"
          />
          {state.status === 'error' && state.field === 'phone' ? (
            <p className="italic text-red-500 text-fs-300">{state.message}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-y-2 col-span-full">
          <label htmlFor="message" className="label-form">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about you..."
          />
          {state.status === 'error' && state.field === 'message' ? (
            <p className="italic text-red-500 text-fs-300">{state.message}</p>
          ) : null}
        </div>

        <SubmitButton className="w-full" />
      </Form>
    </Bounded>
  );
};

export default ContactPage;
