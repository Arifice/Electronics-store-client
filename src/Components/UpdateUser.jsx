import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateUser = () => {
    const user=useLoaderData();
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
                    text: "Product is successfully Updated",        
                })
               
            }
            
        })
        

            
        
    }
    return (
        <div className="flex  flex-col items-center justify-center bg-[#9ADE7B]">
                <div className="text-center">
                    <h1 className="text-5xl mt-12 font-bold bg-black text-white p-4 rounded-lg">Update Information</h1>                
                </div>
                <div className="w-1/2  text-3xl">
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input text-3xl input-bordered"/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl">Photo</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="photo url" className="input text-3xl input-bordered"/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={email} placeholder="email" className="input text-3xl input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl">Password</span>
                        </label>
                        <input type="password" name="password" defaultValue={password } placeholder="password" className="input text-3xl input-bordered" required />                        
                       
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value={'Update'} className="btn text-3xl btn-secondary "/>
                        </div>
                    </form>
                    
                </div>
            </div>
    );
};

export default UpdateUser;