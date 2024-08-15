import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const shirtName = searchParams.get('Name');
    const shirtImage = searchParams.get('shirtImage');
    const price = searchParams.get('Price');

    try {
        if (!shirtName || !shirtImage || !price) throw new Error("Missing information");
        await sql`INSERT INTO shirts (Name, Shirtimage,Price) values(${shirtName},${shirtImage}, ${price}); `
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const shirts = await sql`SELECT * FROM shirts;`;
    return NextResponse.json({shirts}, {status:200});
}