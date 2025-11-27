import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SubmitButton from '@/components/SubmitButton';
import { Textarea } from '@/components/ui/textarea';
import { sanityFetch } from '@/sanity/lib/live';
import {
  ALL_PROJECTS_QUERY,
  ALL_TEAM_MEMBERS_QUERY,
} from '@/sanity/lib/queries';
import MemberCard from '@/components/MemberCard';
import ProjectCard from '@/components/ProjectCard';

export default async function Home() {
  const { data: projects } = await sanityFetch({ query: ALL_PROJECTS_QUERY });
  return <></>;
}
