import { useLoaderData, useNavigate,  } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product=useLoaderData();    
    const {productName,image,brandName,type,price,description,_id}=product;
    console.log(product);
   const navigate=useNavigate();

    const handleUpdateProduct=e=>{
        e.preventDefault();
        const form=e.target;
        const productName=form.productName.value;
        const image=form.image.value;
        const brandName=form.brandName.value;
        const type=form.type.value;
        const price=form.price.value;
        const description=form.description.value;
        const updatedProduct={productName,image,brandName,type,price,description};
        console.log(updatedProduct);

        // send product to the server.
        fetch(`https://b8a10-brandshop-server-side-arifice-qyfc.vercel.app/product/${_id }`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedProduct)
        })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                form.reset();
                if(data.modifiedCount>0){
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Product is successfully Updated",        
                    })
                   navigate('/');
                }
                else{
                    Swal.fire({
                        icon: "warning",
                        title: "warning",
                        text: "You do not change anything",        
                    })
                //   navigate('/');
                }
                
            })
        }
    return (
        <div className="flex m-4 p-4 flex-col items-center justify-center bg-[#F9F6E2]">
                <div className="text-center">
                    <h1 className="lg:text-5xl text-xl mt-12 font-bold bg-black text-white m-5 p-5 lg:px-10 shadow-2xl rounded-lg">   Update Product !</h1>  
                    <figure className="flex justify-center"><img src={image} className=" w-1/2 h-1/2 p-3" alt="" /></figure>              
                </div>
                <div className="lg:w-1/2 p-4 m-6 text-xl lg:text-3xl">
                    <form onSubmit={handleUpdateProduct} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Product Name</span>
                            </label>
                            <input type="text" defaultValue={productName} name="productName" placeholder="Product Name" className="input input-secondary text-xl lg:text-3xl p-4 md:p-8 lg:p-8 input-bordered"/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Image</span>
                            </label>
                            <input type="text" defaultValue={image} name="image" placeholder="Image url" className="input input-secondary text-xl lg:text-3xl p-4 md:p-8 lg:p-8 input-bordered"/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Brand Name</span>
                            </label>
                            <input type="text"  defaultValue={brandName} name="brandName" placeholder="Brand name" className="input input-secondary text-xl lg:text-3xl p-4 md:p-8 lg:p-8 input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Type</span>
                            </label>
                            <input type="text"  defaultValue={type} name="type" placeholder="type (computer, headphone, mobile, monitor etc...)" className="input input-secondary text-xl lg:text-3xl p-4 md:p-8 lg:p-8 input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Price</span>
                            </label>
                            <input type="text"  defaultValue={price} name="price" placeholder="Price" className="input input-secondary text-xl lg:text-3xl p-4 md:p-8 lg:p-8 input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-3xl">Description</span>
                            </label>
                            <textarea name="description"  defaultValue={description} className="textarea text-xl lg:text-3xl p-4 md:p-8 lg:p-8 textarea-secondary" placeholder="write a shoprt description about the product"></textarea>
                        </div>                        

                        <div className="form-control mt-6">
                            <input type="submit" value={'Update Product'} className="btn text-xl btn-outline lg:text-3xl btn-secondary "/>
                        </div>
                    </form>
                   
                </div>
            </div>
    );
};

export default UpdateProduct;