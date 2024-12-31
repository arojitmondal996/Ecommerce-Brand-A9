import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const MyProfile = () => {
    const { user } = useContext(authContext);

    return (
        <form className="bg-slate-100 mt-8 mb-20 mx-auto md:p-6 lg:p-10 rounded-lg max-w-2xl text-center shadow-md">
            {/* User Name */}
            <p className="text-3xl lg:text-5xl font-bold mt-10">{user?.displayName}</p>

            {/* Profile Picture */}
            <div className="flex justify-center mt-5">
                <img
                    className="w-28 h-28 lg:w-40 lg:h-40 rounded-full object-cover mt-6 mb-8"
                    src={user?.photoURL}
                    alt={user?.displayName || "User Profile"}
                />
            </div>

            {/* Welcome Message */}
            <p className="text-lg lg:text-2xl font-medium text-gray-700">
                Welcome to My Profile
            </p>

            {/* Update Button */}
            <NavLink
                to="/update"
                className="btn mt-6 mb-6 bg-[#6a2246] hover:bg-[#5a1d3e] text-white px-6 py-2 rounded-full"
            >
                Update Now
            </NavLink>
        </form>
    );
};

export default MyProfile;
