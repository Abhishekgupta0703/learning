import React from 'react'

function CTA() {
    return (
        <>
            <section className="overflow-x-clip  py-16 px-8 text-center relative ">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
                <div className="max-w-3xl mx-auto text-white relative">
                    <h2 className="text-4xl font-extrabold mb-4">
                        Take Your Business to the Next Level
                    </h2>
                    <p className="text-lg mb-6">
                        Join us today and get a free consultation to boost your digital presence.
                        Let's grow your business with tailored IT solutions.
                    </p>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold shadow-md hover:bg-gray-200">
                        Get Started Now
                    </button>
                </div>
            </section>
        </>
    )
}

export default CTA