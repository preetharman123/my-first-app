import { useEffect } from 'react';
import Product from '../components/Product';
import useProducts from '../hooks/useProducts';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { addItem } from '../store/slices/cartSlice';
import { useDispatch } from 'react-redux';

function ProductList() {
    // let data = [];
    const plist = useProducts(); // called as custom hooks component
    console.log(plist)
    const navigate = useNavigate();
    const [queryParams, setQueryParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        //?page=10&pincode=123456
        console.log("PAGE", queryParams.get("page"));
    }, [queryParams])
    ///start move to useProdcts hooks file
    // const [plist, setPlist] = useState([]);
    // const getData = async () => {
    //     try {
    //         let res = await getProducts();
    //         setPlist(res.data);
    //         //  data =  res.data
    //         console.log("data response success", res.data)
    //     }
    //     catch (e) {
    //         console.log("error", e)
    //     }
    // }

    // useEffect(() => {
    //     getData();
    // }, []);
    ///end move to useProdcyts hooks file

    return (
        <div>
            {plist.map((item) => {
                <Product
                    key={item.productId}
                    data={item}
                    btnClick={(id) => {
                        dispatch(addItem(item));
                        navigate("/cart");
                    }}
                />
            })}
            <button onClick={() => setQueryParams({ page: 4 })}>Page 4</button>
        </div>
    )
}

export default ProductList;

// <div>
//     <Product dataList={data} addCart={handleAddCart}></Product>
// btnClick={(id) => navigate("/cart")}
// </div>
// <div>
//     {plist.map((item) => {
//         <Product
//             key={item.productId}
//             data={item}
//             btnClick={(id) => console.log("add item", id)}
//         />
//     })}
// </div>