import Subscribe from "../../components/subscribe/Subscribe";
import SummeryStats from "../../components/summeryStats/SummeryStats";
import Banner from "../banner/Banner";
import Faq from "../faq/Faq";
import Feature from "../feature/Feature";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div className="space-y-10">
            <Helmet>
                <title>Study Loop | Home</title>
            </Helmet>
            <div className="bg-[#FFF8E3]">
                <Banner></Banner>
            </div>
            <div className="min-h-96">
                <Feature></Feature>
            </div>
            <div>
                <SummeryStats></SummeryStats>
            </div>
            <div className="">
                <Faq></Faq>
            </div>
            <div>
                <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default Home;