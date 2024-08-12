'use client'

interface Item {
    link:string,
    name:string,
    price: number
}
export function Item({link,name,price}:Item) {
    
    return (
        <div>
            <div>
                <img src={link} height={300} width={300} alt="image 1" />
                <p className="text-[10pt] justify-left items-center flex">{name}</p>
                <p className="text-[10pt] justify-left items-center flex font-bold">${price}</p>
            </div>
        </div>
    )
}