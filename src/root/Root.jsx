import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/footer/Footer";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-336px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;