import React from "react";
import { Link } from "react-router-dom";
import circle from "../assets/circle.webp"
import AboutImg from "../assets/about-bg.jpg"
function Home() {
    const stats = [
        {
            data: "06",
            title: "Customers"
        },
        {
            data: "150+",
            title: "Students"
        },
        {
            data: "3",
            title: "Countries"
        },
        {
            data: "300K+",
            title: "Total revenue"
        }
    ];
    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
            title: " Web Development",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>,
            title: "App Development",
            desc: "We build responsive, fast, and user-friendly websites tailored to your business needs. Whether it’s an e-commerce platform or a portfolio site, we turn your vision into a reality."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: "Digital Marketing",
            desc: "Maximize your online presence with our data-driven digital marketing strategies. We help you grow your brand through SEO, social media, PPC, and more, ensuring your business reaches the right audience."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>,
            title: "E-Learning Solutions",
            desc: "Empower learning with our interactive e-learning platforms. We create custom educational solutions that engage users and enhance their knowledge, making learning more accessible and enjoyable."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>,
            title: "SEO Optimization",
            desc: "Boost your website’s visibility with our expert SEO services. We improve your search rankings, drive organic traffic, and help your business stand out in an increasingly competitive market."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>,
            title: "Website Maintenance",
            desc: "Keep your website running smoothly with our maintenance services. We provide regular updates, bug fixes, and security checks to ensure your site stays up-to-date and secure."
        },
    ]
    return (
        <>
            <section className="bg-gray-900 min-h-[calc(100vh-88px)] flex items-center relative overflow-x-clip">
                <div
                    className="absolute inset-0 blur-xl "
                    style={{
                        background:
                            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.16) 40.92%, rgba(35, 127, 255, 0.08) 70.35%"
                    }}
                ></div>
                <div className="absolute z-0 -right-32 animate-spin-slow  w-1/2 "><img src={circle} alt="" className="" /></div>
                <section className="mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8 z-10">
                    <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                        <h1 className="text-white font-bold text-4xl xl:text-5xl">
                            One page Template for
                            <span className="text-indigo-400"> Digital agency</span>
                        </h1>
                        <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The
                            point of using Lorem Ipsum
                        </p>
                        <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                            <a
                                href="javascript:void(0)"
                                className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
                            >
                                Get started
                            </a>
                            <a
                                href="javascript:void(0)"
                                className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
                            >
                                Try it out
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                        <img
                            src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
                            className="w-full mx-auto sm:w-10/12  lg:w-full"
                        />
                    </div>
                </section>
            </section>
            <section className="py-14 relative">
                <div
                    className="absolute inset-0 blur-xl "
                    style={{
                        background:
                            "linear-gradient(200.6deg, #73f0ff0a 20.79%, rgb(0 99 255 / 13%) 40.92%, rgb(142 32 255 / 5%) 70.35%)"
                    }}
                ></div>
                <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-gray-400">Empowering your business with innovative technology solutions</h3>
                        <h1 className="text-3xl font-semibold sm:text-4xl text-gray-100">
                            Connect with the world’s most <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#9814e5]"> dependable IT solutions.</span>
                        </h1>

                    </div>
                    <div className="mt-12">
                        <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                features.map((item, idx) => (
                                    <li key={idx} className="space-y-3 border-2 py-6 px-2 rounded-lg border-gray-600">
                                        <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-lg text-gray-50 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-400">
                                            {item.desc}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>

            <section className="min-h-[calc(100vh-88px)] relative ">
                <div
                    className="absolute inset-0 blur-[118px] max-w-lg top-52 mx-auto sm:max-w-3xl sm:h-[400px]"
                    style={{
                        background:
                            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)"
                    }}
                ></div>
                <div className="max-w-screen-xl mx-auto px-4 py-10 gap-12 text-gray-600 md:px-8">
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        <h1 className="text-indigo-600 font-medium text-xl">
                            Build products for everyone
                        </h1>
                        <h2 className="text-3xl text-gray-800 font-extrabold mx-auto md:text-4xl">
                            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#9814e5]">

                                Driven by Vision,
                            </span>
                            <span className="bg-white px-2 rounded-sm ">
                                Powered by Mission
                            </span>
                        </h2>
                    </div>
                    <div className="flex justify-between mt-20">
                        <div className="w-2/5 overflow-hidden rounded-full ">
                            <img src="https://www.bytescrum.com/_next/image/?url=%2Fimages%2Faboutus.webp&w=640&q=75" alt="" />
                        </div>
                        <div className="w-1/2">
                            <div className="px-6 mb-4 ">
                                <h1 className="text-4xl font-semibold text-white text-left mb-1"> Our <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#46a5e5] to-[#1461e5]">Vision</span></h1>
                                <p className="text-gray-400 text-justify">To empower businesses with cutting-edge digital solutions that inspire innovation, drive growth, and create meaningful change. We aim to be the go-to IT partner for businesses looking to thrive in the ever-evolving digital landscape.</p>
                            </div>
                            <div className="px-6 my-4 ">
                                <h1 className="text-4xl font-semibold text-white text-left mb-1"> Our <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#46a5e5] to-[#1461e5]">Mission</span></h1>
                                <p className="text-gray-400 text-justify">Our mission is simple: to deliver high-quality, tailored IT solutions that align with our clients’ goals. We are committed to fostering long-term partnerships by offering creative, reliable, and sustainable services that help businesses unlock their true potential.</p>
                            </div>
                            <div className="px-6 my-4">
                                <h1 className="text-4xl font-semibold text-white text-left mb-1"> Our <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#46a5e5] to-[#1461e5]">Approach</span></h1>
                                <p className="text-gray-400 text-justify">In everything we do, we put people first. We listen, we collaborate, and we innovate—working closely with our clients to understand their challenges and deliver solutions that make a difference. We believe in creating value through transparency, creativity, and a genuine passion for technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-14">
                    <div className="bg-white bg-opacity-20 p-8 text-center rounded-md backdrop-blur-sm ">
                        <h2 className="text-gray-50 text-xl font-extrabold sm:text-2xl mb-4">
                            Who we are?
                        </h2>
                        <p className="text-gray-200 mb-5">
                            We’re a team of passionate tech experts focused on bringing your
                            ideas to life. From web development to digital marketing, we
                            provide tailored solutions that help businesses grow in today’s
                            digital world.
                        </p>
                        <Link title="Know More" className="text-blue-400 p-5 ">
                            Know More
                        </Link>
                    </div>
                    <div className="bg-white bg-opacity-20 p-8 text-center rounded-md backdrop-blur-sm">
                        <h2 className="text-gray-50 text-xl font-extrabold sm:text-2xl mb-4">
                            Why Choose Us?
                        </h2>
                        <p className="text-gray-200 mb-5">
                            We build more than just solutions—we build trust. With
                            personalized services, top-notch quality, and dedicated support,
                            we ensure your business thrives every step of the way.
                        </p>
                        <Link title="Know More" className="text-blue-400 p-5 ">
                            Know More
                        </Link>
                    </div>
                    <div className="bg-white bg-opacity-20 p-8 text-center rounded-md backdrop-blur-sm">
                        <h2 className="text-gray-50 text-xl font-extrabold sm:text-2xl mb-4">
                            What Drives Us?
                        </h2>
                        <p className="text-gray-200 mb-5">
                            Integrity, innovation, and collaboration drive everything we do.
                            We’re committed to delivering creative, transparent solutions that
                            prioritize your success and lasting results.
                        </p>
                        <Link title="Know More" className="text-blue-400 p-5 ">
                            Know More
                        </Link>
                    </div>
                </div>
            </section>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <section className="py-14 relative">
                <div
                    className="absolute inset-0 blur-[118px] max-w-lg sm:max-w-xl sm:h-[400px]"
                    style={{
                        background:
                            "linear-gradient(0.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)"
                    }}
                ></div>
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-gray-400 text-3xl font-semibold sm:text-4xl">
                            Our Clients are always happy
                        </h3>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                            venenatis sollicitudin quam ut tincidunt.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                            {stats.map((item, idx) => (
                                <li key={idx} className="text-center px-12 md:px-16">
                                    <h4 className="text-4xl text-indigo-600 font-semibold">
                                        {item.data}
                                    </h4>
                                    <p className="mt-3 font-medium">{item.title}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
