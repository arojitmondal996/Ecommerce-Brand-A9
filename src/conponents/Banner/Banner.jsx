// import React from 'react';
// import bannerImage1 from "../../assets/banner1.jpg"
// import bannerImage2 from "../../assets/banner2.jpg"
// import bannerImage3 from "../../assets/banner3.jpg"
// import bannerImage4 from "../../assets/banner4.jpg"

// const Banner = () => {
//     return (
//         <div>
//             <div className="carousel w-full">
//                 <div id="slide1" className="carousel-item relative h-[300px] lg:h-[500px] w-full">
//                 {/* <h1 className='text-[#36103b] justify-center mt-52 ml-72 absolute font-bold text-5xl text-center'>Get Star With Best <br /> <span>Service Explore it more to know</span></h1> */}
//                     <img
//                         src={bannerImage1}
//                         className="w-full" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide4" className="btn btn-circle">❮</a>
//                         <a href="#slide2" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide2" className="carousel-item relative h-[300px] lg:h-[500px] w-full">
//                     <img
//                         src={bannerImage2}
//                         className="w-full" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide1" className="btn btn-circle">❮</a>
//                         <a href="#slide3" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide3" className="carousel-item relative h-[300px] lg:h-[500px] w-full">
//                     <img
//                         src={bannerImage3}
//                         className="w-full" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide2" className="btn btn-circle">❮</a>
//                         <a href="#slide4" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//                 <div id="slide4" className="carousel-item relative h-[300px] lg:h-[500px] w-full">
//                     <img
//                         src={bannerImage4}
//                         className="w-full" />
//                     <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                         <a href="#slide3" className="btn btn-circle">❮</a>
//                         <a href="#slide1" className="btn btn-circle">❯</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;

import React from "react";
import bannerImage1 from "../../assets/banner1.jpg";
import bannerImage2 from "../../assets/banner2.jpg";
import bannerImage3 from "../../assets/banner3.jpg";
import bannerImage4 from "../../assets/banner4.jpg";

const Banner = () => {
    return (
        <div className="mx-auto">
            <div className="carousel w-full max-w-full">
                {/* Slide 1 */}
                <div
                    id="slide1"
                    className="carousel-item relative h-[300px] md:h-[400px] lg:h-[500px] w-full"
                >
                    <img
                        src={bannerImage1}
                        alt="Banner 1"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle bg-opacity-70">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle bg-opacity-70">
                            ❯
                        </a>
                    </div>
                </div>

                {/* Slide 2 */}
                <div
                    id="slide2"
                    className="carousel-item relative h-[300px] md:h-[400px] lg:h-[500px] w-full"
                >
                    <img
                        src={bannerImage2}
                        alt="Banner 2"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle bg-opacity-70">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle bg-opacity-70">
                            ❯
                        </a>
                    </div>
                </div>

                {/* Slide 3 */}
                <div
                    id="slide3"
                    className="carousel-item relative h-[300px] md:h-[400px] lg:h-[500px] w-full"
                >
                    <img
                        src={bannerImage3}
                        alt="Banner 3"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle bg-opacity-70">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle bg-opacity-70">
                            ❯
                        </a>
                    </div>
                </div>

                {/* Slide 4 */}
                <div
                    id="slide4"
                    className="carousel-item relative h-[300px] md:h-[400px] lg:h-[500px] w-full"
                >
                    <img
                        src={bannerImage4}
                        alt="Banner 4"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle bg-opacity-70">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle bg-opacity-70">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
