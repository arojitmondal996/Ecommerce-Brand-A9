import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const { manageProfile, setUser } = useContext(authContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        manageProfile(name, photo)
            .then(() => {
                setUser((prevUser) => ({
                    ...prevUser,
                    displayName: name,
                    photoURL: photo,
                }));
                navigate("/profile");
            })
            .catch((error) => {
                console.error("ERROR:", error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center mt-16 mb-16 p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-[#225f6a] w-full max-w-md md:max-w-lg lg:max-w-xl p-6 rounded-xl shadow-2xl"
            >
                {/* Form Heading */}
                <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-6">
                    Update Your Profile
                </h2>

                {/* Name Input */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-white text-lg">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Photo URL Input */}
                <div className="form-control mb-6">
                    <label className="label">
                        <span className="label-text text-white text-lg">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        name="photo"
                        placeholder="Enter photo URL"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="form-control mb-6 mt-6">
                    <button
                        type="submit"
                        className="btn bg-teal-900 hover:bg-[#5a1d3e] text-white text-lg w-full"
                    >
                        Update Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;
