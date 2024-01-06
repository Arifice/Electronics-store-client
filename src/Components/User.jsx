import { Link, useLoaderData } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";


const User = () => {
    const loadedUsers=useLoaderData();
    const [users,setUsers]=useState(loadedUsers);    
    console.log(users);

    const handleDelete=(id)=>{
        console.log('user id',id);
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
                fetch(`http://localhost:5000/user/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount>0){
                        // remove from UI
                        const remainingUsers=users.filter(user=>user._id !=id);
                        setUsers(remainingUsers);
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
        <div className="overflow-x-auto bg-[#F9F6E2] p-4 lg:p-8">
            <table className="table">
                <caption className="text-5xl  font-bold text-black">User Information</caption>
                {/* head */}
                <thead className="lg:text-2xl lg:font-semibold text-black">
                <tr className="border-2 border-black">
                    <th className="border-2 lg:w-1/12 border-black">SL</th>
                    <th className="border-2 lg:w-1/12 border-black">Image</th>
                    <th className="border-2 lg:w-3/12 border-black">Name</th>
                    <th className="border-2 lg:w-1/12 border-black">Gendar</th>
                    <th className="border-2 lg:w-2/12 border-black">Email</th>
                    <th className="border-2 lg:w-1/12 border-black">CreateAt</th>
                    <th className="border-2 lg:w-1/12 border-black">Last signAt</th>
                    <th className="border-2 lg:w-1/12 border-black">Action</th>                    
                </tr>
                </thead>           
                {
                    users.map((user,idx)=>(
                        <tbody key={idx}>
                            <tr className=" font-semibold text-black">
                                <th className="border-2  border-black">{idx+1}</th>
                                <td className="border-2  border-black"><img className="w-20 h-20 rounded-full" src={user?.photo} alt="" /></td>
                                <td className="border-2  text-2xl border-black">{user.name}</td>
                                <td className="border-2  text-2xl border-black">{user.gendar}</td>
                                <td className="border-2 text-2xl border-black">{user.email}</td>
                                <td className="border-2 border-black ">{user?.createAt}</td>
                                <td className="border-2 border-black ">{user?.lastSignAt}</td>
                                <td className="border-2 border-black ">
                                    <div className="join space-x-2">
                                        <Link to={`/updateUser/${user?._id}`}><button className="btn btn-ghost bg-[#FF8F8F] btn-outline  text-2xl join-item"><CiEdit></CiEdit></button></Link>
                                        <button onClick={()=>handleDelete(user?._id)} className="btn btn-ghost bg-[#9ADE7B] btn-outline text-2xl join-item"><MdDelete></MdDelete></button>                                        
                                    </div>
                                </td>                                
                            </tr>                
                        </tbody>
                    ))
                }                
            </table>
        </div>
    );
};

export default User;