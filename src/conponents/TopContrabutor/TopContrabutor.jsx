import image from "../../assets/Mark Zuckerberg.jpeg"
import image2 from "../../assets/Elon Mask.jpg"
import image3 from "../../assets/Jack Ma.jpg"


const TopContrabutor = () => {
    return (
        <>
            <h1 className="text-5xl font-bold text-center text-[#225f6a] mt-16 mb-5">Top Contributor in The Whole World</h1>
            <div className="grid grid-cols-1 ml-14 items-center md:grid-cols-2 lg:grid-cols-3 mb-10">
                <div className="card h-[300] rounded-full w-72 md:w-72 lg:w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={image}
                            alt="Shoes"
                            className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mark Zuckerberg</h2>
                    </div>
                </div>
                <div className="card h-[300] rounded-full w-72 md:w-72 lg:w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={image2}
                            alt="Shoes"
                            className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Elon Mask</h2>
                    </div>
                </div>
                <div className="card h-[300] rounded-full w-72 md:w-72 lg:w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={image3}
                            alt="Shoes"
                            className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Jack Ma</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopContrabutor;