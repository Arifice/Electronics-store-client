import Marquee from "react-fast-marquee";

const Offer = () => {
    return (
       
        <div className="flex bg-[#5F0F40] py-4">
            <div>
                <span className="bg-[#FF9800] p-3 text-white rounded-r-xl text-4xl font-semibold">Offer</span>
            </div>
            
            <Marquee speed={150} pauseOnHover={true} className="text-3xl text-white ">
                    <p><span className="ml-20">30% Discount for New Year & up to 50% Discount on 20K shoping. Use promo code</span> </p>
            </Marquee>
        </div>
    );
};

export default Offer;