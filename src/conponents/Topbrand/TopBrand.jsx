import image from "../../assets/alibaba.png";

const TopBrand = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="hero bg-[#225f6a] min-h-screen rounded-3xl p-4 lg:p-8">
                <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    {/* Image Section */}
                    <img
                        src={image}
                        alt="Alibaba"
                        className="w-full max-w-xs md:max-w-md lg:max-w-sm rounded-lg shadow-2xl"
                    />

                    {/* Text Section */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold text-white">
                            Alibaba
                        </h1>
                        <p className="py-4 md:py-6 text-white text-base md:text-lg">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                            et a id nisi.
                        </p>
                        <button className="btn bg-[#6a2246] text-white hover:bg-[#a62a65] px-6 py-2 rounded-full">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBrand;
