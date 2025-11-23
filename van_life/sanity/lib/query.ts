import { defineQuery } from 'next-sanity';

export const ALL_VANS_QUERY = defineQuery(`*[_type == 'van' 
 && defined(slug.current)
 && (
  (!defined($type)) ||
  $type == null ||
  $type == type
 )]{
  name,
  slug,
  price,
  type,
  mainImage{
    asset->{
      url
    },
      alt
  }
}`);

export const VAN_QUERY = defineQuery(`*[_type == 'van'
&& slug.current == $slug][0]{
    name,
    price,
    type,
    slug,
    desc,
    mainImage{
      asset->{url},
      alt
    },
    reviews[]->{
        username,
        rating,
        desc
    }
}`);
