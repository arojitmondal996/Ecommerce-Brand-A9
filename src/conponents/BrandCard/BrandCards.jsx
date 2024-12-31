// import { NavLink } from "react-router-dom";
// import 'animate.css';

// const BrandCards = ({ product }) => {
//     console.log(product)
//     return (
//         <>
//             <div className="card bg-base-100 w-96 shadow-xl">
//                 <figure>
//                     <img className="h-[300px] w-full"
//                         src={product.brand_logo}
//                         alt="Shoes" />
//                 </figure>
//                 <div className="card-body">
//                     <h2 className="card-title">
//                         {product.brand_name}
//                         <div className="badge bg-[#6a2246] text-white">{product.category}</div>
//                     </h2>
//                     <p className="mt-5 mb-3 font-medium text-[#225f6a]">Coupons is Available Now</p>
//                     <p className="text-sm text-gray-500 opacity-7">{product.code}</p>
//                     <p className="text-sm text-gray-500 opacity-7">{product.description}</p>
//                     <p className="text-sm text-gray-500 opacity-7">Total Coupons: {product.coupons.length}</p>
//                     <NavLink to="/details" className="mt-5">
//                         <NavLink to={`/product/${product._id}`} className="btn bg-[#225f6a] rounded-full border-2 border-[#6a2246] text-white">View Details</NavLink>
//                     </NavLink>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BrandCards;
import { NavLink } from "react-router-dom";
import "animate.css";

const BrandCards = ({ product }) => {
    return (
        <div className="card bg-base-100 w-[330px] lg:w-[400px] md:w-[340px] shadow-xl mx-auto">
            {/* Image */}
            <figure>
                <img
                    className="h-64 w-full object-cover rounded-t-lg"
                    src={product.brand_logo}
                    alt={product.brand_name}
                />
            </figure>

            {/* Card Body */}
            <div className="card-body p-5">
                {/* Title */}
                <h2 className="card-title text-lg font-bold text-[#225f6a]">
                    {product.brand_name}
                    <div className="badge bg-[#6a2246] text-white ml-2">
                        {product.category}
                    </div>
                </h2>

                {/* Description */}
                <p className="mt-3 mb-3 text-sm font-medium text-[#225f6a]">
                    Coupons Available Now
                </p>
                <p className="text-sm text-gray-500">{product.code}</p>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="text-sm text-gray-500">
                    Total Coupons: {product.coupons.length}
                </p>

                {/* View Details Button */}
                <div className="mt-5">
                    <NavLink
                        to={`/product/${product._id}`}
                        className="btn bg-[#225f6a] hover:bg-[#183d44] rounded-full border-2 border-[#6a2246] text-white w-full"
                    >
                        View Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default BrandCards;
