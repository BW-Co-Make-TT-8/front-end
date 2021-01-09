import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
    const { push } = useHistory();
    localStorage.clear();
    push("/login");
    return <h3>Logging out...</h3>;
}

export default Logout;