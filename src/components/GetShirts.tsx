'use client'
import { createShirt } from "@/db/queries/insert";
import { getShirtById } from "@/db/queries/select"
import { useState } from "react";

export default function GetShirts() {

    const [id, setId] = useState<string>('1');

    const handleClick = (e: any) => {
        e.preventDefault();
        getShirtById(parseInt(id));

    }

    return (
        <div>
            <form>
                <label htmlFor="">Shirt Id<input onChange={(e) => { setId(e.target.value) }} /></label>
                <button onClick={handleClick}>Find Shirt</button>
            </form>
        </div>
    )
}