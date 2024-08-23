import Card from "./Card";
import useTheme from "../hooks/useTheme";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Product(props) {
    console.log(props)
    const { txtColor } = useTheme();
    const code = useSelector((store) => store.currency);
    // const theme = useContext(ThemeContext);
    // const color = theme === "light" ? "#333" : "white";
    const data = props.data;
    const renderStock = () => {
        console.log(data);
        if (data.productStock > 0) {
            return (
                <button onClick={() => props.btnClick(data.productId)}>
                    Add to Cart
                </button>
            );
        }
        return <p>Out of Stock</p>;
    };
    return (
        <Card>
            <div style={{ color: txtColor }} >
                <Link to={`/detail/${data.productId}`}>
                    <img src={data.productImage} />
                </Link>
                <h5>wdwd{data.productName}</h5>
                <h6>wedw {code}{data.productPrice}</h6>
                {renderStock()}
                {data.productStock > 0 ? (
                    <button onClick={() => props.btnClick(data.productId)}>
                        Add to Cart
                    </button>
                ) : null}
            </div>
        </Card >
    );
}
export default Product;

{/* used as wrapper component <div style={{ color }} className="card"> */ }
