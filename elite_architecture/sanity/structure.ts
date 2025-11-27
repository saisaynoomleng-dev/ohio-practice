import { BiDetail } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { GiTriplePlier } from 'react-icons/gi';
import { TiMessage } from 'react-icons/ti';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.divider().title('Office'),
      S.documentTypeListItem('project').title('Projects').icon(GiTriplePlier),
      S.documentTypeListItem('success').title('Company Info').icon(BiDetail),
      S.documentTypeListItem('teamMember').title('Team Members').icon(FaUser),

      S.divider().title('Marketing'),
      S.documentTypeListItem('contact').title('Contacts').icon(TiMessage),
    ]);
