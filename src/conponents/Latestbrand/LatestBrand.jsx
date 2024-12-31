import Marquee from "react-fast-marquee";
import 'animate.css';
import { Link } from "react-router-dom";
import image1 from "../../assets/alibaba.png"
import image2 from "../../assets/daraz.png"
import image3 from "../../assets/project3.jpg"
import image4 from "../../assets/project4.jpg"
import image5 from "../../assets/project5.jpg"
import image6 from "../../assets/project6.jpg"
import image7 from "../../assets/project7.jpg"
import image8 from "../../assets/project8.jpg"

const LatestBrand = () => {
    return (
        <div className="mx-auto mt-10">
            <div>
                <h3 className="animate__animated animate__backInDown text-center text-[#225f6a] font-bold justify-center text-5xl">Top Brand</h3>
                <p className='animate__animated text-center justify-center text-2xl font-medium text-[#6a2246] mt-3 animate__fadeInBottomRight'>Explore More And Enjoy More! So it's Time Now Just do it</p>
            </div>
            <div className="bg-[#225f6a] h-[200px] rounded-lg mt-10">
               <Marquee pauseOnHover className="">
                <Link to="/brands"><img className="h-[200px]" src={image1} alt="" /></Link>
                <Link to="/brands"><img className="h-[200px]" src={image2} alt="" /></Link>
                <Link to="/brands"><img className="h-[200px]" src={image3} alt="" /></Link>
                <Link to="/brands"><img className="h-[200px]" src={image4} alt="" /></Link>
                <Link to="/brands"><img className="h-[200px]" src={image5} alt="" /></Link>
                <Link to="/brands"><img className="h-[200px]" src={image6} alt="" /></Link>
                <Link to="/brands"><img className="h-[200px]" src={image7} alt="" /></Link>
                <Link to="/brands"><img className="h-[200px]" src={image8} alt="" /></Link>
               </Marquee>
            </div>
        </div>
    );
};

export default LatestBrand;