import { Link, useLoaderData } from "react-router-dom";
import About from "./About";

const Home = () => {
    const brands=useLoaderData();
    console.log('brands',brands);
  
    return (
        
        <div>

            <div className="carousel w-full">
                <div className="carousel h-[350px] md:h-[450px] lg:h-[600px] w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/02jWMvyr/Samsung-Galaxy-S-series-evolution.jpg" className="w-full" />
                        <div className="absolute flex right-10 gap-5 bottom-5 transform  -translate-y-1/2 ">
                        <a href="#slide6" className="btn btn-circle bg-success">❮</a> 
                        <a href="#slide2" className="btn btn-circle bg-success">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/zv66JCcS/intel-core-i3-7th-generation-accelerate-your-business-with-intel-powered-desktops-ad-bangalore-times.png" className="w-full" />
                        <div className="absolute flex right-10 gap-5 bottom-5 transform -translate-y-1/2">
                        <a href="#slide1" className="btn btn-circle bg-success">❮</a> 
                        <a href="#slide3" className="btn btn-circle bg-success">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/VvLZmr6L/dp-1-1.jpg" className="w-full" />
                        <div className="absolute flex right-10 gap-5 bottom-5 transform -translate-y-1/2">
                        <a href="#slide2" className="btn btn-circle bg-success">❮</a> 
                        <a href="#slide4" className="btn btn-circle bg-success">❯</a>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/Kjnw8S7J/hp-now-even-the-stars-are-within-your-reach-with-hp-ad-delhi-times-29-03-2019.png" className="w-full" />
                        <div className="absolute flex right-10 gap-5 bottom-5 transform -translate-y-1/2">
                        <a href="#slide3" className="btn btn-circle bg-success">❮</a> 
                        <a href="#slide5" className="btn btn-circle bg-success">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/kgrPCsxj/Apple-i-Phone.jpg" className="w-full" />
                        <div className="absolute flex right-10 gap-5 bottom-5 transform -translate-y-1/2">
                        <a href="#slide4" className="btn btn-circle bg-success">❮</a> 
                        <a href="#slide6" className="btn btn-circle bg-success">❯</a>
                        </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full">
                        <img src="https://i.postimg.cc/1XPyyHhh/Lenovo-Aware-Idea-Pad-Banner.jpg" className="w-full" />
                        <div className="absolute flex right-10 gap-5 bottom-5 transform -translate-y-1/2">
                        <a href="#slide5" className="btn btn-circle bg-success">❮</a> 
                        <a href="#slide1" className="btn btn-circle bg-success">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <About></About>

            <h1 className="text-7xl text-center font-bold my-5">Feature Brand</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-12">           
                {
                    brands.map(brand=>(
                        <div key={brand.id}>                            
                            <div className="card  bg-base-200 shadow-xl">
                                <figure className="p-5 pt-10 bg-gray-100">
                                    <img src={brand.image} alt="Shoes" className=" rounded-xl h-[200px]" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-3xl font-bold">{brand.name}</h2>
                                    <p>{brand.description}</p>
                                    <div className="card-actions">
                                    <Link to={`/category/${brand.name}`}> <button  className="btn btn-primary">Buy Now</button></Link>
                                    </div>
                                </div>
                            </div>              
                        </div>
                    )
                    )           
                } 

            </div>
        </div>
    );
};

export default Home;