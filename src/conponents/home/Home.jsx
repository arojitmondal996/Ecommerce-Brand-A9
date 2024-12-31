import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import LatestBrand from "../Latestbrand/LatestBrand";
import BrandCards from "../BrandCard/BrandCards";
import TopBrand from "../Topbrand/TopBrand";
import TopContrabutor from "../TopContrabutor/TopContrabutor";

const Home = () => {
    const products = useLoaderData()
    return (
        <div className="font-poppins">
            <Banner/>
            <LatestBrand/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:ml-5 lg:ml-10 mt-16 mb-16 gap-5">
                {
                    products.map(product=> <BrandCards product={product}></BrandCards>)
                }
            </div>
            <TopBrand/>
            <TopContrabutor/>
        </div>
    );
};

export default Home;