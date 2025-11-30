import Link from 'next/link';

const ContactUsSection = () => {
  return (
    <div className="space-y-1 md:space-y-3 bg-brand-green/40 py-3 text-center">
      <p className="font-semibold">Get a quote for your upcoming project</p>
      <Link
        href="/contact"
        className="bg-brand-black-200 text-brand-white px-3 py-2 inline-block hover:scale-[1.02] transition-transform duration-300"
      >
        Contact
      </Link>
    </div>
  );
};

export default ContactUsSection;
