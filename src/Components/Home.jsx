import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import DiscountOffer from "./DiscountOffer";




const Home = () => {
    const products=useLoaderData();
    return (
        <div>            
            <DiscountOffer></DiscountOffer>

           <h1 className="text-center text-7xl font-bold bg-white text-purple-600  my-10">Feature Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                {
                    products.map(product=> <Products key={product._id} product={product}></Products>)
                }
            </div>
            
            
        </div>
    );
};

export default Home;