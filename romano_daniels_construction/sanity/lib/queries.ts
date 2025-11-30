import { defineQuery } from 'next-sanity';

export const ALL_PROJECTS_QUERY = defineQuery(`*[_type == 'project'
 && defined(slug.current)]
|order(startDate){
  name,
  slug,
  mainImage{
    alt,
    asset->{url}
  },
  desc,
  startDate,
  finishDate
 }`);

export const PROJECT_QUERY = defineQuery(`*[_type == 'project'
 && slug.current == $slug][0]{
  name,
  slug,
  mainImage{
    alt,
    asset->{url}
  },
  desc,
  startDate,
  finishDate
 }`);

export const ALL_SERVICES_QUERY = defineQuery(`*[_type == 'service'
 && defined(slug.current)]
| order(_createdAt){
  name,
  desc,
  slug
 }`);
