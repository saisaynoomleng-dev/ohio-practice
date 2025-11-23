import { defineQuery } from 'next-sanity';

export const ALL_VANS_QUERY = defineQuery(`*[_type == 'van' 
 && defined(slug.current)]
| order(name){
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
    mainImage,
    reviews[]->{
        username,
        rating,
        desc
    }
}`);
