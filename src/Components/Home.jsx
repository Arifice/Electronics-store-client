import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const brands=useLoaderData();
    console.log('brands',brands);
  
    return (
        
        <div>

            <div className="m-4 p-4">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/02jWMvyr/Samsung-Galaxy-S-series-evolution.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/zv66JCcS/intel-core-i3-7th-generation-accelerate-your-business-with-intel-powered-desktops-ad-bangalore-times.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/VvLZmr6L/dp-1-1.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/Kjnw8S7J/hp-now-even-the-stars-are-within-your-reach-with-hp-ad-delhi-times-29-03-2019.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/kgrPCsxj/Apple-i-Phone.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/1XPyyHhh/Lenovo-Aware-Idea-Pad-Banner.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-7xl text-center font-bold my-5">Feature Brand</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-12">           
                {
                    brands.map(brand=>(
                        <div key={brand.id}>
                            <Link to={`/category/${brand.name}`}>
                                <div  className="border flex justify-center  m-4 gap-8 items-center border-black p-5">
                                <figure><img  className="w-20 h-20" src={brand.image} alt="" /></figure>
                                <h1 className="text-5xl font-bold">{brand.name}</h1>                          
                                </div>                
                            </Link>
                        </div>
                    )
                    )           
                } 

            </div>
        </div>
    );
};

export default Home;