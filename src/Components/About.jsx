/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div>
            <div className="hero p-3  bg-base-200  py-6 lg:py-20">
                <div className="hero-content flex flex-col lg:gap-8 md:gap-12 gap-16 lg:flex-row">
                    <div className="relative flex-1 mr-5">

                        <img className="rounded-lg" src="https://i.postimg.cc/Vs4BxZ4v/Engaging-with-in-store-tech.jpg" alt="" />
                        <img className="absolute w-1/2 -right-10 top-3/4 border-8 border-white  rounded-lg shadow-2xl"  src="https://i.postimg.cc/FKFnbXnb/3a5b4b130201639-617ac5e8008d9.jpg" />                        
                    </div>
                    <div className="flex-1  lg:ml-5">
                        <h1 className="lg:text-5xl text-2xl mt-10 text-center text-purple-600 font-bold"> Get Your Tech <br/> On with Us</h1>
                        <p className="lg:p-6 py-3 text-justify">Techshopbd is one sort of your constant helping hand on whom you can rely, with no doubt, for any technological support and related assistance. To be more precise, it is an online retail store that sells the electronic bits and pieces needed for a competent electronic project. </p>
                        <p className="lg:p-6 py-3 text-justify">Our identity is quite auspicious, we are Techfreak. We are a group of freak people, albeit the term 'freak' must be considered in positive sense. Freak is defined as someone who is so ardently devoted to something that it resembles an addiction. </p>
                        <Link to={'/product'}><button className="btn my-2 btn-secondary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;