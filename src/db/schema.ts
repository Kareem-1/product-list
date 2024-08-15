import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex,
    integer
} from 'drizzle-orm/pg-core'

export const shirtsTable = pgTable(
    'shirts',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        shirtimage: text('shirtimage').notNull(),
        price: integer('price').notNull()
    },
    (shirts) => {
        return {
            uniqueIdx: uniqueIndex('unique_idx').on(shirts.id),
        };
    },
);

export type InsertShirt = typeof shirtsTable.$inferInsert;
export type SelectShirt = typeof shirtsTable.$inferSelect;