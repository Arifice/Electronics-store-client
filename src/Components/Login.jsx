import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGooglePlusSquare, FaFacebook,FaGithub} from "react-icons/fa";
const Login = () => {
    const {signIn}=useContext(AuthContext);
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
            console.log(result);
            Swal.fire({
                icon: "success",
                title: "Yes...",
                text: "You have successfully login",

            })
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
            <div className="flex bg-[#F6ECA9] ">
                <div className="flex w-3/4  py-12  bg-[#45dac1] my-12 flex-col items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-5xl bg-[#178de7] text-white p-6 rounded-lg font-bold">Login Now!</h1>                
                    </div>
                    <div className="w-1/2  text-3xl ">
                        <form onSubmit={handleLogin} className="card-body ">                        
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-3xl">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input text-3xl p-2 input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-3xl">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input text-3xl p-2 input-bordered" required />                        
                            <label className="label">
                                <a href="#" className="label-text-alt text-white link text-2xl link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <input type="submit" value={'Login'} className="btn btn-secondary  text-3xl"/>
                            </div>
                        </form>
                        <h1 className="text-3xl text-center mb-8">Do not have Registered? Please<Link to={'/register'} className="text-blue-700 underline ml-3">Register</Link> </h1>
                    </div> 
                </div>

                <div className="text-center w-1/4 bg-[#c721bf] my-12  text-4xl">
                    <h1 className="text-4xl font-bold text-center my-12 bg-[#0f4f80] text-white p-6 rounded-lg ">Login with !!</h1>
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <button className="btn btn-secondary  text-3xl w-2/3"><FaGooglePlusSquare></FaGooglePlusSquare>Google</button> 
                        <button className="btn btn-accent  text-3xl w-2/3"><FaFacebook></FaFacebook>Facebook</button> 
                        <button className="btn btn-success  text-3xl w-2/3"><FaGithub></FaGithub>Git-hub</button> 
                    
                    </div>
                </div>               
            </div>
            
            
    );
};

export default Login;