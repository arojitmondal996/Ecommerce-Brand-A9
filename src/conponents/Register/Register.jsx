import React, { useContext, useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Register = () => {
    const { handleRegister, handleGoogleLogin, manageProfile } = useContext(authContext)
    const navigate = useNavigate();
    //error dekhanor jonno state nite hobe
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    // console.log("hello")
    const handleSubmit = (e) => {
        
        e.preventDefault()
        setError("")
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photo.value
        const password = e.target.password.value
        // password 6 character na hole dhukte debe na
        if (password.length < 6) {
            setError("Password must be at least 6 character");
            return;
        }
        if (!password) {
            setError("Password didn't match")
            return;
        }

        // sign up korar somoy check korbo speacial carecter ase kina
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(password)) {
            setError("password will be one uppercase, lowecase, number, & special character");
            return;
        }

        console.log(name, email, photo, password)

        handleRegister(email, password)
        .then(res => {
            manageProfile(name, photo)
            navigate("/")
        })
    }
    const handleGoogleLog= () => {
        handleGoogleLogin()
        .then(()=>{
            navigate("/")
        })
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                        </div>
                        <div className="card bg-[#225f6a] w-[800px] max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                    <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-2 top-12'>
                                        {
                                            showPassword ? <FaEyeSlash/> : <FaEye/>
                                        }
                                    </button>
                                </div>
                                {
                                    error && <p className='text-red-500'>{error}</p>
                                }
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-teal-800 text-white">Register Now</button>
                                    <NavLink className="text-center mt-3 text-white">Already have an account? Please <NavLink to="/login" className='text-amber-600 hover:'>SignIn</NavLink></NavLink>
                                </div>
                                <NavLink onClick={handleRegister} className="justify-center items-center mt-5 rounded-3xl p-3">
                                    <button to="/" className='text-3xl ml-32' onClick={handleGoogleLog}><FcGoogle /> </button>
                                    <p className='text-center text-white'>Continue With Google</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Register;