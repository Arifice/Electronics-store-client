
import { Link } from "react-router-dom";



const Brand = ({brand}) => {
    const {name,image}=brand;
    return (
        <div>
            <Link to={`/category/${name}`}>
                <div  className="border flex justify-center  m-4 gap-8 items-center border-black p-5">
                <figure><img  className="w-20 h-20" src={image} alt="" /></figure>
                <h1 className="text-5xl font-bold">{name}</h1>                          
                </div>                
            </Link>
        </div>
        
    );
};

export default Brand;