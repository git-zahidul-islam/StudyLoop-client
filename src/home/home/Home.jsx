import Banner from "../banner/Banner";
import Faq from "../faq/Faq";


const Home = () => {
    return (
        <div>
            <div className="bg-[#FFF8E3]">
                <Banner></Banner>
            </div>
            <div className="min-h-96 bg-slate-50">
                <h1>feature section [here have some card]....</h1>
            </div>
            <div className="">
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;