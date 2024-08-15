"use server"

import { db } from "@/db"
import { shirtsTable } from "@/db/schema";
import { redirect } from "next/navigation";

export default async function addShirt(formData: FormData) {
    try{
        await db.insert(shirtsTable).values({
            name: formData.get('name') as string,
    
            price: formData.get('price') as any,
    
            shirtimage: formData.get('shirtimage') as string,
        })
    }catch(e: any){
        console.log(e);
    }
    
    redirect('/');
    
}