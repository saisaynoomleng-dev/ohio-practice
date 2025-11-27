// Bounded Props
export type BoundedProps = {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
};

// Newsletter Subscription
export type NewsletterFormProps = {
  status: string;
  message: string;
  field?: string;
};
