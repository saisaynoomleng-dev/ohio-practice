import { type SchemaTypeDefinition } from 'sanity';
import { blockContentType } from './blockContentType';
import { vanType } from './vanType';
import { reviewType } from './reviewType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, vanType, reviewType],
};
