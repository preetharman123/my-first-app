import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";

function useProducts() {
    let [plist, setPlist] = useState([]);
    const getData = async () => {
        try {
            const res = await getProducts();
            console.log(res.data);
            setPlist(res.data);
            console.log("data response success", res.data)
        }
        catch (e) {
            console.log("error", e)
        }
    }

    useEffect(() => {
        getData();
    }, []);
    console.log(plist);

    return plist;
}

export default useProducts;