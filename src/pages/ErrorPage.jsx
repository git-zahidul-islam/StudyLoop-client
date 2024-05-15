import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section className="bg-white dark:bg-gray-900 ">
            <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                <div className="wf-ull lg:w-1/2">
                    <p className="text-lg font-medium text-red-600 dark:text-red-600">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.</p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <Link to={'/'}>
                            <button className="px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 bg-[#F87B4A] rounded-lg shrink-0 sm:w-auto hover:bg-[#f87b4adf] dark:hover:bg-[#F87B4A] dark:bg-[#e06b3c]">
                                Take me home
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full max-w-lg lg:mx-auto" src={'https://i.ibb.co/nkYxqVm/404-error-with-cute-animal-concept-illustration-114360-1880.jpg'} alt="" />
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;