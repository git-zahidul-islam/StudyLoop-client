import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from '../provider/AuthProvider';

import { RevolvingDot } from 'react-loader-spinner';



const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    // console.log("this is private router",location.pathname)

    if (loading) {
        return (
            <div className='flex justify-center items-center h-[calc(100vh-180px)]'>
               <RevolvingDot
                    visible={true}
                    height="150"
                    width="150"
                    color="#4fa94d"
                    ariaLabel="revolving-dot-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        )
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};


export default PrivateRouter;