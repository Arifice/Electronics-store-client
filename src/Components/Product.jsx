import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { FaCartPlus } from "react-icons/fa";
import {  useEffect, useState } from "react";
import DiscountOffer from "./DiscountOffer";

const Product = () => {
    const loadedProducts=useLoaderData(); 
    const [products,setProducts]=useState(loadedProducts);

    console.log('load products',products);

    const [dbCart,setDbCart]=useState([]);

   useEffect(()=>{
        fetch("https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/cart")
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setDbCart(data);
            })
   },[])
    console.log('dbcart',dbCart);
   

    const handleAddtoCart=(id)=>{
        const findProduct=products.filter(product=>product._id===id);
        
        const {_id,brandName,image,productName,price,description}=findProduct[0];  
        const cartProduct={_id,brandName,image,productName,price,description};           
        console.log('find product',findProduct);          
        console.log('cart product',cartProduct);  
        
        const selectcart=dbCart.filter(cart=>cart._id==id);
        console.log('select cart',selectcart);
        if(selectcart.length>0){
            Swal.fire({
                title: "woarning",
                text: "Your have already added to the cart.",
                icon: "worning"
              });
              return;
        }
        fetch('https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/cart',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(cartProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){                
                Swal.fire({
                    title: "Success",
                    text: "Your product successfully added to the cart.",
                    icon: "success"
                  });
            }
        })
        }         
        
           
      
    const handleDelete=_id=>{
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
                    const remainigProducts=products.filter(product=>product._id !=_id)
                    setProducts(remainigProducts);
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map(product=>(
                        <div key={product._id}>
                            <div className="card  bg-white border-2 border-teal-500  shadow-xl">
                                <figure><img className="p-5 w-full h-64 " src={product?.image}  /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-3xl font-semibold"> Name: {product?.productName}              
                                        <div className="badge badge-secondary text-xl py-3 font-semibold ">New</div>
                                        <div onClick={()=>handleAddtoCart(product._id)} className="btn btn-ghost text-2xl btn-outline font-semibold "><FaCartPlus></FaCartPlus></div>
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
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;