import Bounded from '@/components/Bounded';
import ContactUsSection from '@/components/ContactUsSection';
import Subtitle from '@/components/Subtitle';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <Bounded>
      <div className="grid md:grid-cols-2 gap-3">
        <h2 className="font-semibold text-fs-600 md:text-fs-700">
          We build for success
        </h2>

        <div className="flex flex-col gap-y-3 md:gap-y-5">
          <Subtitle title="About Romano & daniels" />
          <p>
            This is a space to share more about the business: who's behind it,
            what it does and what this site has to offer. It&apos;s an
            opportunity to tell the story behind the business or describe a
            special service or product it offers. You can use this section to
            share the company's history or highlight a particular feature that
            sets it apart from competitors.
          </p>
          <p>
            Let the writing speak for itself. Keep a consistent tone and voice
            throughout the website to stay true to the brand image and give
            visitors a taste of the company&apos;s values and personality.
          </p>
          <div>
            <Image src="/about.avif" alt="" width={500} height={500} />
          </div>
        </div>
      </div>

      <div className="divider mx-auto" />

      <div className="grid md:grid-cols-2 gap-3">
        <h2 className="font-semibold text-fs-600 md:text-fs-700">
          We build for people
        </h2>

        <div className="flex flex-col gap-y-3 md:gap-y-5">
          <Subtitle title="Why we do what we do" />
          <p>
            This is a space to share more about the business: who's behind it,
            what it does and what this site has to offer. It&apos;s an
            opportunity to tell the story behind the business or describe a
            special service or product it offers. You can use this section to
            share the company's history or highlight a particular feature that
            sets it apart from competitors.
          </p>
          <p>
            Let the writing speak for itself. Keep a consistent tone and voice
            throughout the website to stay true to the brand image and give
            visitors a taste of the company&apos;s values and personality.
          </p>
        </div>
      </div>

      <div>
        <ContactUsSection />
      </div>
    </Bounded>
  );
};

export default AboutPage;
