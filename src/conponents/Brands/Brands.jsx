// import { useLoaderData } from "react-router-dom";
// import CardDetails from "../CardDetails/CardDetails";

// const Brands = () => {
//     const cards = useLoaderData();
//     return (
//         <div className="min-h-screen">
//             <h1 className="text-center font-bold text-5xl mt-5 text-[#225f6a]">All Of Our Brands</h1>
//             <div className="justify-center items-center flex mt-8 ">
//                 <input className="bg-[#6a2246] w-8/12 rounded-full p-2 text-white" type="search" placeholder="Search here" name="" id="" />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 justify-center items-center text-center lg:ml-10 ml-3 gap-5 mb-10">
//                 {
//                     cards.map(card => <CardDetails card={card}></CardDetails>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Brands;

import { useLoaderData } from "react-router-dom";
import CardDetails from "../CardDetails/CardDetails";

const Brands = () => {
    const cards = useLoaderData();

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mt-5 text-[#225f6a]">
                    All Of Our Brands
                </h1>

                {/* Search Bar */}
                <div className="flex justify-center mt-8">
                    <input
                        className="w-[300px] md:w-8/12 lg:w-6/12 bg-[#6a2246] rounded-full p-3 text-white focus:outline-none"
                        type="search"
                        placeholder="Search here"
                    />
                </div>

                {/* Brands Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 text-center mb-10">
                    {cards.map((card) => (
                        <CardDetails key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Brands;
