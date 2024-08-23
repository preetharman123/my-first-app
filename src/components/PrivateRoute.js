import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
    //const isLoggedIn = true; //redux/context api
    const isLoggedIn = useSelector((store) => !!store.user);
    if (!isLoggedIn) {
        return <Navigate to={"/login"} />;
    }
    return props.children;
}

export default PrivateRoute;