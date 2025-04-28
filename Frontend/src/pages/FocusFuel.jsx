import { Outlet } from "react-router-dom";
import Nav from "../Components/common/Nav";

const FocusFuel = () => {
    return (
        <>
            <div>
                <Nav />
                <Outlet />
            </div>
        </>
    )
}

export default FocusFuel;