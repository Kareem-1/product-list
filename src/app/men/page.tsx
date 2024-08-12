import Image from "next/image";
import image1 from '../../../public/img1.webp'
import image2 from '../../../public/img2.webp'
import image3 from '../../../public/img3.webp'
import image4 from '../../../public/img4.webp'
import { Item } from "@/components/Item";
import { getShirts } from "@/actions/getshirts";

export default async function Men() {

    //let array: any[] = await getShirts();
    let number: number = 0;
    //for(let i=0; i<array.length;i++){
    //   number+=1;
    //}
    //
    //console.log(array);
    //number = Number(array[-1].id);
    return (
        <div className="flex flex-col items-center justify-center">
            <div>{number} styles found</div>
            <div className="grid grid-cols-4 justify-between">
                <Item key={1} link={"https://images.asos-media.com/products/calvin-klein-jeans-archival-monologo-t-shirt-in-blue/205873971-1-duskblue?$n_480w$&wid=476&fit=constrain"} name={"Shirt 1"} price={12} />
            </div>
        </div>
    )
}