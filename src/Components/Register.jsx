import { Link } from "react-router-dom";

const Register = () => {
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
    }
    return (
            <div className="flex my-12 flex-col items-center justify-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register Now!</h1>                
                </div>
                <div className="w-1/2  text-3xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered"/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo" className="input input-bordered"/>
                        </div>
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
                        <input type="submit" value={'Register'} className="btn btn-primary btn-outline"/>
                        </div>
                    </form>
                    <h1 className="text-2xl text-center mb-8">Already have Registered? Please<Link to={'/login'} className="text-blue-700 underline ml-3">Login</Link> </h1>
                </div>
            </div>
            
                
                
           
    );
};

export default Register;