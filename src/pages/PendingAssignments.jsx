import axios from "axios";
import { useEffect, useState } from "react";


const PendingAssignments = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_WEBSITE_API}/submit-assignment`)
            .then(res => {
                console.log("the getting", res.data);
                setData(res.data)
            })
    },[])
    
    return (
        <div className="container mx-auto my-5 space-y-2">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-medium">All Pending Post</h1>
                <h1 className="p-2 bg-gray-300">Pending: <span className="text-white text-base bg-slate-500 p-1 rounded-xl">1</span></h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-200">
                        <tr>
                            <th>Title</th>
                            <th>Mark</th>
                            <th>Examinee Name</th>
                            <th>Give Mark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(ass => <tr key={ass._id}>
                                <th>{ass.title}</th>
                                <td>{ass.mark}</td>
                                <td>{ass?.examinee_name}</td>
                                <td><button className="p-2 bg-green-300">Give Mark</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingAssignments;