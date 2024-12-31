// import { NavLink } from "react-router-dom";
// import { FcRating } from "react-icons/fc";

// const CardDetails = ({ card }) => {
//     console.log(card)

//     return (
//         <div className="text-center justify-center items-center">
//             <div className="card bg-base-100 w-96 h-[600px] shadow-xl">
//                 <figure>
//                     <img className="h-[300px] w-full"
//                         src={card.brand_logo}
//                         alt="Shoes" />
//                 </figure>
//                 <div className="card-body">
//                     <h2 className="card-title text-center flex justify-center items-center">
//                         {card.brand_name}
//                         <div className="badge bg-[#6a2246] text-white">{card.category}</div>
//                     </h2>
//                     <p className="mt-5 mb-3 font-medium text-[#225f6a]">Coupons is Available Now</p>
//                     <p className="text-sm text-gray-500 opacity-7">{card.code}</p>
//                     <p className="text-sm text-gray-500 opacity-7">{card.description}</p>
//                     {card.isSaleOn && (
//                         <p className="text-xl text-red-500 font-bold animate-bounce">
//                             SALE IS ON
//                         </p>
//                     )}
//                     <p className="text-sm text-gray-500 opacity-7">{card.expiry_date}</p>
//                     <div className="mt-5 flex justify-between gap-20 font-medium text-xl items-center">
//                         <div className="flex items-center gap-3 justify-start">
//                             <FcRating />
//                             <p className="text-start">{card.rating}</p>
//                         </div>
//                         <div className="gap-5">
//                             <NavLink to={`/product/${card._id}`} className="btn bg-[#225f6a] rounded-full border-2 border-[#6a2246] text-white">View Coupons</NavLink>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CardDetails;

import { NavLink } from "react-router-dom";
import { FcRating } from "react-icons/fc";

const CardDetails = ({ card }) => {
    return (
        <div className="text-center justify-center items-center">
            {/* Card Container */}
            <div className="card bg-base-100 w-[300px] md:w-[350px] lg:w-[400px] max-w-sm h-[600px] shadow-xl mx-auto">
                {/* Card Image */}
                <figure>
                    <img
                        className="h-[300px] w-full object-cover"
                        src={card.brand_logo}
                        alt={card.brand_name}
                    />
                </figure>

                {/* Card Body */}
                <div className="card-body p-5">
                    {/* Title and Category Badge */}
                    <h2 className="card-title text-lg font-bold text-center flex justify-center items-center">
                        {card.brand_name}
                        <div className="badge bg-[#6a2246] text-white ml-2">
                            {card.category}
                        </div>
                    </h2>

                    {/* Description */}
                    <p className="mt-5 mb-3 font-medium text-[#225f6a]">
                        Coupons Available Now
                    </p>
                    <p className="text-sm text-gray-500">{card.code}</p>
                    <p className="text-sm text-gray-500">{card.description}</p>

                    {/* Sale Indicator */}
                    {card.isSaleOn && (
                        <p className="text-xl text-red-500 font-bold animate-bounce">
                            SALE IS ON
                        </p>
                    )}

                    {/* Expiry Date */}
                    <p className="text-sm text-gray-500">Expiry: {card.expiry_date}</p>

                    {/* Footer Section */}
                    <div className="mt-5 flex justify-between items-center gap-5">
                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <FcRating />
                            <p>{card.rating}</p>
                        </div>

                        {/* View Coupons Button */}
                        <NavLink
                            to={`/product/${card._id}`}
                            className="btn bg-[#225f6a] hover:bg-[#183d44] rounded-full border-2 border-[#6a2246] text-white"
                        >
                            View Coupons
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
