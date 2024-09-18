// Services.jsx
import React from 'react';
import { FaCode } from 'react-icons/fa'

function Services() {
  const services = [
    { key: 1, service: "Web Development" },
    { key: 2, service: "App Development" },
    { key: 3, service: "Digital Marketing" },
    { key: 4, service: "Web Development" },
    { key: 5, service: "Web Development" },
    { key: 6, service: "Web Development" },
  ]
  const WebServices = [
    { key: 1, name: "React Development" },
    { key: 2, name: "NodeJs Development" },
    { key: 3, name: "PHP Development" },
    { key: 4, name: "Wordpress Deveopment" },
    { key: 5, name: "ERP Development" },
    { key: 6, name: "E-Commerce Development" }
  ]
  return (
    <>
      <section className='min-h-screen bg-cover bg-fixed  bg-no-repeat bg-about-bg -mt-[88px]  relative overflow-x-clip flex justify-center items-center'>
        <div className='absolute inset-0 bg-black-300 '></div>
        <h1 className='text-center text-6xl font-bold text-white relative'>Our Services</h1>
      </section>
      <section className=' grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2   text-center w-full bottom-0 bg-transparent'>
        {
          services.map((item, i) => (
            <div className="bg-blue-600 py-8  backdrop-blur-sm"><h1 key={item.key} className='border-x-2 border-purple-500 py-10'>{item.service}</h1></div>

          ))
        }
      </section>
      <section id='WebsiteDevelopment' className='pt-16 '>
        <div className="text-center my-10">
          <h1 className='text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-fuchsia-500 inline-block px-8 py-3 mx-auto transform skew-x-[-12deg]'>
            <span className='transform -skew-x-[-12deg] block'>
              Web Development
            </span>
          </h1>
        </div>
        <div className='flex items-center justify-center px-28'>
          <div className="w-1/2">
            <p className="">In today’s digital-first world, having a powerful and responsive website is essential for any business to thrive. At [Your Company Name], we specialize in creating high-quality, fully customized websites that are not just visually appealing but also functionally robust. Our web development services are tailored to meet the unique needs of businesses, whether you're a startup or an established brand looking to upgrade your online presence.</p>
            <div className="grid grid-cols-2 gap-7 mt-5 w-max ">
              {WebServices.map((item) => (
                <div className="flex items-center p-3 bg-slate-600 rounded-md hover:bg-blue-600 duration-300  backdrop-blur-sm cursor-default" key={item.key}>
                  <span className='rounded-full mr-2 p-1 bg-blue-500'><FaCode /></span>
                  <h1 className='opacity-100 text-white'>{item.name}</h1>
                </div>
              ))}


            </div>
          </div>
          <div className="w-1/2"><img src="https://www.bytescrum.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fit-service1.7e8943d9.webp&w=828&q=75" alt="" /></div>
        </div>
        <div className=''>
          <h1 className='w-fit mx-auto my-6 text-3xl font-semibold p-4 text-white'>What we Offers</h1>
          <div className="grid grid-cols-12 gap-4 md:mx-28">
            <div className="col-span-3 row-span-2  p-4 text-center rounded-md bg-gradient-to-tl  from-[#0D324D] to-[#2C3E50] ">
              <h1 className="text-xl font-medium text-blue-300 mb-2">Custom Website Design</h1>
              <p className='text-slate-400 '>We build websites that are unique to your brand, ensuring that your site reflects your business identity and goals.</p>
            </div>
            <div className="col-span-6 row-span-1  p-4 text-center rounded-md bg-gradient-to-tl  from-[#0D324D] to-[#2C3E50]">
              <h1 className="text-xl font-medium text-blue-300 mb-2 ">Responsive Design</h1>
              <p className='text-slate-400 '>Our websites are optimized for all devices, ensuring that your users have an exceptional experience whether they're on a desktop, tablet, or mobile phone.</p>
            </div>
            <div className="col-span-3 row-span-2  p-4 text-center rounded-md bg-gradient-to-tl  from-[#0D324D] to-[#2C3E50]">
              <h1 className="text-xl font-medium text-blue-300 mb-2 ">E-Commerce Solutions</h1>
              <p className='text-slate-400 '>From product listings to secure payment gateways, we provide end-to-end e-commerce development to help you sell online efficiently.</p>
            </div>
            <div className="col-span-6 row-span-1  p-4 text-center rounded-md bg-gradient-to-tl  from-[#0D324D] to-[#2C3E50]">
              <h1 className="text-xl font-medium text-blue-300 mb-2 ">SEO-Friendly Development</h1>
              <p className='text-slate-400 '> Every site we develop is built with search engine optimization (SEO) in mind to improve your visibility on Google and other search engines.</p>
            </div>
            <div className="col-span-6 row-span-1  p-4 text-center rounded-md bg-gradient-to-tl  from-[#0D324D] to-[#2C3E50]">
              <h1 className="text-xl font-medium text-blue-300 mb-2 ">Content Management Systems (CMS)</h1>
              <p className='text-slate-400 '> Whether you prefer WordPress, Drupal, or custom CMS, we ensure you have full control over your website’s content.</p>
            </div>
            <div className="col-span-6 row-span-1  p-4 text-center rounded-md bg-gradient-to-tl  from-[#0D324D] to-[#2C3E50]">
              <h1 className="text-xl font-medium text-blue-300 mb-2 ">Ongoing Maintenance</h1>
              <p className='text-slate-400 '>We don’t just stop after launch. We offer continuous website maintenance to ensure everything runs smoothly, and your site stays updated and secure.</p>
            </div>
          </div>
        </div>
      </section>
      <hr className="mt-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <section id='MobileDevelopment' className='pt-16  '>
        <div className="text-center my-10">
          <h1 className='text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-fuchsia-500 inline-block px-8 py-3 mx-auto transform skew-x-[-12deg]'>
            <span className='transform -skew-x-[-12deg] block'>
              App Development
            </span>
          </h1>
        </div>
        <div className='flex items-center justify-center px-28'>
          <div className="w-1/2">
            <p className="">At ByteScrum Technologies, web development is paramount to our operations. Our skilled team creates visually captivating websites, manages databases, and implements cutting-edge server-side scripting. We deliver customized web solutions that meet your unique needs, with a focus on quality and user experience. Partner with us for web development success.</p>
            <div className="grid grid-cols-2 gap-7 mt-5 w-max ">
              {WebServices.map((item) => (
                <div className="flex items-center p-3 bg-slate-600 rounded-md hover:bg-blue-600 duration-300  backdrop-blur-sm cursor-default" key={item.key}>
                  <span className='rounded-full mr-2 p-1 bg-blue-500'><FaCode /></span>
                  <h1 className='opacity-100 text-white'>{item.name}</h1>
                </div>
              ))}


            </div>
          </div>
          <div className="w-1/2"><img src="https://www.bytescrum.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fit-service1.7e8943d9.webp&w=828&q=75" alt="" /></div>

        </div>

      </section>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

    </>
  )
}

export default Services