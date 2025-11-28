import { defineQuery } from 'next-sanity';

export const ALL_PROJECTS_QUERY = defineQuery(`*[_type == 'project'
 && defined(slug.current)]{
  name,
  slug,
  desc,
  mainImage{
    asset->{url},
    alt
  }
 }`);

export const PROJECT_QUERY = defineQuery(`*[_type == 'project'
 && slug.current == $slug][0]{
  name,
  slug,
  desc,
  mainImage{
    asset->{url},
    alt
  }
 }`);

export const COMPANY_INFO_QUERY = defineQuery(`*[_type == 'success'
 ][0]{
  foundedDate,
  sqft,
  customers
 }`);

export const ALL_TEAM_MEMBERS_QUERY = defineQuery(`*[_type == 'teamMember'
 && defined(slug.current)]{
  name,
  role[],
  slug,
  mainImage{
    asset->{url},
    alt
  }
 }`);
