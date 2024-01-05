import { useLoaderData } from "react-router-dom";
import Bannar from "./Bannar";
import Products from "./Products";




const Home = () => {
    const products=useLoaderData();
    return (
        <div>
            <Bannar></Bannar>
            <div className="flex bg-[#F9F6E2] my-12 flex-col-reverse py-10 justify-center items-center">
            <div className=" text-center">
                <p className="text-3xl mb-6">---SALE FEVER---</p>
                <h1 className="text-6xl font-bold">Purchase TK 200K or <br></br> above & get <span className="text-[#E527B2]">20% off</span></h1>
                <div className="flex flex-col md:flex-row lg:flex-row gap-8 justify-center mt-5 items-center">
                    <p className="text-2xl">Use Promo Code</p>
                    <button className="text-2xl text-white rounded-md py-1 px-3 bg-[#E527B2]">2024</button>
                </div>
            </div>
            <div className="">
               <img className="w-full" src="https://i.postimg.cc/XqSWmTHq/original-120ddeb8f411f7d56e67a705a659c8c8.jpg" alt="" />
            </div>
            </div>

           <h1 className="text-center text-7xl font-bold bg-white text-purple-600  my-10">Feature Products</h1>
            <div className="grid grid-cols-3 gap-8 my-12">
                {
                    products.map(product=> <Products key={product._id} product={product}></Products>)
                }
            </div>
            
            
        </div>
    );
};

export default Home;