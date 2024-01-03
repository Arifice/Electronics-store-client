
const Bannar = () => {
    return (
        <div>
            <div className="min-h-screen bg-cover" style={{backgroundImage: `url(https://i.postimg.cc/CKrrFJJQ/istockphoto-1335669510-612x612.jpg)`}}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-red-700">
                    <div className="">
                    <h1 className="mt-64 text-6xl text-white font-black">Explore the Universe of Tech</h1>
                    <p className="mb-5 text-xl mx-40 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-secondary text-3xl">Buy Now </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Bannar;