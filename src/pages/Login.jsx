import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import login_side_image from '../assets/otherIMG/login-side.png'
import logo from '../assets/otherIMG/logo.png'
import { MdOutlineDangerous } from "react-icons/md";

const Login = () => {
    const { userLogin, loginWithGoogle } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [error,setError] =useState(null)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Type Valid Email')
            return
        }
        if (password.length < 6) {
            setError('Type password')
            return;
        }

        // login
        userLogin(email, password)
            .then(result => {
                console.log("login successfully", result);
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                setError('User Not Match')
            })
            form.reset()
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(result => {
            console.log(result);
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => console.error(error))

    }


    return (
        <div className="bg-white dark:bg-gray-900">
            <Helmet>
                <title>Study Loop | Login</title>
            </Helmet>
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: `url(${login_side_image})` }}>
                    <div className="flex items-center h-full px-20 bg-[#000000a2]">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">Welcome to Study Loop</h2>

                            <p className="max-w-xl mt-3 text-base font-semibold text-gray-200">
                                For Better Experiences Ready to Login
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center mb-5">
                            <div className="flex justify-center mx-auto">
                                <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
                            </div>

                            <p className="mt-3 text-gray-500 dark:text-gray-300 mb-5">Sign in to <span className='text-[#d55ca0]'>access</span> your account</p>
                            <button onClick={handleGoogleLogin} className="w-full bg-white flex items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base  dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5">
                                <svg className="w-5 h-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_3033_94454)">
                                        <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                                        <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
                                        <path d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC04" />
                                        <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3033_94454">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <span>Sign In With Google</span>
                            </button>
                            {/* <hr className='mt-5' /> */}
                        </div>
                        {
                            error &&
                            <div className="border-[1px] border-red-300 bg-red-100 p-2 flex gap-1">

                                <MdOutlineDangerous size={21} className="text-red-700 mt-[2px]" />
                                <div>
                                    <p>{error}</p>
                                </div>
                            </div>
                        }
                        <div className="mt-8">
                            <form onSubmit={handleLogin}>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="mt-6">
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                    </div>

                                    <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="mt-6">
                                    <input type="submit" value="Sign In" className="cursor-pointer w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#FAA384] rounded-lg hover:bg-[#faa384da]" />
                                </div>

                            </form>

                            <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <Link to={'/registration'} className="text-[#e8754b] focus:outline-none focus:underline hover:underline text-lg">Sign up</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;