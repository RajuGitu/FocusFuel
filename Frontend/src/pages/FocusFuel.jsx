import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../Components/common/Nav";

const FocusFuel = () => {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const isAuthenticated = !!localStorage.getItem("userId");
    //     if (!isAuthenticated) {
    //         alert("Please login first!");
    //         navigate("/", { replace: true });
    //     }
    // }, [navigate]);

    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
};

export default FocusFuel;
