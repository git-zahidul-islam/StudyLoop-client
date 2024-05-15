import axios from "axios";
import { useEffect, useState } from "react";
import AssignCard from "../components/assignCard/AssignCard";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';



const Assignments = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(' ')
    const { user } = useAuth()
    // console.log(user?.email);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_WEBSITE_API}/assignments?filter=${filter}`)
            .then(res => {
                setData(res.data)
            })
    }, [filter])

    const handleDelete = (email,_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_WEBSITE_API}/assignments/${user?.email}?email=${email}`)
                    .then(res => {
                        if (res.data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Assignment successfully deleted.",
                                icon: "success"
                            });
                            const remaining = data.filter(ass => ass._id !== _id)
                            setData(remaining)
                        }
                        if (res.data.message == 'unAuthorized'){
                            Swal.fire({
                                title: "UnAuthorized!",
                                text: "You are not Assignments Creator",
                                icon: "error"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div className="container mx-auto my-10">
            <Helmet>
                <title>Study Loop | Assignment</title>
            </Helmet>
            <div className="text-center mb-10  mx-auto">
                <label htmlFor="select" className="block text-lg font-semibold">Choose Difficulty</label>
                <select
                    onChange={e => setFilter(e.target.value)}
                    value={filter}
                    name="diff" id="diff" className="select select-bordered w-full max-w-xs text-center">
                    <option value=' ' >All Data</option>
                    <option value='Easy'>Easy</option>
                    <option value='Medium'>Medium</option>
                    <option value='Hard'>Hard</option>
                </select>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8 lg:px-0 md:px-0 px-2">
                {
                    data.map(a => <AssignCard
                        handleDelete={handleDelete}
                        key={a._id}
                        assData={a}
                    ></AssignCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;