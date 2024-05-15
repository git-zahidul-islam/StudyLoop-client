import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import Slide from './Slide';
// image
import photo1 from "../../assets/student1.png"
import photo2 from "../../assets/student2.png"
import photo3 from "../../assets/student3.png"


const heading1 = <h1>Welcome to <span className='text-[#F87B4A]'>Study Loop</span> - Elevate Your Learning Experience</h1>
const heading2 = <h1>Where Learning Meets <span className='text-[#F87B4A]'>Efficiency</span></h1>
const heading3 = <h1>Discover and <span className='text-[#F87B4A]'>navigate</span> Your Academic Journey</h1>

// description
const des1 = <p>Experience a seamless blend of technology and education at Study Loop. Elevate your learning journey with interactive tools, personalized resources, and a supportive community dedicated to academic excellence.</p>
const des2 = <p>Embark on a journey of efficiency and productivity with Study Loop. Join a dynamic platform where learning is optimized through intuitive features, streamlined processes, and collaborative opportunities.</p>
const des3 = <p>Navigate your academic path with confidence on Study Loop. Discover a platform designed to guide you through every step of your educational journey, offering resources, support, and opportunities for growth.</p>

const Slider = () => {
    
    return (
        <div>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[ Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide image={photo1} text={heading1} des={des1}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={photo2} text={heading2} des={des2}></Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={photo3} text={heading3} des={des3}></Slide>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Slider;