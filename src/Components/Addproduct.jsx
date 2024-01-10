
// import { useNavigate } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Addproduct = () => {
     const navigate=useNavigate();
     const location =useLocation();
    const handleAddProduct=e=>{
        
        e.preventDefault();
        const form=e.target;
        const productName=form.productName.value;
        const image=form.image.value;
        const brandName=form.brandName.value;
        const type=form.type.value;
        const price=form.price.value;
        const description=form.description.value;
        const newProduct={productName,image,brandName,type,price,description};
        console.log(newProduct);

        // send product to the server.
        fetch('https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/product',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(newProduct)
        })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Product is successfully added",        
                    })
                    form.reset();
                    navigate(location?.state?location.state:'/');
                }
                
                
            })
        }
    return (
        <div className="flex m-4 p-4 flex-col items-center justify-center bg-[#F9F6E2]">
                <div className="text-center">
                    <h1 className="lg:text-5xl text-3xl mt-12 font-bold bg-black text-white p-5  lg:px-10 shadow-2xl rounded-lg"> Add Product !</h1>                
                </div>
                <div className="lg:w-1/2 p-4 m-4 text-xl lg:text-3xl">
                    <form onSubmit={handleAddProduct} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Product Name</span>
                            </label>
                            <input type="text" name="productName" placeholder="Product Name" className="input input-secondary text-xl lg:text-3xl p-4 m-4 md:p-8 lg:p-8 input-bordered"/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Image</span>
                            </label>
                            <input type="text" name="image" placeholder="Image url" className="input input-secondary text-xl lg:text-3xl p-4 m-4 md:p-8 lg:p-8 input-bordered"/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Brand Name</span>
                            </label>
                            <input type="text" name="brandName" placeholder="Brand name" className="input input-secondary text-xl lg:text-3xl p-4 m-4 md:p-8 lg:p-8 input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Type</span>
                            </label>
                            <input type="text" name="type" placeholder="type (computer, headphone, mobile, monitor etc...)" className="input input-secondary text-xl lg:text-3xl p-4 m-4 md:p-8 lg:p-8 input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-secondary text-xl lg:text-3xl p-4 m-4 md:p-8 lg:p-8 input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Description</span>
                            </label>
                            <textarea name="description" className="textarea text-xl lg:text-3xl p-4 m-4 md:p-8 lg:p-8 textarea-secondary" placeholder="write a shoprt description about the product"></textarea>
                        </div>                        

                        <div className="form-control mt-6">
                            <input type="submit" value={'Add Product'} className="btn text-xl lg:text-3xl btn-outline btn-secondary "/>
                        </div>
                    </form>
                   
                </div>
            </div>
    );
};

export default Addproduct;