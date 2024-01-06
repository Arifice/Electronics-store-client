import { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGooglePlusSquare,FaGithub} from "react-icons/fa";
const Login = () => {   
    const navigate=useNavigate(); 
    const {signIn,forgetPassword,emailVerification,signWithGoogle,signWithGithub}=useContext(AuthContext);
    const emailRef=useRef(null);
    const location=useLocation();
    console.log('login',location);


    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const user={email,password};
        console.log(user);
        form.reset();
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            if(!result.user.emailVerify){
                emailVerification(result.user)
                .then(result=>{
                    console.log(result);
                    Swal.fire({
                        icon: "success",
                        title: "Yes...",
                        text: "Please check & verify your email",                        
                    });
                    navigate(location?.state ? location.state : '/');

                    })
                    .catch(error=>{
                        Swal.fire({
                            icon: "error",
                            title: "No...",
                            text: `${error.message}`,                        
                        });
                    })
            }
            const createdAt=result?.user?.metadata?.creationTime;
            const lastSignAt=result?.user?.metadata?.lastSignInTime;
            const emailVerify=result?.user?.emailVerified;
            const updateUser={email,createdAt,lastSignAt,emailVerify};
            // update in the database
            fetch('http://localhost:5000/user',{
                method: 'PATCH',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updateUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                // if(data.modifiedCount>0){
                //     Swal.fire({
                //         icon: "success",
                //         title: "Yes...",
                //         text: "Your information is successfully updated",
                //     })
                // }
            })            
            Swal.fire({
                icon: "success",
                title: "Yes...",
                text: "You have successfully login",
            })
        })
        .catch(error=>{
            console.log(error);
            Swal.fire({
                icon: "errore",
                title: "Failed",
                text: `${error.message}`,
            })
        })
    }

    const handleForgetPassword=()=>{
        const email=emailRef.current.value;
        if(!email){
            Swal.fire({
                icon: "errore",
                title: "Failed",
                text: `Enter your email`,
            })
            return
        }       

        forgetPassword(email)
        .then(result=>{
            console.log(result);
            Swal.fire({
                icon: "success",
                title: "Success",
                text: `Please check your email`,
            })
            
        })
        .catch(error=>{
            console.log(error.message);
            Swal.fire({
                icon: "errore",
                title: "Failed",
                text: `${error.message}`,
            })
        })
    }
    const handleGoogle=()=>{
        signWithGoogle()
            .then(result=>{
                console.log(result);
                navigate(location?.state?location.state:'/');
            })
            .catch(error=>{
                console.log(error);
            })
    }
    const handlegithub=()=>{
        signWithGithub()
            .then(result=>{
                console.log(result);
                navigate(location?.state?location.state:'/');
            })
            .then(error=>{
                console.log(error);
            })
    }
    
    return (
            <div className="flex flex-col-reverse lg:flex-row bg-[#F9F6E2] ">
                <div className="flex lg:w-3/4  py-12  bg-[#F9F6E2] my-12 flex-col items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-5xl bg-[#178de7] text-white p-6 rounded-lg font-bold">Login Now!</h1>                
                    </div>
                    <div className="lg:w-1/2  text-3xl ">
                        <form onSubmit={handleLogin} className="card-body ">                        
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-3xl">Email</span>
                            </label>
                            <input type="email" name="email" ref={emailRef} placeholder="email" className="input text-3xl md:p-8 lg:p-8 input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text  text-3xl">Password</span>
                            </label>
                            <input type="password" name="password"  placeholder="password" className="input text-3xl md:p-8 lg:p-8 input-bordered" required />                        
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt  link text-2xl link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <input type="submit" value={'Login'} className="btn btn-secondary  text-3xl"/>
                            </div>
                        </form>
                        <h1 className="text-3xl text-center mb-8">Do not have Registered? Please<Link to={'/register'} className="text-red-600 font-bold underline ml-3">Register</Link> </h1>
                    </div> 
                </div>

                <div className="text-center lg:w-1/4 bg-[#F9F6E2] my-12  text-4xl">
                    <h1 className="text-4xl font-bold text-center my-12 bg-[#0f4f80] text-white p-6 rounded-lg ">Login with !!</h1>
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <button onClick={handleGoogle} className="btn btn-secondary  text-3xl w-2/3"><FaGooglePlusSquare></FaGooglePlusSquare>Google</button> 
                        <button onClick={handlegithub} className="btn btn-success  text-3xl w-2/3"><FaGithub></FaGithub>Git-hub</button> 
                    
                    </div>
                </div>               
            </div>
            
            
    );
};

export default Login;