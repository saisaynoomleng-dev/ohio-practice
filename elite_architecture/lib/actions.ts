'use server';

import { client } from '@/sanity/lib/client';
import { NewsletterFormProps } from './types';

export const handleNewsletterSubscription = async (
  prevFormState: NewsletterFormProps,
  formData: FormData,
): Promise<{ status: string; message: string; field?: string }> => {
  const email = formData.get('email')?.toString().trim() || '';
  const name = formData.get('name')?.toString().trim() || '';
  const reg_email = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  if (!email) {
    return {
      status: 'error',
      message: 'Email field cannot be empty!',
      field: 'email',
    };
  }

  if (!name) {
    return {
      status: 'error',
      message: 'Name field cannot be empty!',
      field: 'name',
    };
  }

  if (!reg_email.test(email)) {
    return {
      status: 'error',
      message: 'Must be a vaild email address.',
      field: 'email',
    };
  }

  try {
    await client.create({
      _type: 'newsletter',
      name,
      email,
    });

    return {
      status: 'success',
      message: 'Thank you for your subscription!',
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Something went wrong! Please try again later!',
    };
  }
};

export const handleContacts = async (
  prevState: NewsletterFormProps,
  formData: FormData,
): Promise<{ status: string; message: string; field?: string }> => {
  const firstName = formData.get('firstName')?.toString().trim() || '';
  const lastName = formData.get('lastName')?.toString().trim() || '';
  const email = formData.get('email')?.toString().trim() || '';
  const phone = formData.get('phone')?.toString().trim() || '';
  const message = formData.get('message')?.toString().trim() || '';
  const reg_email = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  if (!firstName) {
    return {
      status: 'error',
      message: 'This Field cannot be empty!',
      field: 'firstName',
    };
  }

  if (!lastName) {
    return {
      status: 'error',
      message: 'This Field cannot be empty!',
      field: 'lastName',
    };
  }

  if (!email) {
    return {
      status: 'error',
      message: 'This Field cannot be empty!',
      field: 'email',
    };
  }

  if (!phone) {
    return {
      status: 'error',
      message: 'This Field cannot be empty!',
      field: 'phone',
    };
  }

  if (!message) {
    return {
      status: 'error',
      message: 'This Field cannot be empty!',
      field: 'message',
    };
  }

  if (!reg_email.test(email)) {
    return {
      status: 'error',
      message: 'Must be a valid email',
      field: 'email',
    };
  }

  try {
    await client.create({
      _type: 'contact',
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    return {
      status: 'success',
      message: `Thank you for contacting us! We'll be in touch shortly.`,
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Something went wrong! try again later!',
    };
  }
};
