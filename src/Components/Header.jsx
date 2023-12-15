import Navbar from "./Navbar";


const Header = () => {
    return (
        <div>
            <div className="shadow-lg bg-pink-300 py-8 space-y-3 flex items-center justify-center">
                <div>
                    <img className="w-44 h-44 rounded-full"  src="https://i.postimg.cc/2SNQSPrj/imageedit-1-5826598427.png" alt="logo" />
                </div>
                <div>
                    <h1 className="text-center text-5xl font-bold">Technology and Electronics Store</h1>
                    <p className="text-center font-semibold">Email: Etechnology@gmail.com    <span className="ml-8">phone:0721897654</span></p>
                    <p className="text-center font-semibold">Court station, Rajshahi</p>
                </div>                
            </div>
            <Navbar></Navbar>
           
        </div>
    );
};

export default Header;