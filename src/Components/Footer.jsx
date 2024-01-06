
const Footer = () => {
    return (
       <div className=" text-2xl bg-[#176B87] text-white">
            <footer className="footer hidden lg:flex p-2 lg:p-10 lg:text-2xl">
                <nav>
                    <header className="footer-title">Services</header> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <header className="footer-title">Company</header> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <header className="footer-title">Legal</header> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav> 
                <form>
                    <header className="footer-title">Newsletter</header> 
                    <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-white text-2xl">Enter your email address</span>
                    </label> 
                    <div className="join text-2xl">
                        <input type="text" placeholder="username@site.com" className="input text-2xl input-bordered join-item" /> 
                        <button className="btn btn-secondary text-2xl join-item">Subscribe</button>
                    </div>                    
                    </fieldset>
                </form>                
            </footer>
            
                    
           
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
                <p>Copyright © 2024 - All right reserved by Authority</p>
            </aside>
            </footer>
        </div>                              
    )       
                    
 
};

export default Footer;