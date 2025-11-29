import { type SchemaTypeDefinition } from 'sanity';
import { serviceType } from './serviceType';
import { blockContentType } from './blockContentType';
import { blockImageType } from './blockImageType';
import { contactType } from './contactType';
import { projectType } from './projectType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    serviceType,
    blockContentType,
    blockImageType,
    contactType,
    projectType,
  ],
};
