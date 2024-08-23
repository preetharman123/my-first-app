
import Axios from "axios";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { createSession } from "../store/slices/userSlice";

function useLogin() {
  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const login = async (data) => {
    try {
        const res = await Axios.post("http://localhost:5000/auth/login", data);
        dispatch(createSession(res.data));
        navigate("/");
        console.log(res);
    } catch(e) {
        console.log(e);
    }
  }
  return login;
}

export default useLogin;