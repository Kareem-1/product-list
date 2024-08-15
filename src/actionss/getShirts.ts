"use server"

import { db } from "@/db"
import { shirtsTable } from "@/db/schema";

export default async function getShirts() {
    return await db.select().from(shirtsTable);
}