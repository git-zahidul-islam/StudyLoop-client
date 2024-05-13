import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from '../provider/AuthProvider';

// import { RotatingLines } from 'react-loader-spinner';



const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    // console.log("this is private router",location.pathname)

    if (loading) {
        return (
            <div className='flex justify-center items-center h-[calc(100vh-180px)]'>
                {/* <RotatingLines
                    visible={true}
                    height="130"
                    width="130"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                /> */}
                <h1 className='text-5xl text-green-600 font-extrabold'>loading ....</h1>
            </div>
        )
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};


export default PrivateRouter;