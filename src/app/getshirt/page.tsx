import getShirts from "@/actions/getShirts";
import GetShirts from "@/components/GetShirts";
import { getShirtById } from "@/db/queries/select";

export default async function GetShirt() {
    let result = await getShirts();
    console.log(result)
    return (
        <div>
            GET SHIRT
        </div>
    )
}