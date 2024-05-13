import Banner from "../banner/Banner";
import Faq from "../faq/Faq";
// import Feature from "../feature/Feature";


const Home = () => {
    return (
        <div className="space-y-10">
            <div className="bg-[#FFF8E3]">
                <Banner></Banner>
            </div>
            <div className="min-h-96">
                <h1>this is feature section</h1>
                {/* <Feature></Feature> */}
            </div>
            <div className="">
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;