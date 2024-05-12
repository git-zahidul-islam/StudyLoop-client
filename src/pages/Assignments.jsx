import axios from "axios";
import { useEffect, useState } from "react";
import AssignCard from "../components/assignCard/AssignCard";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'



const Assignments = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(' ')
    const { user } = useAuth()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_WEBSITE_API}/assignments?filter=${filter}`)
            .then(res => {
                console.log("the getting data:", res.data);
                setData(res.data)
            })
    }, [filter])

    const handleDelete = (id) => {
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
                axios.delete(`${import.meta.env.VITE_WEBSITE_API}/assignments/${id}?email=${user?.email}`)
                    .then(res => {
                        if (res.data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Assignment successfully deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = data.filter(ass => ass._id !== id)
                        setData(remaining)
                    })
            }
        });
    }


    return (
        <div className="container mx-auto my-10">
            <div className="text-center mb-10 w-2/12 mx-auto">
                <label htmlFor="select" className="block">Choose Category</label>
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
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8">
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