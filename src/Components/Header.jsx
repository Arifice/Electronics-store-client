import Navbar from "./Navbar";
import moment from 'moment';


const Header = () => {
    return (
        <div>
            <div className="shadow-lg bg-[#F9F6E2] pt-4 lg:pt-8 space-y-3">
                <div className="flex justify-center items-center">
                    <div>
                        <img className=" w-20 h-20 lg:w-32 lg:h-32  mx-5 rounded-full"  src="https://i.postimg.cc/kX5JpzhC/imageedit-0-9538373754.jpg" alt="logo" />
                    </div>
                    <div>
                        <h1 className="text-center bg-[#11235A] text-white p-2 md:p-4 lg:p-6 rounded-md lg:rounded-lg md:rounded-lg shadow-xl text-3xl md:text-5xl lg:text-7xl  font-semibold lg:font-bold">E-Tech Shop</h1>  
                    </div>
                </div>
                <div className="text-center pb-2 lg:pb-4 lg:text-2xl md:text-2xl  font-semibold">                  
                    
                    <h1 className="lg:text-3xl md:text-2xl text-xl  ">Building the Future with Tech.</h1>  
                    <h1 >{moment().format("dddd,  D MMMM YYYY, h:mm:ss a")}</h1>
                </div>                                  
                </div> 
                <div>
                    
            </div>
            <Navbar></Navbar>
           
        </div>
    );
};

export default Header;