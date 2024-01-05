
const DiscountOffer = () => {
    return (
        <div className="flex bg-[#F9F6E2] mb-12 flex-col-reverse lg:flex-row  justify-center items-center">
        <div className=" text-center">
            <p className="text-3xl mb-6">---SALE FEVER---</p>
            <h1 className="text-6xl font-bold">Purchase TK 200K or <br></br> above & get <span className="text-[#E527B2]">20% off</span></h1>
            <div className="flex flex-col md:flex-row lg:flex-row gap-8 justify-center mt-5 items-center">
                <p className="text-2xl">Use Promo Code</p>
                <button className="text-2xl text-white rounded-md py-1 px-3 bg-[#E527B2]">2024</button>
            </div>
        </div>
        <div className="">
           <img className="w-full" src="https://i.postimg.cc/ZY6r9w74/imageedit-5-3216836373.png" alt="" />
        </div>
        </div>
    );
};

export default DiscountOffer;