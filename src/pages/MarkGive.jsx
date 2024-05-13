import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const MarkGive = () => {
    const loaderData = useLoaderData()
    const [data,setData] = useState(loaderData)
    const { obtainMark, mark, feedback, assignmentsLink, notes,_id } = data;
    const navigate = useNavigate()
    console.log("mark", loaderData);

    

    const handleMarkUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const feedback = form.feedback.value;
        const obtainMark = form.obtainMark.value;
        const status = "completed"
        const markGive = {feedback,obtainMark,status}
        console.log(markGive);

        axios.put(`${import.meta.env.VITE_WEBSITE_API}/give-mark/${_id}`, markGive)
            .then(res => {
                console.log("mark give done", res.data);
                toast.success('Mark Update Successfully')
                navigate('/pending-assignments')
            })
            .catch(error => console.error(error))
    }



return (
    <div className="container mx-auto my-10">
        <div className="flex items-center flex-col">
            <h1 className="text-lg font-semibold mb-5">Mark Given Form</h1>
            <form onSubmit={handleMarkUpdate}>
                <div className="flex gap-5 p-4 lg:flex-row md:flex-row flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className="bg-[#807182] text-white p-4 lg:w-[600px] md:w-96 space-y-3">
                        <div className="space-y-2">
                            <h1 className="text-xl">Assignments Link</h1>
                            <p className="border-2 border-[#F9C7C2] rounded-xl min-h-20 p-2">{assignmentsLink}</p>
                            <button className="p-2 bg-[#0c0b0ae4] mt-2">view link</button>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-xl">Examinee Notes</h1>
                            <p className="border-2 border-[#F9C7C2] rounded-xl min-h-20 p-2">{notes}</p>
                        </div>
                    </div>
                    <div className="bg-[#F9C7C2] p-4 space-y-2">
                        <h1 className="text-lg">Give Mark Within <span className="text-xl font-medium text-red-600">{mark}</span></h1>
                        <div className="space-y-2">
                            <h1 className="text-lg">Give Obtain Mark</h1>
                            <input defaultValue={obtainMark} className="p-2 rounded-xl" type="number" placeholder="mark give 10 to 100" name="obtainMark" id="obtainMark" />
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-lg">Give Feed back</h1>
                            <textarea defaultValue={feedback} className="p-2 h-20 resize-none w-full rounded-xl" name="feedback" id="feedback" />
                        </div>
                        <div className="flex justify-center">
                            <input className="ps-4 p-2 border-2 rounded-2xl cursor-pointer bg-[#807182] text-white" type="submit" value="Update Mark" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
);
};

export default MarkGive;