import { MdLibraryAdd } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import photo from "../assets/student3.png"
import { Helmet } from 'react-helmet-async';



const CreateAssignments = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth()
  const email = user?.email;



  const handleForm = (e) => {
    e.preventDefault()
    const form = e.target;
    const title = form.title.value;
    const mark = form.mark.value;
    const photo = form.photo.value;
    const date = form.date.value;
    const diff = form.diff.value;
    const description = form.description.value;
    const assignmentsInfo = { title, mark, photo, date, diff, description, email }

    // fetch data use axios
    axios.post(`${import.meta.env.VITE_WEBSITE_API}/assignments`, assignmentsInfo, { withCredentials: true })
      .then(() => {
        toast.success('Assignments Added')
      })
      .catch(error => console.error(error))
    form.reset()
  }



  return (
    <div className="w-9/12 mx-auto my-20 flex lg:flex-row md:flex-row flex-col-reverse">
      <Helmet>
        <title>Study Loop | Create Assignments</title>
      </Helmet>
      <div className="md:w-4/12 bg-[#807182] p-10" style={{ backgroundImage: `url(${photo})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left bottom' }}>
        <h1 className="text-2xl font-bold text-white flex items-center gap-4"><span className="text-[#F9C7C2]"><MdLibraryAdd size={35} /></span>Assignments</h1>
      </div>
      <div className="md:w-8/12 bg-[#F9C7C2] lg:p-10 md:p-10 p-2">
        <h1 className="text-xl font-bold mb-5">Create Assignments</h1>
        <form onSubmit={handleForm}>
          <div className="">
            <div className="">
              <label htmlFor="title" className="text-sm">Title</label>
              <input name="title" id="title" type="text" placeholder="title" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 outline-none p-2" />
            </div>
            <div className="">
              <label htmlFor="title" className="text-sm">Photo URL</label>
              <input name="photo" id="photo" type="text" placeholder="photo" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 outline-none p-2" />
            </div>
            <div className="">
              <label htmlFor="title" className="text-sm">Mark</label>
              <input name="mark" id="mark" type="number" placeholder="mark" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 outline-none p-2" />
            </div>
            <div className="">
              <label htmlFor="title" className="text-sm">Due Date</label>
              <div className="">
                <DatePicker name="date" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 outline-none p-2" selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
              {/* <input name="date" id="date" type="date" placeholder="date" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 outline-none p-2" /> */}
            </div>
            <div className="">
              <label htmlFor="title" className="text-sm">Difficulty</label>
              <select name="diff" id="diff" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2">
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div className="col-span-2">
              <label htmlFor="description" className="text-sm">Description</label>
              <textarea name="description" className="textarea resize-none h-32 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" placeholder="Type your Description"></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <input className="px-4 py-3 bg-[#807182] rounded-3xl text-white mt-5 cursor-pointer" type="submit" value="Add Assignments" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignments;