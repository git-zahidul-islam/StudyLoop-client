import axios from "axios";
import { useEffect, useState } from "react";
import AssignCard from "../components/assignCard/AssignCard";



const Assignments = () => {
    const [data, setData] = useState([])
    const [filter,setFilter] = useState(' ')

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_WEBSITE_API}/assignments?filter=${filter}`)
            .then(res => {
                console.log("the getting data:", res.data);
                setData(res.data)
            })
    }, [filter])



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
                    data.map(a => <AssignCard key={a._id} assData={a}></AssignCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;