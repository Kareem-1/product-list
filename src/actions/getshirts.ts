export const getShirts = async () => {
    try {
        let fetchItems = await fetch("http://localhost:3000/api/mysql/men",{ cache: "no-store" })
        if (!fetchItems.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await fetchItems.json();
        const items = data.results;
        return items
    } catch (error) {
        console.log(error);
    }
};