function Checkout() {

    const saveData = (e) => {
        e.preventDefault();
        console.log("form sibmission logic here");
    }
    return (
        <form onSubmit={(ev) => saveData(ev)}>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="email" />
            <button type="submit">submit</button>
        </form>
    )
}

export default Checkout;