import { FaShuttleVan } from 'react-icons/fa';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Van Life')
    .items([
      S.divider().title('Marketing'),
      S.documentTypeListItem('van').title('Vans').icon(FaShuttleVan),
    ]);
