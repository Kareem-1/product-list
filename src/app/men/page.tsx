import Image from "next/image";
import image1 from '../../../public/img1.webp'
import image2 from '../../../public/img2.webp'
import image3 from '../../../public/img3.webp'
import image4 from '../../../public/img4.webp'
import { Item } from "@/components/Item";
import getShirts from "@/actionss/getShirts";

export default async function Men() {

    let number: number = 0;
    let result = await getShirts();
    for (let i = 0; i < result.length; i++) {
        number += 1;
    }
    //
    //console.log(array);
    //number = Number(array[-1].id);
    return (
        <div className="flex flex-col items-center justify-center">
            <div>{number} styles found</div>
            <div className="grid grid-cols-4 justify-between">
                {result.map((item) => {
                    return <Item key={item.id} name={item.name} link={item.shirtimage} price={item.price} />
                })}
            </div>
        </div>
    )
}