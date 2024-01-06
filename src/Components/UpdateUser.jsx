import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateUser = () => {
    const user=useLoaderData();
    const navigate=useNavigate();
    const location=useLocation();
    const {_id,name,photo,email,password}=user;
    console.log(user);
    const handleUpdate=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        const updateUser={name,photo,email,password};
        console.log(updateUser);        
        form.reset();
        fetch(`https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/user/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "User is successfully Updated",        
                })
               navigate(location?.state ? location?.state :'/');
            }
            else{
                Swal.fire({
                    icon: "warning",
                    title: "warning",
                    text: "You do not change anything",        
                })
               navigate(location?.state ? location?.state :'/');
            }
            
        })
        

            
        
    }
    return (
        <div className="flex m-4 p-4 flex-col items-center bg-[#F9F6E2] justify-center ">
                <div className="text-center">
                    <h1 className="lg:text-5xl text-3xl mt-12 font-bold bg-black text-white p-2 lg:p-4 rounded-lg">Update Information</h1>                
                </div>
                <div className="lg:w-1/2 p-4 m-4 text-xl lg:text-3xl">
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl lg:text-3xl">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input lg:text-3xl text-xl p-4 lg:p-8 input-bordered"/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl lg:text-3xl">Photo</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="photo url" className="input lg:text-3xl text-xl p-4 lg:p-8 input-bordered"/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl lg:text-3xl">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={email} placeholder="email" className="input lg:text-3xl text-xl p-4 lg:p-8 input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl lg:text-3xl">Password</span>
                        </label>
                        <input type="password" name="password" defaultValue={password } placeholder="password" className="input lg:text-3xl text-xl p-4 lg:p-8 input-bordered" required />                        
                       
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value={'Update'} className="btn text-3xl btn-outline btn-secondary "/>
                        </div>
                    </form>
                    
                </div>
            </div>
    );
};

export default UpdateUser;