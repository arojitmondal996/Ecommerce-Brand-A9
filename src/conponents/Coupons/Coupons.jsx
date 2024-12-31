import { useLoaderData } from "react-router-dom";
import Coupon from "../Coupon/Coupon";

const Coupons = () => {
    const cards = useLoaderData();
    console.log(cards)
    return (
        <div>
            {
                cards.map(card=> <Coupon card={card}></Coupon>)
            }
        </div>
    );
};

export default Coupons;