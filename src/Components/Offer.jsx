import Marquee from "react-fast-marquee";

const Offer = () => {
    return (
       
        <div className="flex bg-[#5F0F40] py-4">
            <div>
                <span className="bg-[#FF9800] p-3 text-white rounded-r-xl text-4xl font-semibold">Offer</span>
            </div>
            
            <Marquee speed={150} pauseOnHover={true} className="text-3xl text-white ">
                    <p><span className="ml-20">*** Happy New Year 2024 *** Celebrate New Year with 20% Discount. Purchase 200k or above & get 20% OFF ***</span> <span className="ml-20">*** Happy New Year 2024 *** Celebrate New Year with 20% Discount. Purchase 200k or above & get 20% OFF ***</span> <span className="ml-20">*** Happy New Year 2024 *** Celebrate New Year with 20% Discount. Purchase 200k or above & get 20% OFF ***</span> <span className="ml-20">*** Happy New Year 2024 *** Celebrate New Year with 20% Discount. Purchase 200k or above & get 20% OFF ***</span></p>
            </Marquee>
        </div>
    );
};

export default Offer;