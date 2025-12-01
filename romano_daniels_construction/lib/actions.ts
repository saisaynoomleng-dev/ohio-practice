'use server';

import { client } from '@/sanity/lib/client';
import { ContactFormProps } from './types';

export const handleContactForm = async (
  prevState: ContactFormProps,
  formData: FormData,
): Promise<{ status: string; message: string; field?: string }> => {
  const firstName = formData.get('firstName')?.toString().trim() || '';
  const lastName = formData.get('lastName')?.toString().trim() || '';
  const email = formData.get('email')?.toString().trim() || '';
  const message = formData.get('message')?.toString().trim() || '';
  const reg_email = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  if (!firstName) {
    return {
      status: 'error',
      message: 'This field cannot be empty!',
      field: 'firstName',
    };
  }

  if (!lastName) {
    return {
      status: 'error',
      message: 'This field cannot be empty!',
      field: 'lastName',
    };
  }

  if (!email) {
    return {
      status: 'error',
      message: 'This field cannot be empty!',
      field: 'email',
    };
  }

  if (!message) {
    return {
      status: 'error',
      message: 'This field cannot be empty!',
      field: 'message',
    };
  }

  if (!reg_email.test(email)) {
    return {
      status: 'error',
      message: 'Must be a valid email address',
      field: 'email',
    };
  }

  try {
    await client.create({
      _type: 'contact',
      firstName,
      lastName,
      email,
      message,
    });

    return {
      status: 'success',
      message: "Thank you for contacting us, we'll be in touch shortly!",
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'Something went wrong! Please try again later!',
    };
  }
};
