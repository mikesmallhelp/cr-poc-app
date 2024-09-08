import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const dataTable = pgTable('data', {
  id: serial('id').primaryKey(),
  data: varchar('data', { length: 255 }).notNull(),
});