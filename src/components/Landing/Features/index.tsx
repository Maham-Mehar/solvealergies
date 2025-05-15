"use client";
import Image from "next/image";

const Features = () => {
    return (
        <div className="relative">
            <Image
                src='/images/group.png'
                alt='mockup'
                width={163}
                height={95}
                className="absolute right-0 top-[-70px] sm:top-[-100px] md:top-[-200px] w-[30px] sm:w-[50px] md:w-[100px]"
            />
            <p className="text-center font-poppins font-bold text-[44px] text-green">
                Other Features
            </p>
            <div className="relative z-10">
                {/* Background Ellipse Image (Backwards) */}
                <div className="hidden md:block absolute top-[-25px] sm:top-[-62px] md:top-[-105px] lg:top-[-160px] xl:top-[-295px] 2xl:top-[-310px] left-[20px] sm:left-[44px] md:left-[40px] lg:left-[50px] xl:left-[70px] 2xl:left-[190px] z-0">
                    <Image
                        src="/images/ellipse.png"
                        alt="mockup"
                        width={1259}
                        height={832}
                        className="sm:h-[370px] md:h-[470px] lg:h-[600px] xl:h-[832px] w-[350px] sm:w-[450px] sm:ps-[20px] md:ps-[75px] lg:ps-0 md:w-[610px] lg:w-[920px] xl:w-[1150px] 2xl:w-[1009px]"
                    />
                </div>

                {/* Feature Two Image (Second Layer - Backwards) */}
                <div className="absolute top-[-50px] sm:top-[-60px] md:top-[-80px] lg:top-[-130px] xl:top-[-100px] right-[1rem] sm:right-[5rem] md:right-[7.5rem] lg:right-[4rem] xl:right-[15rem] z-10">
                    <Image
                        src='/images/feature_three.png'
                        alt='mockup'
                        width={500}
                        height={600}
                        className="xl:h-[600px] lg:h-[530px] md:h-[400px] sm:h-[320px] h-[280px] w-[150px] sm:w-[180px] md:w-[200px] lg:w-[340px] xl:w-[650px] 2xl:w-[400px]"
                    />
                </div>

                {/* Feature One Image */}
                <div className="absolute top-[-40px] sm:top-[-60px] md:top-[-80px] lg:top-[-130px] xl:top-[-100px] left-[1rem] sm:left-[5rem] md:left-[7.5rem] lg:left-[4rem] xl:left-[14rem] z-40">
                    <Image
                        src='/images/feature_one.png'
                        alt='mockup'
                        width={400}
                        height={600}
                        className="xl:h-[600px] lg:h-[530px] md:h-[400px] sm:h-[320px] h-[280px] w-[150px] sm:w-[180px] md:w-[200px] lg:w-[340px] xl:w-[400px] 2xl:w-[400px]"
                    />
                </div>

                {/* Centered Feature Image (Topmost Layer) */}
                <div className="absolute top-[-90px] sm:top-[-190px] md:top-[-230px] lg:top-[-360px] left-1/2 transform -translate-x-1/2 z-30">
                    <Image
                        src='/images/feature_two.png'
                        alt='mockup'
                        width={400}
                        height={600}
                        className="xl:h-[600px] lg:h-[530px] md:h-[400px] sm:h-[320px] h-[280px] w-[150px] sm:w-[180px] md:w-[200px] lg:w-[340px] xl:w-[650px] 2xl:w-[400px]"
                    />
                </div>

                {/* Background Section */}
                <div className="h-[160px] sm:h-[210px] md:h-[250px] lg:h-[290px] xl:h-[331px] w-full bg-[url('/images/feature_bg.svg')] bg-cover bg-center mt-[120px] sm:mt-[200px] md:mt-[250px] lg:mt-[380px] xl:mt-[440px]" />
            </div>
        </div>
    );
};

export default Features;




























// "use client";
// import Image from "next/image";

// const Features = () => {
//     return (
//         <div className="relative px-3 py-[25px]">
//             <Image
//                 src='/images/group.png'
//                 alt='mockup'
//                 width={163}
//                 height={75}
//                 className="absolute right-0 top-[-70px] sm:top-[-100px] md:top-[-200px] w-[30px] sm:w-[50px] md:w-[100px]"
//             />
//             <p className="text-center font-poppins font-bold text-[44px] my-[24px] text-green">
//                 Other Features
//             </p>
//             <div className="relative z-10">
//                 {/* Background Ellipse Image (Backwards) */}
//                 <div className="absolute top-[-25px] sm:top-[-62px] md:top-[-105px] lg:top-[-160px] xl:top-[-295px] 2xl:top-[-360px] left-[20px] sm:left-[44px] md:left-[40px] lg:left-[50px] xl:left-[70px] 2xl:left-[190px] z-0">
//                     <Image
//                         src='/images/Ellipse.png'
//                         alt='mockup'
//                         width={800}
//                         height={900}
//                         className="w-[350px] h-[150px] sm:w-[590px] sm:h-[200px] md:w-[720px] md:h-[250px] lg:w-[950px] lg:h-[300px] xl:w-[1150px] xl:h-[400px] 2xl:w-[1039px] 2xl:h-[900px]"
//                     />
//                 </div>

//                 {/* Feature Two Image (Second Layer - Backwards) */}
//                 <div className="absolute top-[-320px] sm:top-[-250px] md:top-[-250px] lg:top-[-170px]  xl:top-[-200px] right-[16.5rem] z-10">
//                     <Image
//                         src='/images/Feature_three.png'
//                         alt='mockup'
//                         width={650}
//                         height={902}
//                         className="w-[380px] h-[650px]" />
//                 </div>

//                 {/* Feature One Image */}
//                 <div className="absolute top-[-320px] sm:top-[-250px] md:top-[-250px] lg:top-[-170px] xl:top-[-210px] left-[2rem] sm:left-[4rem] md:left-[4rem] lg:left-[4rem] xl:left-[16rem] z-40">
//                     <Image
//                         src='/images/Feature_one.png'
//                         alt='mockup'
//                         width={650}
//                         height={932}
//                         className="w-[380px] h-[650px]" />
//                 </div>

//                 {/* Centered Feature Image (Topmost Layer) */}
//                 <div className="absolute top-[-525px] sm:top-[-420px] md:top-[-420px] lg:top-[-560px] left-1/2 transform -translate-x-1/2 z-30">
//                     <Image
//                         src='/images/Feature_two.png'
//                         alt='mockup'
//                         width={650}
//                         height={932}
//                         className="w-[380px] h-[650px]" />


//                 </div>

//                 {/* Background Section */}
//                 <div className="h-[220px] sm:h-[350px] md:h-[400px] lg:h-[351px] w-full bg-[url('/images/feature_bg.svg')] bg-cover bg-center mt-[120px] sm:mt-[200px] md:mt-[250px] lg:mt-[380px] xl:mt-[470px]" />
//             </div>
//         </div>
//     );
// };

// export default Features;
