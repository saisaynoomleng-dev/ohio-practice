import Bounded from '@/components/Bounded';
import MemberCard from '@/components/MemberCard';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_TEAM_MEMBERS_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';

const AboutPage = async () => {
  const { data: members } = await sanityFetch({
    query: ALL_TEAM_MEMBERS_QUERY,
  });

  return (
    <Bounded>
      <div className="flex flex-col gap-y-3 md:gap-y-5 lg:gap-y-8 ">
        <h2 className="text-fs-700 md:text-fs-800 font-semibold uppercase ">
          about the firm
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between gap-y-3 md:gap-x-40 items-baseline-last">
          <h3 className="text-fs-600 uppercase md:w-full text-brand-black/70">
            innovative hub
          </h3>
          <p>
            This is the space to introduce visitors to the business or brand.
            Briefly explain who&apos;s behind it, what it does and what makes it
            unique. Share its core vaules and what this site has to offer.
          </p>
        </div>
        <div>
          <Image
            src="/about-hero-desktop.avif"
            width={1000}
            height={1000}
            alt=""
            priority
            loading="eager"
            className="hidden lg:block"
          />

          <Image
            src="/about-hero-tablet.avif"
            width={1000}
            height={1000}
            alt=""
            priority
            loading="eager"
            className="hidden md:block lg:hidden"
          />

          <Image
            src="/about-hero-mobile.avif"
            width={1000}
            height={1000}
            alt=""
            priority
            loading="eager"
            className="md:hidden"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between">
        <h3 className="text-fs-600 md:text-fs-700 uppercase">Our vision</h3>
        <div className="flex flex-col gap-y-3">
          <p className="font-medium">/Forward-Thinking Design</p>
          <p>
            This is a space to share more about the business: who's behind it,
            what it does and what this site has to offer. It&apos;s an
            opportunity to tell the story behind the business or describe a
            special service or product it offers. You can use this section to
            share the company history or highlight a particular feature that
            sets it apart from competitors.
          </p>
          <p>
            Let the writing speak for itself. Keep a consistent tone and voice
            throughout the website to stay true to the brand image and give
            visitors a taste of the company&apos;s values and personality.
          </p>
        </div>
      </div>

      <div className="space-y-5 md:space-y-8">
        <h3 className="text-fs-600 md:text-fs-700 uppercase">
          meet the experts
        </h3>

        <div className="grid md:grid-cols-4 gap-3">
          {members.map((member) => (
            <MemberCard key={member?.slug?.current} {...member} />
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AboutPage;
