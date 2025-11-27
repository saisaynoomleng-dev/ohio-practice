import { urlFor } from '@/sanity/lib/image';
import { ALL_TEAM_MEMBERS_QUERYResult } from '@/sanity/types';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

const MemberCard = ({
  className,
  ...props
}: NonNullable<ALL_TEAM_MEMBERS_QUERYResult>[number] & {
  className?: string;
}) => {
  const { name, role, mainImage } = props;

  return (
    <div className={clsx('flex flex-col gap-y-3', className)}>
      {mainImage?.asset?.url ? (
        <Image
          src={urlFor(mainImage.asset.url)
            .width(300)
            .height(300)
            .auto('format')
            .format('webp')
            .url()}
          alt={mainImage.alt as string}
          width={300}
          height={300}
          priority
          loading="eager"
          className="object-cover"
        />
      ) : null}
      <p className="font-semibold uppercase">{name}</p>

      <p className="flex gap-x-2 uppercase">
        {role?.map((role) => (
          <span>{role}</span>
        ))}
      </p>
    </div>
  );
};

export default MemberCard;
