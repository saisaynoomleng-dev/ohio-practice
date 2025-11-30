import Bounded from '@/components/Bounded';
import ContactUsSection from '@/components/ContactUsSection';
import Subtitle from '@/components/Subtitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_SERVICES_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';

const ServicesPage = async () => {
  const { data: services } = await sanityFetch({ query: ALL_SERVICES_QUERY });

  return (
    <Bounded className="grid md:grid-cols-2 gap-y-5 md:gap-x-5">
      <div>
        <Image
          src="/about.avif"
          alt=""
          width={1000}
          height={1000}
          priority
          loading="eager"
          className="min-w-full"
        />
      </div>

      <div className="flex flex-col gap-y-3">
        <Subtitle title="our services" />
        <h3 className="text-fs-500 md:text-fs-600">
          Diverse solutions tailored to your every need
        </h3>

        <Accordion type="single" collapsible className="w-full">
          {services.map((service) => (
            <AccordionItem value={service?.slug?.current}>
              <AccordionTrigger>{service.name}</AccordionTrigger>
              <AccordionContent>{service.desc}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="col-span-full">
        <ContactUsSection />
      </div>
    </Bounded>
  );
};

export default ServicesPage;
