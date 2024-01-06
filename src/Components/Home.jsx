import { Link, useLoaderData, useNavigate } from "react-router-dom";
import DiscountOffer from "./DiscountOffer";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
    const loadedProducts=useLoaderData();
    const {user}=useContext(AuthContext);
    console.log('home',user);
    const[products,setProducts]=useState(loadedProducts);
    const navigate=useNavigate();
    
      const handleDelete = _id =>{
        if(!user){
            navigate('/login');
            return;
        }
          console.log(_id);
          Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
                
                fetch(`https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/product/${_id}`,{
                  method:'DELETE'                
                })
                .then(res=>res.json())
                .then(data=>{
                  console.log(data);
                  if(data.deletedCount>0){
                    const remainingProducts=products.filter(product=>product._id !=_id);
                    setProducts(remainingProducts);
                      Swal.fire({
                          title: "Deleted!",
                          text: "Your product has been deleted.",
                          icon: "success"
                        });                        
                  }
                })
              }
            });
  
      }

    return (
        <div>            
            <DiscountOffer></DiscountOffer>

           <h1 className="text-center text-7xl font-bold bg-white text-purple-600  my-10">Feature Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                {
                    products.map(product=> (
                        <div key={product._id} className="card  bg-white border-2 border-teal-500  shadow-xl">
                        <figure><img className="p-5 w-full " src={product?.image}  /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold"> Name: {product?.productName}              
                                <div className="badge badge-secondary text-xl py-3 font-semibold ">New</div>
                            </h2>
                            <div className="my-1 text-3xl font-semibold">                    
                                <p className="  ">Brand : {product?.brandName}</p>
                                <p className="">Price : {product?.price} Tk</p>
                                <p className=" ">Category: {product?.type}</p>
                            </div>
                        
                            <div className="rating flex justify-center rating-lg mt-2 ">
                                <div className="rating gap-1">
                                        <input type="radio" name={product?._id} className="mask mask-heart bg-red-400" />
                                        <input type="radio" name={product?._id} className="mask mask-heart bg-orange-400" />
                                        <input type="radio" name={product?._id} className="mask mask-heart bg-yellow-400" />
                                        <input type="radio" name={product?._id} className="mask mask-heart bg-lime-400"checked  />
                                        <input type="radio" name={product?._id} className="mask mask-heart bg-green-400" />
                                        <input type="radio" name={product?._id} className="mask mask-heart bg-purple-400" />
                                        <input type="radio" name={product?._id} className="mask mask-heart bg-teal-400" />
                                </div>
                            </div>
                            <p className="text-justify text-sm p-3 bg-[#756AB6] rounded-lg text-white">{product?.description.slice(0,100)}</p>
                            <div className="card-actions justify-end">
                            <div className="btn btn-ghost text-2xl  btn-outline"><Link to={`/updateProduct/${product?._id}`}>Edit</Link></div> 
                            <div onClick={()=>handleDelete(product?._id)} className="btn btn-primary text-2xl  btn-outline">Delete</div> 
                            <div  className="btn btn-secondary text-2xl  btn-outline"><Link to={`/details/${product?._id}`}>Details</Link></div>
                            </div>
                        
                        </div>
                        </div>
                    ))
                }
            </div>
            
            
        </div>
    );
};

export default Home;