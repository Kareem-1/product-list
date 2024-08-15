'use client'
import { createShirt } from "@/db/queries/insert";
import { getShirtById } from "@/db/queries/select"
import { useState } from "react";

export default function Shirts() {

    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [link, setLink] = useState<string>('');
    const handleClick = () => {

        createShirt({ name, shirtimage: link, price })
    }
    let shirt = getShirtById(1);
    console.log(shirt);
    return (
        <div>
            <form>
                <label htmlFor="">Shirt Name<input onChange={(e) => { setName(e.target.value) }} /></label>
                <label htmlFor="">Price<input onChange={(e) => { setPrice(parseInt(e.target.value)) }} /></label>
                <label htmlFor="">Image Link<input onChange={(e) => { setLink(e.target.value) }} /></label>
                <button onClick={handleClick}>Add Shirt</button>
            </form>
        </div>
    )
}