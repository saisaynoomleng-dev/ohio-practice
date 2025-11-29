import { FaProjectDiagram } from 'react-icons/fa';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { SlCallIn } from 'react-icons/sl';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Romano & Daniels Construction Inc')
    .items([
      S.divider().title('Office'),
      S.documentTypeListItem('project')
        .title('Projects')
        .icon(FaProjectDiagram),
      S.documentTypeListItem('service')
        .title('Services')
        .icon(MdOutlineMiscellaneousServices),

      S.divider().title('Marketing'),
      S.documentTypeListItem('contact').title('Contacts').icon(SlCallIn),
    ]);
