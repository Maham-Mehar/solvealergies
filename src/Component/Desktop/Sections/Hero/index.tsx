const Hero = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-white relative">
                {/* Left Section */}
                <div className="space-y-6 justify-center max-w-xl mx-auto items-center">
                    <p className="text-3xl md:text-5xl font-semibold text-green-900 leading-snug">
                        The greatest investment you can make is in <br />
                        <span className="underline decoration-green-500">Yourself</span>
                    </p>
                    <div className="space-x-4">
                        <div>
                            <button className="px-36 py-2 border-2 border-green-900 rounded-full font-medium hover:bg-green-900 hover:text-white transition">
                                Get App Access
                            </button>
                        </div>
                        <div className=" mt-5">
                            <button className="px-36 py-2 border-2 border-green-900 rounded-full font-medium hover:bg-green-900 hover:text-white transition">
                                Watch Webinar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    <div className="relative ms-35 w-[80%] h-[700px] bg-[url(/images/bg1.png)] bg-cover bg-no-repeat flex justify-center items-center">
                        <img src="/images/image1.png" alt="Phone" className="absolute w-[60%] md:w-[60%] top-0" />
                    </div>
                    <img src="/images/image2.png" alt="Meditating person" className="absolute bottom-0 w-[25%] md:w-[25%] left-190" />

                </div>
            </div>
            <div className="max-w-6xl mx-auto flex text-center mt-7 justify-center">
                <p className="text-[30px] font-normal text-[#11401C]">Experience daily healing sessions, seamless communication with expert practitioners, personalized milestone tracking, an engaging reward system, and a complete history of your wellness journey—all in one app.</p>

            </div>
        </div>
    );
};

export default Hero;
