import {  useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";



const MyCart = () => {
    
    const loadedCarts = useLoaderData();
    const [carts, setCarts] = useState(loadedCarts); 
    const [code,setCode]=useState(null);  
    
    
    console.log(code);
    
    const handleDeleteCart=id=>{
        console.log(id);
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
                fetch(`https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/cart/${id}`, {
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount > 0){
                        const remainingCart=carts.filter(cart=>cart._id !=id);
                        const deletedProduct=carts.filter(product=>product._id==id);
                        const deletedPrice=deletedProduct.map(product=>product.price);
                        setCarts(remainingCart);
                        console.log('deleted price',deletedPrice);
                        totalPrice=totalPrice-parseFloat(deletedPrice);
                       
                        setfinalprice(totalPrice);
                        console.log('updateprice',totalPrice);
                        
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })              
            }
          });
    }

    let totalPrice=0;
    carts.forEach(cart=>{
        totalPrice+=parseFloat(cart.price);
    })
    console.log(totalPrice);
    const [finalPrice,setfinalprice]=useState(totalPrice);
    const discount=parseFloat(totalPrice)*.2;
    
    const handleApply=(e)=>{
        e.preventDefault();
        const form=e.target;
        const promoCode=form.promoCode.value;
        setCode(promoCode);
        console.log(promoCode);
        form.reset();
        if(promoCode==='2024'){            
            totalPrice=parseFloat(totalPrice)-discount;
            console.log('total',totalPrice);
            setfinalprice(totalPrice)
        }
    }
    const handleMakePurchase=()=>{ 
        fetch('https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/cart',{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })      
        Swal.fire({
            title: "Thank You",
            text: "Your have successfully purchased.",
            icon: "success"
          });
    }


    return (
        <div className="bg-[#F9F6E2]">
            <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-between items-center">
            <div className=" text-center">
                <p className="text-3xl mb-6">---SALE FEVER---</p>
                <h1 className="text-6xl font-bold">Purchase <span className="text-[#7c1fd3]">TK 200K</span> or <br></br> above & get <span className="text-[#E527B2]">20% off</span></h1>
                <div className="flex flex-col md:flex-row lg:flex-row gap-8 justify-center mt-5 items-center">
                    <p className="text-2xl">Use Promo Code</p>
                    <button className="text-2xl text-white rounded-md py-1 px-3 bg-[#E527B2]">2024</button>
                </div>
            </div>
            <div >
               <img className="w-96 h-96" src="https://i.postimg.cc/MTK4TSTv/imageedit-2-6578762515.png" alt="" />
            </div>
            </div>
            
            <div className="p-8 overflow-x-auto">
                <table className="table ">
                    <caption className="text-5xl font-bold text-black">Cart Information</caption>
                    {/* head */}
                    <thead className="lg:text-3xl  font-bold text-center text-black">
                        <tr className="border-2 border-black">
                            <th className="border-2 border-black">SL</th>
                            <th className="border-2 border-black">Image</th>
                            <th className="border-2 border-black">Name</th>
                            <th className="border-2 border-black">Brand</th>
                            <th className="border-2 border-black">Categoiry</th>
                            <th className="border-2 border-black">Price</th>
                            <th className="border-2 border-black">Action</th>
                        </tr>
                    </thead>
                    {
                        carts.map((cart, idx) => (
                            <tbody key={idx}>
                                <tr className=" text-center text-black border-2 border-black">
                                    <th className="border-2 lg:text-2xl font-semibold  border-black">{idx + 1}</th>
                                    <td className="border-2 lg:text-2xl font-semibold border-black"><img className="w-20 h-20" src={cart?.image} alt="" /></td>
                                    <td className="border-2 lg:text-2xl font-semibold border-black">{cart?.productName}</td>
                                    <td className="border-2 lg:text-2xl font-semibold border-black">{cart?.brandName}</td>
                                    <td className="border-2 lg:text-2xl font-semibold border-black">{cart?.type}</td>
                                    <td className="border-2 lg:text-2xl font-semibold border-black">{cart?.price}</td>
                                    <td className="border-2 lg:text-2xl font-semibold border-black"><button onClick={()=>handleDeleteCart(cart._id)} className="bg-[#FAEF5D] btn btn-ghost btn-outline">X</button></td>
                                </tr>
                            </tbody>                                                       
                        ))
                    }

                </table>                               
            </div>
            <div className="border border-black m-2 p-2 lg:m-10 lg:p-10">
                <h1 className="text-5xl text-center font-semibold underline my-12">Payment section</h1> 
                
                <h1 className="lg:text-3xl text-xl text-right font-semibold my-12">FOR <span className="text-[#E527B2]">20% DISCOUNT</span> USE PROMO CODE: <span className="bg-[#549420] p-1 rounded-lg text-white">2024</span></h1> 
                <form onSubmit={handleApply} className={`${totalPrice>200000?'visible':'hidden'} flex justify-end items-center m-4 p-4 my-2`}>
                    <input type="text" name="promoCode" className="lg:p-4 p-3 border border-black lg:text-3xl" placeholder="promo code" />
                    <input type="submit" value={'Apply'} className=" lg:text-3xl text-xl font-semibold text-white bg-secondary rounded-r-lg p-4" />
                </form>
                {
                    carts.map((cart,idx)=>(
                        <div key={idx} className="lg:text-4xl   space-y-2 lg:font-semibold text-black ">
                            <div className="flex justify-between lg:pl-10 items-center">
                                <div>
                                    <p><span >{idx+1}. {cart.productName}, {cart.brandName}  </span>  </p>
                                </div>
                                <div>
                                    <span >price = {cart.price} Tk</span>
                                </div>
                            </div>
                        </div>
                    ))
                } 
                <hr className="border  border-black my-3" />
                <p className="lg:text-4xl font-semibold text-black my-3 text-right">Total price = {totalPrice} Tk</p>
                <p className={`${code==='2024'&& totalPrice>200000?'visible':'hidden'} lg:text-4xl font-semibold text-black my-3 text-right`}>Discount = {discount} Tk</p>
                <hr className="border border-black my-3" />
                <p className="lg:text-4xl font-semibold text-black my-3 text-right">Total  = {finalPrice} Tk</p>   
                <div className="flex justify-end my-4">
                    <Link to={'/'}><button onClick={handleMakePurchase} className="btn btn-secondary   lg:text-3xl"><BiSolidPurchaseTagAlt></BiSolidPurchaseTagAlt> Make purcase</button>    </Link>  
                </div>
                
            </div>
        </div>
    );
};

export default MyCart;