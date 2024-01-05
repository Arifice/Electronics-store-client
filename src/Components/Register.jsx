import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {createUser}=useContext(AuthContext);
    const handleRegister=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        const user={name,photo,email,password};
        console.log(user);        
        form.reset();
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            const createAt=result?.user?.metadata?.creationTime;
            const lastSignAt=result?.user?.metadata?.lastSignInTime;
            const emailVerify=result?.user?.emailVerified;
            const newUser={name,photo,email,password,createAt,lastSignAt,emailVerify}

            // send user to the server
            fetch('http://localhost:5000/user',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        icon: "success",
                        title: "Yes...",
                        text: "You have successfully Registered",                        
                    });
                }                
            })            
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
            <div className="flex  flex-col items-center justify-center bg-[#d89d59]">
                <div className="text-center">
                    <h1 className="text-5xl mt-12 font-bold bg-black text-white p-4 rounded-lg">Register Now!</h1>                
                </div>
                <div className="w-1/2  text-3xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input text-3xl input-bordered"/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input text-3xl input-bordered"/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input text-3xl input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input text-3xl input-bordered" required />                        
                        <label className="label">
                            <a href="#" className="label-text-alt link text-3xl link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value={'Register'} className="btn text-3xl btn-secondary "/>
                        </div>
                    </form>
                    <h1 className="text-3xl text-center mb-8">Already have Registered? Please<Link to={'/login'} className="text-red-600 underline font-bold ml-3">Login</Link> </h1>
                </div>
            </div>
            
                
                
           
    );
};

export default Register;