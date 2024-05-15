import faqBg from '../../assets/otherIMG/faqbg.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();

const Faq = () => {
    return (
        <div style={{backgroundImage: `url(${faqBg})`, backgroundPosition: 'right bottom', backgroundRepeat: 'no-repeat', backgroundSize: '1100px'}}>
            {/* bg-white dark:bg-gray-900 */}
            <section className="min-h-[650px]">
                <div className="container max-w-4xl px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions</h1>

                    <div className="mt-12 space-y-8">                        
                        <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" data-aos-once="true" className="collapse collapse-plus border-2 border-gray-500 rounded-lg dark:border-gray-700">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                How can I join a study group on your website?
                            </div>
                            <div className="collapse-content">
                                <p>To join a study group on our website, simply sign up for an account if you haven't already. Once logged in, browse through the available study groups or use the search feature to find a group that matches your interests or study needs. Click on the group you're interested in, and if it's open for new members, you'll find an option to join the group. Some groups may require approval from the group administrator before you can join.</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="350" data-aos-duration="1000" data-aos-once="true" className="collapse collapse-plus border-2 border-gray-500 rounded-lg dark:border-gray-700">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                What features does your platform offer to facilitate effective group studying?
                            </div>
                            <div className="collapse-content">
                                <p>Our platform offers a range of features to enhance your group study experience. These include:</p>
                                <ul>
                                    <li className="text-sm">1. Group Chat: Each study group has its own dedicated chat room where members can communicate in real-time, ask questions, and share resources.</li>
                                    <li className="text-sm">2. File Sharing: Members can upload and share study materials, documents, and resources with the group.</li>
                                    <li className="text-sm">3. Event Scheduling: Plan study sessions or group meetings by scheduling events within the group, allowing members to coordinate their study efforts.</li>
                                    <li className="text-sm">4. Discussion Forums: Engage in topic-specific discussions within the group forums to deepen understanding and exchange ideas.</li>
                                </ul>
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true" className="collapse collapse-plus border-2 border-gray-500 rounded-lg dark:border-gray-700">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Can I create my own study group on your platform?
                            </div>
                            <div className="collapse-content">
                                <p>Absolutely! If you can't find a study group that matches your needs, you can create your own. Simply navigate to the "Create Group" option, provide details such as the group name, description, and any specific guidelines or requirements, and set the privacy settings for your group. Once created, you can invite others to join and start collaborating right away.</p>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="450" data-aos-duration="1000" data-aos-once="true" className="collapse collapse-plus border-2 border-gray-500 rounded-lg dark:border-gray-700">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Are there any fees associated with using your website or joining study groups?
                            </div>
                            <div className="collapse-content">
                                <p>Our platform is free to use for all registered users. There are no fees associated with creating an account, joining study groups, or accessing the platform's features. We believe in making education accessible to everyone, and our goal is to provide a supportive online environment for collaborative learning without financial barriers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;