import { useLoaderData } from "react-router-dom";
import Modal from 'react-modal';
import React from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
// modal part
Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)



const AssignmentsDetails = () => {
    const loaderData = useLoaderData()
    const { title, description, diff, mark, photo, due_date, _id } = loaderData;
    const { user } = useAuth()
    const email = user?.email;


    // modal part
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    // others
    const handleAssignmentsSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const assignmentsLink = form.assignmentsLink.value;
        const notes = form.notes.value;
        const data = { assignmentsLink, notes, status: 'pending', email, _id }
        console.log(data);

        axios.post(`${import.meta.env.VITE_WEBSITE_API}/submit-assignment`, data)
            .then(res => {
                console.log("assignments submit", res.data);
            })

        setIsOpen(false);
    }


    return (
        <div className="container mx-auto">
            <div className="flex">
                <div className="w-8/12 h-[550px]">
                    <img className="w-full h-full" src={photo} alt="image" />
                </div>
                <div className="w-4/12 border-l-4 border-gray-700 ml-5 px-5 space-y-5 bg-[#F9C7C2]">
                    <h1 className="text-xl font-semibold">Difficulty Label: {diff}</h1>
                    <h1 className="text-xl font-semibold">Marks: {mark}</h1>
                    <h1 className="text-xl font-semibold">Due Date: {due_date}</h1>
                    <div className="flex justify-center flex-col">
                        <h1 className="text-center">Take Assignments</h1>
                        <button onClick={openModal} className="p-4 bg-red-400">Modal</button>
                        <Modal
                            isOpen={modalIsOpen}
                            // onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                            <div className="min-w-96 flex flex-col">
                                <h1 className="text-center text-xl font-semibold">Submit Your Assignments Link</h1>
                                <form onSubmit={handleAssignmentsSubmit}>
                                    <textarea className="resize-none p-4 border-2 w-full" placeholder="enter your assignments links" name="assignmentsLink" id="submit_ass"></textarea>
                                    <div>
                                        <h3>Sticky Notes</h3>
                                        <textarea className="resize-none h-28 w-full border-[1px] p-2" placeholder="types your notes" name="notes" id="notes"></textarea>
                                    </div>
                                    <div className="flex justify-between">
                                        <button className="px-4 py-1 rounded-2xl border-2 border-pink-600" onClick={closeModal}>close</button>
                                        <input className="px-4 py-1 rounded-2xl border-2 border-pink-600" type="submit" value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </Modal>
                    </div>
                    {/* modal  */}

                </div>
            </div>
            <div className="space-y-5 mt-5">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AssignmentsDetails;