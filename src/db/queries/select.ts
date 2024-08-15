import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm';
import { db } from '../index';
import { SelectShirt, shirtsTable } from '../schema';

export async function getShirtById(id: SelectShirt['id']): Promise<
  Array<{
    id: number;
    name: string;
    shirtimage: string;
    price: number;
  }>
> {
  return db.select().from(shirtsTable).where(eq(shirtsTable.id, id));
}