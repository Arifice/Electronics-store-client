import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const user={email,password};
        console.log(user);
        form.reset();
    }
    return (
            <div className="flex ">
                <div className="flex w-3/4 border-2 py-12  border-teal-700 my-12 flex-col items-center justify-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login Now!</h1>                
                </div>
                <div className="w-1/2  text-3xl">
                    <form onSubmit={handleLogin} className="card-body">                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />                        
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value={'Login'} className="btn btn-primary btn-outline"/>
                        </div>
                    </form>
                    <h1 className="text-2xl text-center mb-8">Do not have Registered? Please<Link to={'/register'} className="text-blue-700 underline ml-3">Register</Link> </h1>
                </div> 
                </div>
                    <div className="text-center w-1/4 border-2 my-12 border-teal-700 text-4xl">
                        <h1 className="text-4xl font-bold text-center my-12  ">Login with !!</h1>
                        <div className="flex flex-col gap-5 justify-center items-center">
                            <button className="btn btn-secondary btn-outline text-3xl w-2/3">Google</button> 
                            <button className="btn btn-accent btn-outline text-3xl w-2/3">Facebook</button> 
                            <button className="btn btn-success btn-outline text-3xl w-2/3">Git-hub</button> 
                        
                        </div>
                    </div>               
            </div>
            
            
    );
};

export default Login;