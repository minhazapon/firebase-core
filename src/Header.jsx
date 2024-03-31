import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className=" flex justify-center items-center mt-32">
            

           <div>
           <Link className=" text-xl text-blue-500" to="/">home</Link>
           <Link  className=" text-xl text-blue-500 ml-2"  to="/login" >Login</Link>
           </div>
            
        </div>
    );
};

export default Header;