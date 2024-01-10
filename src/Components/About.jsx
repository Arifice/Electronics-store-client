/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div>
            <div className="hero  bg-base-200 p-4 m-4 py-20">
                <div className="hero-content flex flex-col lg:flex-row">
                    <div className="relative flex-1 mr-5">

                        <img className="rounded-lg" src="https://i.postimg.cc/Vs4BxZ4v/Engaging-with-in-store-tech.jpg" alt="" />
                        <img className="absolute w-1/2 -right-10 top-3/4 border-8 border-white  rounded-lg shadow-2xl"  src="https://i.postimg.cc/FKFnbXnb/3a5b4b130201639-617ac5e8008d9.jpg" />                        
                    </div>
                    <div className="flex-1 ml-5">
                        <h1 className="text-5xl text-center text-purple-600 font-bold"> Get Your Tech <br/> On with Us</h1>
                        <p className="p-6 m-4 text-justify">Techshopbd is one sort of your constant helping hand on whom you can rely, with no doubt, for any technological support and related assistance. To be more precise, it is an online retail store that sells the electronic bits and pieces needed for a competent electronic project. We don't discriminate among the bits and pieces on their sizes and range of use. Everything, that has even a minimum use at the project, is also considered with equal significance.</p>
                        <p className="p-6 m-4 text-justify">Our identity is quite auspicious, we are Techfreak. We are a group of freak people, albeit the term 'freak' must be considered in positive sense. Freak is defined as someone who is so ardently devoted to something that it resembles an addiction. And our freakiness goes to technology. We are like other common people, but what makes us different is the intense zeal towards technology which has brought us under common platform.</p>
                        <Link to={'/product'}><button className="btn btn-secondary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;