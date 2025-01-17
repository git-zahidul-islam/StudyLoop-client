import { useLoaderData } from "react-router-dom";
import Modal from 'react-modal';
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from 'sweetalert2'
import { toast } from "react-toastify";
import { Helmet } from 'react-helmet-async';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

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


const AssignmentsDetails = () => {
    const loaderData = useLoaderData()
    const { title, description, diff, mark, photo, date, _id } = loaderData;
    const { user } = useAuth()
    const email = user?.email;
    const name = user?.displayName;


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
        const data = { assignmentsLink, notes, status: 'pending', email, title, mark, feedback: ' ', obtainMark: ' ', examinee_name: name };
        // console.log(data);

        
        if (!/^https:\/\/docs\.google\.com\/document\//.test(assignmentsLink)){
            return toast.error('submit only Google Doc link')
        }
        if (notes.length < 2) {
            return toast.error('Right meaningful notes')
        }

        axios.post(`${import.meta.env.VITE_WEBSITE_API}/submit-assignment`, data)
            .then(() => {
                // console.log("assignments submit", res.data);
                Swal.fire({
                    title: "Good job!",
                    text: "Assignments Submit Successfully",
                    icon: "success"
                });
            })

        setIsOpen(false);
    }


    return (
        <div className="container mx-auto my-10 lg:px-0 md:px-0 px-2">
            <Helmet>
                <title>Study Loop | {title}</title>
            </Helmet>
            <div className="flex lg:flex-row md:flex-row flex-col gap-4">
                <div className="lg:h-[550px] md:h-[540px] h-[400] md:w-8/12">
                    <img className="w-full h-full" src={photo} alt="image" />
                </div>
                <div className="md:w-4/12 border-l-4 border-gray-700 md:ml-5 px-5 space-y-5 bg-[#F9C7C2]">
                    <h1 className="text-xl font-semibold">Difficulty Label: {diff}</h1>
                    <h1 className="text-xl font-semibold">Marks: {mark}</h1>
                    <h1 className="text-xl font-semibold">Due Date: {date}</h1>
                    <div className="flex justify-center flex-col">
                        <button onClick={openModal} className="p-4 bg-red-400 text-lg font-bold text-white">Submit Assignments</button>
                        <Modal
                            isOpen={modalIsOpen}
                            // onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                            <div className="min-w-80 flex flex-col">
                                <h1 className="text-center text-lg font-semibold">Submit Your Assignments Google Doc Link</h1>
                                <form onSubmit={handleAssignmentsSubmit}>
                                    <textarea className="resize-none p-4 border-2 w-full" placeholder="enter your assignments links" name="assignmentsLink" id="submit_ass"></textarea>
                                    <div>
                                        <h3>Sticky Notes</h3>
                                        <textarea className="resize-none h-28 w-full border-[1px] p-2" placeholder="types your notes" name="notes" id="notes"></textarea>
                                    </div>
                                    <div className="flex justify-between">
                                        <button className="px-6 py-2 rounded-xl bg-[#F87B4A] shadow-xl" onClick={closeModal}>close</button>
                                        <AwesomeButton>
                                        <input className="px-4 py-1 rounded-2xl  cursor-pointer" type="submit" value="Submit" />
                                        </AwesomeButton>
                                    </div>
                                </form>
                            </div>
                        </Modal>
                    </div>
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