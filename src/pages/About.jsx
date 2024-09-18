import React from 'react'
import CTA from '../components/CTA'

function About() {
    return (
        <>

            <section className='min-h-screen bg-cover bg-fixed  bg-no-repeat bg-about-bg -mt-[88px]  relative overflow-x-clip flex justify-center items-center'>
                <div className='absolute inset-0 bg-black-300 '></div>
                <h1 className='text-center text-6xl font-bold text-white relative'>About Us</h1>

            </section>
            <section className=" relative ">
                <div
                    className="absolute inset-0 blur-[118px] max-w-lg top-52 mx-auto sm:max-w-3xl sm:h-[400px]"
                    style={{
                        background:
                            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)"
                    }}
                ></div>
                <div className="mt-16 grid gap-8 sm:grid-cols-1 lg:grid-cols-12 px-14">
                    <div className="bg-white bg-opacity-20 p-8 text-center rounded-md backdrop-blur-sm lg:col-span-6">
                        <h2 className="text-gray-50 text-xl font-extrabold sm:text-2xl mb-4">
                            Who we are?
                        </h2>
                        <p className="text-gray-200 mb-5">
                            We are a dynamic IT company driven by innovation and a passion for technology. Our team of experts specializes in providing cutting-edge solutions tailored to meet the specific needs of businesses. From startups to established enterprises, we are committed to helping you grow and succeed in the digital world.
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-20 p-8 text-center rounded-md backdrop-blur-sm lg:col-span-6">
                        <h2 className="text-gray-50 text-xl font-extrabold sm:text-2xl mb-4">
                            Our Journey
                        </h2>
                        <p className="text-gray-200 mb-5">
                            From our humble beginnings to becoming a trusted name in the IT industry, we have grown through continuous learning, innovation, and a relentless pursuit of excellence. Every project, challenge, and success story has shaped who we are today.
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-20 p-8 text-center rounded-md backdrop-blur-sm lg:col-span-4">
                        <h2 className="text-gray-50 text-xl font-extrabold sm:text-2xl mb-4">
                            Our Vision
                        </h2>
                        <p className="text-gray-200 mb-5">
                            To empower businesses with cutting-edge digital solutions that inspire innovation, drive growth, and create meaningful change. We aim to be the go-to IT partner for businesses looking to thrive in the ever-evolving digital landscape.
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-20 p-8 text-center rounded-md backdrop-blur-sm lg:col-span-4">
                        <h2 className="text-gray-50 text-xl font-extrabold sm:text-2xl mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-200 mb-5">
                            Our mission is simple: to deliver high-quality, tailored IT solutions that align with our clients’ goals. We are committed to fostering long-term partnerships by offering creative, reliable, and sustainable services that help businesses unlock their true potential.
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-20 p-8 text-center rounded-md backdrop-blur-sm lg:col-span-4">
                        <h2 className="text-gray-50 text-xl font-extrabold sm:text-2xl mb-4">
                            Our Approach
                        </h2>
                        <p className="text-gray-200 mb-5">
                            In everything we do, we put people first. We listen, we collaborate, and we innovate—working closely with our clients to understand their challenges and deliver solutions that make a difference. We believe in creating value through transparency, creativity, and a genuine passion for technology.
                        </p>
                    </div>
                </div>

            </section>
            <section className=''>

            </section>
            <section className='relative mt-20 md:px-24 pb-14 text-justify overflow-x-clip'>
                <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10 "></div>

                <h1 className='text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-fuchsia-500 inline px-5 py-2 md:-ml-10 ml-2 relative'>Why choose us?</h1>
                <div className="lg:flex ">
                    <div className='lg:w-1/2 lg:mx-0 mx-10 mt-10'>
                        <p className='text-gray-300 text-lg mt-4 relative'><span className='absolute border-2 rounded-full w-3.5 h-3.5 -left-5 top-1.5 border-blue-600'></span><span className='font-semibold text-gray-100'>Experienced and Knowledgeable Team: </span> Our team consists of highly skilled professionals with extensive experience in the IT industry, ensuring top-quality solutions and exceptional service.</p>
                        <p className='text-gray-300 text-lg relative'><span className='absolute border-2 rounded-full w-3.5 h-3.5 -left-5 top-1.5 border-blue-600'></span><span className='font-semibold text-gray-100'>Results-Driven Solutions: </span>Our goal is to deliver tangible results that help our clients achieve their business objectives and drive growth.</p>
                        <p className='text-gray-300 text-lg relative'><span className='absolute border-2 rounded-full w-3.5 h-3.5 -left-5 top-1.5 border-blue-600'></span><span className='font-semibold text-gray-100'>Innovation and Creativity: </span>We embrace innovation and stay up-to-date with the latest technologies to provide cutting-edge solutions that set our clients apart from the competition.</p>
                        <p className='text-gray-300 text-lg relative'><span className='absolute border-2 rounded-full w-3.5 h-3.5 -left-5 top-1.5 border-blue-600'></span><span className='font-semibold text-gray-100'>Client-Centric Approach: </span> We prioritize the needs of our clients and strive to build long-term partnerships based on trust, transparency, and open communication.</p>
                    </div>
                    <div className='w-1/3  mx-10'> </div>
                </div>
            </section>
            <CTA/>
        </>
    )
}

export default About