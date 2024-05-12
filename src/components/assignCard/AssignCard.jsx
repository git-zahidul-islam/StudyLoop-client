import { RiNumbersLine } from "react-icons/ri";
import { MdOutlineDifference } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { CiRead } from "react-icons/ci";
import { Link } from "react-router-dom"



const AssignCard = ({ assData, handleDelete }) => {
    const { diff, photo, title, mark, _id } = assData;


    return (
        <div className=" overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover object-center w-full h-56" src={photo} alt="avatar" />

            <div className="flex items-center justify-around py-3 bg-gray-900">
                <h1 className="text-lg font-semibold text-white flex items-center gap-3"><MdOutlineDifference size={30} />{diff}</h1>
                <h1 className="text-lg font-semibold text-white flex items-center gap-3"><RiNumbersLine size={30} />{mark}</h1>
            </div>

            <div className="py-3">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h1>
                <div className="text-white font-semibold flex w-full">
                    <div className="w-1/3 text-center bg-purple-300">
                        <button className="p-3 flex items-center gap-3 justify-center w-full"><GrUpdate size={20} />Update</button>
                    </div>
                    <div className="w-1/3 text-center bg-purple-400">
                        <button onClick={() => handleDelete(_id)} className="p-3 flex items-center gap-3 justify-center w-full"><MdOutlineDeleteForever size={25} />Delete</button>
                    </div>
                    <div className="w-1/3 text-center bg-purple-500">
                        <Link to={`/assignments/${_id}`}>
                            <button className="p-3 flex items-center gap-3 justify-center w-full"><CiRead size={25} />View</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignCard;