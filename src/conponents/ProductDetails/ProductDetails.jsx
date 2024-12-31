import { NavLink, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcRating } from "react-icons/fc";

const ProductDetails = () => {
    const data = useLoaderData();
    const { code, description, expiry_date } = data.coupons[0];

    return (
        <div className="bg-teal-800 w-[350px] md:w-[550px] lg:w-[800px] p-5 lg:p-10 rounded-2xl flex flex-col lg:flex-row justify-center items-center mt-10 mb-10 mx-auto max-w-4xl">
            <ToastContainer />
            {/* Brand Image */}
            <div className="mb-5 lg:mb-0">
                <img
                    className="h-40 w-40 lg:w-80 lg:h-60 rounded-xl object-cover"
                    src={data.brand_logo}
                    alt={data.brand_name}
                />
            </div>

            {/* Product Details */}
            <div className="lg:ml-5 w-full">
                {/* Title and Rating */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-5">
                    <h1 className="text-2xl lg:text-4xl text-white font-bold text-center lg:text-left">
                        {data.brand_name}
                    </h1>
                    <div className="flex items-center text-center gap-3">
                        <FcRating size={28} />
                        <p className="text-xl text-white font-bold">{data.rating}</p>
                    </div>
                </div>

                {/* Description and Expiry Date */}
                <div className="mb-5 flex justify-start md:gap-10 gap-2">
                    <p className="text-white mb-3">{description}</p>
                    <p className="text-white font-medium">Expires on: {expiry_date}</p>
                </div>

                {/* Coupon Code and Actions */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(code).then(() => {
                                toast.success("Code copied successfully!");
                            });
                        }}
                        className="btn btn-teal text-lg font-bold px-6 py-2 rounded-3xl"
                    >
                        {code}
                    </button>
                    <a href={data.shop_Link} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-warning px-6 py-2 rounded-3xl">
                            Use Now
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
