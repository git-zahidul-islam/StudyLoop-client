import { MdLibraryAdd } from "react-icons/md";

const CreateAssignments = () => {
    return (
      <div className="w-9/12 mx-auto my-20 flex lg:flex-row md:flex-row flex-col-reverse">
        <div className="md:w-4/12 bg-[#807182] p-10">
          <h1 className="text-2xl font-bold text-white flex items-center gap-4"><span className="text-[#F9C7C2]"><MdLibraryAdd size={35}/></span>Assignments</h1>
        </div>
        <div className="md:w-8/12 bg-[#F9C7C2] p-10">
          <h1>Create Assignments</h1>
          <form>
            <div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="text-sm">Title</label>
                <input name="title" id="title" type="text" placeholder="title" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 outline-none p-2" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="text-sm">Photo URL</label>
                <input name="photo" id="photo" type="text" placeholder="photo" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 outline-none p-2" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="text-sm">Mark</label>
                <input name="mark" id="mark" type="number" placeholder="mark" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 outline-none p-2" />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="text-sm">Due Date</label>
                <input name="date" id="date" type="date" placeholder="date" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 outline-none p-2" />
              </div>
              <div>
                <label htmlFor="title" className="text-sm">Difficulty</label>
                <select name="diff" id="diff" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2">
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <div>
                <label htmlFor="description" className="text-sm">Description</label>
                <textarea name="description" className="textarea resize-none h-20 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" placeholder="Bio"></textarea>
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