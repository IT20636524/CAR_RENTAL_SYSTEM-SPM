
const Logout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("access_token")
    window.location.href = "/";

    return (
        <></>
    )

}

export default Logout;