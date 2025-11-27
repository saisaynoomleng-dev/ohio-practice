import { type SchemaTypeDefinition } from 'sanity';
import { blockImage } from './blockImage';
import { projectType } from './projectType';
import { blockContentType } from './blockContent';
import { successType } from './successType';
import { teamMemberType } from './teamMemberType';
import { contactType } from './contactType';
import { newsletterType } from './newsletterType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockImage,
    projectType,
    blockContentType,
    successType,
    teamMemberType,
    contactType,
    newsletterType,
  ],
};
