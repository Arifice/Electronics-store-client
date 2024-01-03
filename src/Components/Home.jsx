import { useLoaderData } from "react-router-dom";
import Bannar from "./Bannar";
import Products from "./Products";




const Home = () => {
    const products=useLoaderData();
    return (
        <div>
            <Bannar></Bannar>

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