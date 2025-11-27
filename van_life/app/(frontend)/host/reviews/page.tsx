import Bounded from '@/components/Bounded';
import { formatDate } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_REVIEWS_QUERY } from '@/sanity/lib/query';
import { PortableText } from 'next-sanity';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaStar } from 'react-icons/fa6';

const ReviewsPage = async () => {
  const { data: reviews } = await sanityFetch({ query: ALL_REVIEWS_QUERY });

  if (!reviews) notFound();

  return (
    <Bounded>
      <h2 className="text-fs-700 font-semibold">Your Reviews</h2>

      <p className="font-semibold">Reviews ({reviews.length})</p>

      <div className="flex flex-col gap-y-2 divide-y-2 ">
        {reviews.map((review, i) => (
          <div key={i} className="flex flex-col gap-y-2 py-4">
            {review.rating && (
              <p className="flex">
                {Array.from({ length: review.rating }, (_, i) => i + 1).map(
                  (star) => (
                    <FaStar key={star} className="text-brand-orange-400" />
                  ),
                )}
              </p>
            )}

            <p className="capitalize font-semibold">
              {review.username}{' '}
              <span className="text-fs-400 text-brand-black-200/50">
                {formatDate(review._createdAt)}
              </span>
            </p>

            <p>{review.desc}</p>

            <p>
              Reviewed to{' '}
              <Link
                href={`/vans/${review.vans?.slug?.current}`}
                className="underline"
              >
                {review.vans?.name}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default ReviewsPage;
