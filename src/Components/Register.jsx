import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser,emailVerification}=useContext(AuthContext);
    const [registerError,setRegisterErrore]=useState('');
    const [showPassword, setShowPassword]=useState(false); 
    const navigate=useNavigate();   
    console.log(registerError);
    const handleRegister=e=>{
        e.preventDefault();
        setRegisterErrore('');
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        const gendar=form.gendar.value;
        
        const user={name,photo,email,password,gendar};
        
        console.log(user); 
        if(password.length<6){
            setRegisterErrore('Password should be at least six character');
            return;
        }  
        if(!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/.test(password)){
            setRegisterErrore('Password should be at least six character and  one upper case , one special charecter');
              return;
        }
        form.reset();
        
        createUser(email,password)
            .then(result=>{
                    console.log(result.user);
                    emailVerification(result.user)
                        .then(result=>{
                            console.log(result.user);
                            Swal.fire({
                                icon: "success",
                                title: "Yes...",
                                text: "Please check & verify your email",                        
                            }) 
                            
                        })
                        .catch(error=>{
                            console.log(error);
                        })
                    updateProfile(result.user,{
                            displayName:name,
                            photoURL:photo
                        })
                        .then(result=>{
                            console.log(result);
                            Swal.fire({
                                icon: "success",
                                title: "Yes...",
                                text: "Profile updated",                        
                            });
                        })
                        .then(error=>{
                            console.log(error)
                        })

                const createAt=result?.user?.metadata?.creationTime;
                const lastSignAt=result?.user?.metadata?.lastSignInTime;
                const emailVerify=result?.user?.emailVerified;
                const newUser={name,photo,email,password,gendar,createAt,lastSignAt,emailVerify}

                // send user to the server
                fetch('https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/user',{
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
                        navigate('/');
                    }                
                })            
            })
            .catch(error=>{
                console.log(error);
                setRegisterErrore(error.message);
            })
    }
    return (
            <div className="flex  flex-col items-center justify-center bg-[#F9F6E2]">
                <div className="text-center">
                    <h1 className="text-5xl mt-12 font-bold bg-black text-white p-4 rounded-lg">Register Now!</h1>                
                </div>
                <div className="lg:w-1/2  text-3xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input text-3xl md:p-8 lg:p-8 input-bordered"/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input text-3xl md:p-8 lg:p-8 input-bordered"/>
                        </div>                       

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input text-3xl md:p-8 lg:p-8 input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl">Password</span>
                        </label>
                        <input type={showPassword?'text':'password'} name="password" placeholder="password" className="input relative text-3xl md:p-8 lg:p-8 input-bordered" required />                        
                            <button className="absolute   text-4xl my-16 ml-72" onClick={()=>setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</button>
                        </div>
                        <div className="lg:text-2xl text-xl my-2">
                            <input type="checkbox" className="w-6 h-6" name="terms" id="terms" required />
                            <label className="ml-3 mt-3S" htmlFor="terms">Accept our terms & conditions</label>
                        </div>

                        

                        <div className="form-control mt-6">
                        <input type="submit" value={'Register'} className="btn text-3xl btn-secondary "/>
                        </div>
                    </form>
                    <h1 className="text-3xl text-center mb-8">Already have Registered? Please<Link to={'/login'} className="text-red-600 underline font-bold ml-3">Login</Link> </h1>
                </div>
               {/* Open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                <dialog id="my_modal_5" className={`${registerError?document.getElementById('my_modal_5').showModal():'hidden'} modal modal-bottom sm:modal-middle`}>
                    <div className="modal-box">
                        <h3 className="font-bold text-5xl">Hello!</h3>
                        <p className="py-4 text-3xl font-semibold">{registerError}</p>
                        <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-accent text-2xl">Close</button>
                        </form>
                        </div>
                    </div>
                </dialog>
            </div>
            
                
                
           
    );
};

export default Register;