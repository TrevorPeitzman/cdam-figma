// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ChecklistItem, Checklist } = initSchema(schema);

export {
  ChecklistItem,
  Checklist
};