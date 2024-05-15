import { RiNumbersLine } from "react-icons/ri";
import { MdOutlineDifference } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { CiRead } from "react-icons/ci";
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();



const AssignCard = ({ assData, handleDelete }) => {
    const { diff, photo, title, mark, _id,email } = assData;
    
    return (
        <div data-aos="zoom-in" data-aos-once="true" className="overflow-hidden bg-white rounded-t-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:bg-gray-800">
            <img className="object-cover object-center w-full h-56" src={photo} alt="avatar" />

            <div className="flex items-center justify-around py-3 bg-[#F87B4A]">
                <h1 className="text-lg font-semibold text-[#FFFAE6] flex items-center gap-3"><MdOutlineDifference size={30} />{diff}</h1>
                <h1 className="text-lg font-semibold text-[#FFFAE6] flex items-center gap-3"><RiNumbersLine size={30} />{mark}</h1>
            </div>

            <div className="">
                <h1 className="text-xl min-h-16 font-semibold text-gray-700 dark:text-white my-3">{title}</h1>
                <div className="text-white font-semibold flex w-full">
                    <div className="w-1/3 text-center bg-[#59dbe7eb]">
                        <Link to={`/update-assignments/${_id}`}>
                        <button className="p-3 flex items-center gap-3 justify-center w-full"><GrUpdate size={20} />Update</button>
                        </Link>
                    </div>
                    <div className="w-1/3 text-center bg-[#C63D95]">
                        <button onClick={() => handleDelete(email,_id)} className="p-3 flex items-center gap-3 justify-center w-full"><MdOutlineDeleteForever size={25} />Delete</button>
                    </div>
                    <div className="w-1/3 text-center bg-[#A6CF33]">
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