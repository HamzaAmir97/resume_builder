import React from "react";
import { Link } from "react-router-dom";
import ProfileInfoCard from "../Cards/ProfileInfoCard";

const Navbar = () => {
    return <div className="h-16  bg-white border  border-gray-200/50 backdrop-blur-[2px] py-2.5 px-10 md:px-0 sticky top-0 z-30">
        <div className="container flex items-center justify-between gap-5">
       
            <Link to='/dashboard'  >
            <img
                  src='./src/assets/logo.png'
                  className='w-20  mb-10 ml-10  '
                 
                 >
                </img>
                 
               
            </Link>
          

           
            <ProfileInfoCard />
            
        </div>
    </div>
};

export default Navbar;