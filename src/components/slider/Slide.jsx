
import bg1 from '../../assets/otherIMG/blob-haikei.svg'

const Slide = ({text,des, image}) => {
    return (
        <div className='h-[600px] flex flex-col justify-center'>
            <header className="dark:bg-gray-900">
                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{text}</h1>
                                <p className="mt-3 text-gray-600 dark:text-gray-400">{des}</p>
                            </div>
                        </div>

                        <div style={{ backgroundImage: `url(${"https://i.ibb.co/r7Gbrj7/blob-haikei.png"})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '620px' }} className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full max-w-md" src={image} alt="email illustration vector art" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Slide;