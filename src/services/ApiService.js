import Axios from "axios";

const AxiosInstance = Axios.create({
    baseURL: "http://locahost:5000"
})
AxiosInstance.interceptors.request.use((config) => {
    let data = localStorage.getItem("persist:@my-app");
    if (data) {
        data = jSON.parse(data);
        config.headers["Authorization"] = `Bearer ${JSON.parse(data.user)}`;
    }
    return config;
})