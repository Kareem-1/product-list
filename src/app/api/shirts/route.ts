import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    try {
        const result = await
            sql `CREATE TABLE shirts (Name varchar(255), Shirtimage varchar(255), Price NUMERIC(5,2));`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}