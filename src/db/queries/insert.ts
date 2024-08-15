import { db } from '../index'
import { InsertShirt, shirtsTable } from '../schema'

export async function createShirt(data: InsertShirt) {
    await db.insert(shirtsTable).values(data);
}