import Navbar from "./Navbar";
import moment from 'moment';


const Header = () => {
    return (
        <div>
            <div className="shadow-lg bg-[#F9F6E2] pt-8 space-y-3">
                <div className="flex justify-center items-center">
                    <div>
                        <img className="w-32 h-32 mx-3 rounded-full"  src="https://i.postimg.cc/kX5JpzhC/imageedit-0-9538373754.jpg" alt="logo" />
                    </div>
                    <div>
                        <h1 className="text-center bg-[#11235A] text-white p-6 rounded-lg shadow-xl text-5xl font-bold">Technology and Electronics Store</h1>  
                    </div>
                </div>
                <div className="text-center pb-4 text-2xl  font-semibold">                  
                    
                    <h1 className="text-4xl font-bold">Building the Future with Tech.</h1>  
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