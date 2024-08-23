import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function Demo() {
    // return <h1>H1 Document</h1>
    const name = "mike";
    const [count, setCount] = useState(0);
    const [data, setData] = useState("");
    useEffect(() => {
        const socket = io("ws://localhost:3002");
        socket.on("Server-data", (data) => {
            setData(data.message);
        })
        //unmounting
        return () => {
            socket.off("server-data")
        };
    }, [count])

    return (
        <div>
            <h1>testing - {data}</h1>
            <p>some more content</p>
            <p>{name}</p>
            <p>{name.toUpperCase()}</p>
            <p>{8 + 9}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>H1 Document</h1>
        </div>
    )
}
export default Demo;