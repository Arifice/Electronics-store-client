
import { NavLink, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError();
    return (
        <div className="my-24">
            <h1 className="text-4xl font-semibold text-center mt-24">Oops!</h1>
            <h1 className="text-4xl font-semibold text-center">{error.statusText || error.message}</h1>
            
                
                <div>
                    <h1 className="text-4xl font-semibold text-center">Page not found</h1>
                    <h1 className="text-4xl font-semibold text-center">Go back where are you from</h1>                    
                </div>
                <div className="flex justify-center mt-16 pb-40">
                    <NavLink to={'/'}><button className=" btn btn-secondary btn-outline text-4xl font-semibold">Go Home</button></NavLink>
                </div>
            
        </div>
    );
};

export default ErrorPage;