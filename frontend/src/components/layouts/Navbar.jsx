import React from "react";
import { Link } from "react-router-dom";
import ProfileInfoCard from "../Cards/ProfileInfoCard";

const Navbar = () => {
    return <div className="h-16  bg-white border  border-gray-200/50 backdrop-blur-[2px] py-2.5  md:px-8 sticky top-0 z-30">
        <div className="container mx-auto flex items-center justify-between gap-5">
            <Link to='/dashboard'>
                <h2 className="text-lg md:text-xl font-medium text-black leading-5">
                    Resume Builder
                </h2>
            </Link>
            <Link to='/'>
                <h2 className="text-lg md:text-xl font-bold text-black leading-5 hover:underline ">
                  Home
                </h2>
            </Link>

            <ProfileInfoCard />
        </div>
    </div>
};

export default Navbar;