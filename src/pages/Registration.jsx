import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from 'react-helmet-async';
import reg_logo from '../assets/otherIMG/Sign-up.png'
import { MdOutlineDangerous } from "react-icons/md";
import axios from "axios";


const Registration = () => {
    const { createUserWithEmail, profileUpdate, user, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState(null)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const name = firstName + " " + lastName;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // validation
        if (firstName.length < 2) {
            setError('Type first name')
            return
        }
        if (lastName.length < 2) {
            setError('Type last name')
            return
        }
        if (!/\.(jpg|jpeg|png|gif|bmp)$/i.test(photo)) {
            setError("Please Input valid image link")
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Type Valid Email')
            return
        }

        if (password.length < 1) {
            setError('Type password')
            return;
        }
        if (password.length < 6) {
            setError('password minimum 6 character')
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError('Password must have an Uppercase letter')
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError('Password must have a Lowercase letter')
            return;
        }
        // register
        createUserWithEmail(email, password)
            .then(() => {
                // console.log(result.user);
                profileUpdate(name, photo)
                    .then(() => {
                        setUser({ ...user, photoURL: photo, displayName: name })
                        // for how many user have
                        const userData = {
                            name: name,
                            email: email,
                        }
                        axios.post(`${import.meta.env.VITE_WEBSITE_API}/users`,userData)
                            .then(res => {
                                console.log("user count", res.data);
                            })
                    })
                    .catch(error => console.error(error))
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })
        form.reset()
    }


    return (
        <section className="bg-white dark:bg-gray-900">
            <Helmet>
                <title>Study Loop | Registration</title>
            </Helmet>
            <div className="flex justify-center min-h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/5" style={{ backgroundImage: `url(${reg_logo})` }}>
                </div>

                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                            Get your free account now.
                        </h1>

                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                        </p>

                        {
                            error &&
                            <div className="border-[1px] border-red-300 bg-red-100 p-2 flex gap-1">

                                <MdOutlineDangerous size={21} className="text-red-700 mt-[2px]" />
                                <div>
                                    <p>{error}</p>
                                </div>
                            </div>
                        }

                        <form onSubmit={handleRegister}>
                            <div className="grid gap-6 mt-8">
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                    <input name="firstName" type="text" placeholder="John" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                                    <input name="lastName" type="text" placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Photo URL</label>
                                    <input name="photo" type="text" placeholder="give photo url" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input name="email" type="email" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <input name="password" type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div>
                                    {/* <input name="confirm_password" type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" /> */}
                                    <input type="submit" value="Sign Up" className="cursor-pointer col-span-2 w-full px-6 py-3 text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FAA384] rounded-lg hover:bg-[#faa384d3]" />
                                </div>

                                {/* <input type="submit" value="Sign Up" className="cursor-pointer col-span-2 w-full px-6 py-3 text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FAA384] rounded-lg hover:bg-[#faa384d3]" />                              */}
                            </div>
                        </form>
                        <h1 className="text-center">If you Already have account <Link className="text-[#FAA384] text-lg font-semibold" to={'/login'}>Login</Link></h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Registration;