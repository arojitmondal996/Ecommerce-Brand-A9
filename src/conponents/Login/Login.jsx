import React, { useContext, useRef, useState } from 'react';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { authContext } from '../AuthProvider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../firebase/firebase.config';



const Login = () => {
    const { handleGoogleLogin, handleLogin } = useContext(authContext);
    // for changing password need to make a useRef
    const emailRef = useRef();
    // console.log("hello")
    // showing the password need to create useState
    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("")
    const navigate = useNavigate();
    const { pathname } = useLocation()
    console.log(pathname)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handleSubmit")
        const email = e.target.email.value
        const password = e.target.password.value

        handleLogin(email, password)
            .then(res => { navigate("/") })
            .catch(err => {
                setError(err.message)
                
            })
    }

    const handleGoogle= () => {
        handleGoogleLogin()
        .then(()=>{
            navigate("/")
        })
    }

    // if you forget your password then try it
    const handleForgetPassword = () => {
        console.log("get me email address", emailRef.current.value);
        const email = emailRef.current.value;
        if (!email) {
            console.log("Please provide a valid email address")
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Password Reset email sent, please check your email")
                })
        }
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
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                    <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-2 top-12'>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </button>
                                    <label onClick={handleForgetPassword} className="label mt-3">
                                        <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    {
                                        error && <p className='text-red-500 mb-5 text-center'>{error.split("/")[1].slice(0, 18)}</p>
                                    }
                                   
                                        <button type="submit" className="btn bg-teal-800 text-white">Login</button>
                                        
                                    <NavLink className="text-center mt-3 text-white">New to website? Please <NavLink to="/register" className='text-amber-600 hover:'>Register</NavLink></NavLink>
                                    <NavLink onClick={handleLogin} className="justify-center items-center mt-5 p-3">
                                        <button className='text-3xl ml-32' onClick={handleGoogle}><FcGoogle /> </button>
                                        <p className='text-center text-white'>Continue With Google</p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;