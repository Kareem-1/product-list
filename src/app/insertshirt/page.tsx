import addShirt from "@/actionss/addShirt";
import Shirts from "@/components/Shirts";

export default function AddShirt(){
    return(
    <div>
        <p>Insert shirt</p>
        <form action={addShirt}>
                <label htmlFor="name">Shirt Name<input type="text" id="name" name="name" /></label>
                <label htmlFor="price">Price<input type="number" id="price" name="price" /></label>
                <label htmlFor="shirtimage">Image Link<input type="text" id="shirtimage" name="shirtimage" /></label>
                <input type="submit" value="Submit"/>
            </form>
    </div>
    )
}