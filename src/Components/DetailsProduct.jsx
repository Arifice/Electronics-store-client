import {  useLoaderData, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const DetailsProduct = () => {
    const product=useLoaderData();
    const {productName,image,brandName,type,price,description,_id}=product;
    const navigate=useNavigate();    

    const handleGoback=()=>{
        navigate(-1);
    }
    const [dbCart,setDbCart]=useState([]);

    useEffect(()=>{
          fetch("https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/cart")
              .then(res=>res.json())
              .then(data=>{
                  console.log(data);
                  setDbCart(data);
              })
    },[])


    const handleAddToCart=(id)=>{
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
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Product is successfully added to the cart",        
                })
            }
        })
    }
    
    return (
       <div className="flex justify-center my-24">
            <div className="card   border-2   shadow-xl">
                <figure><img className="p-5 w-full  " src={image}  /></figure>
                <div className="card-body">
                    <h2 className="card-title m-4 text-2xl lg:text-5xl font-bold"> Name: {productName}              
                        <div className="badge badge-secondary text-xl lg:text-3xl p-5 font-semibold ">New</div>
                    </h2>
                    <div className=" flex  justify-between">                    
                        <p className="bg-[#FF9800] text-center  lg:text-3xl p-2 lg:p-5 mr-2 text-white rounded-lg font-semibold">Brand : {brandName}</p>
                        <p className="bg-[#186F65] text-center lg:text-3xl p-2 lg:p-5 ml-2 text-white rounded-lg font-semibold">Price : {price} Tk</p>
                        
                    </div>
                    <div className="flex justify-between">
                        <p className="bg-[#860A35] text-center p-1 lg:p-5 text-xl lg:text-3xl text-white rounded-md font-semibold">Category: {type}</p>
                    </div>
                    <div className="rating flex justify-center rating-lg m-5 ">
                        <div className="rating gap-1">
                            <input type="radio" name={_id} className="mask mask-heart bg-red-400" />
                            <input type="radio" name={_id} className="mask mask-heart bg-orange-400" />
                            <input type="radio" name={_id} className="mask mask-heart bg-yellow-400" />
                            <input type="radio" name={_id} className="mask mask-heart bg-lime-400"checked  />
                            <input type="radio" name={_id} className="mask mask-heart bg-green-400" />
                            <input type="radio" name={_id} className="mask mask-heart bg-purple-400" />
                            <input type="radio" name={_id} className="mask mask-heart bg-teal-400" />
                        </div>
                    </div>
                    <p className="text-justify  lg:text-3xl bg-[#756AB6] rounded-lg text-white p-5">{description}</p>
                    <div className="flex justify-center">
                    <button onClick={()=>handleAddToCart(_id)} className="btn btn-success m-5  btn-outline lg:text-4xl "><FaCartPlus></FaCartPlus>Add to Cart</button> 
                    <button onClick={handleGoback} className="btn btn-ghost m-5  btn-outline lg:text-4xl "><IoArrowBackCircle></IoArrowBackCircle>Go Back</button> 
                    
                    
                    </div>
                
                </div>
            </div>
       </div>
    );
};

export default DetailsProduct;