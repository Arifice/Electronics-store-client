import { useContext } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Products = ({product}) => {  
  const {user}=useContext(AuthContext);
  const navigate=useNavigate();
    const {productName,image,brandName,type,price,description,_id}=product
    const handleDelete=_id=>{
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
        <div className="card  bg-white border-2 border-teal-500  shadow-xl">
            <figure><img className="p-5 w-full " src={image}  /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-semibold"> Name: {productName}              
                    <div className="badge badge-secondary text-xl py-3 font-semibold ">New</div>
                </h2>
                <div className=" flex  justify-between">                    
                    <p className="bg-[#FF9800] text-center p-2 mr-2 text-white rounded-md font-semibold">Brand : {brandName}</p>
                    <p className="bg-[#186F65] text-center p-2 ml-2 text-white rounded-md font-semibold">Price : {price} Tk</p>
                    
                </div>
                <div className="flex justify-between">
                    <p className="bg-[#860A35] text-center p-2  text-white rounded-md font-semibold">Category: {type}</p>
                </div>
                <div className="rating flex justify-center rating-lg mt-2 ">
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
                <p className="text-justify text-sm p-3 bg-[#756AB6] rounded-lg text-white">{description.slice(0,100)}</p>
                <div className="card-actions justify-end">
                <div className="btn btn-ghost text-2xl  btn-outline"><Link to={`/updateProduct/${_id}`}>Edit</Link></div> 
                <div onClick={()=>handleDelete(_id)} className="btn btn-primary text-2xl  btn-outline">Delete</div> 
                <div  className="btn btn-secondary text-2xl  btn-outline"><Link to={`/product/${_id}`}>Details</Link></div>
                </div>
               
            </div>
        </div>
    );
};

export default Products;