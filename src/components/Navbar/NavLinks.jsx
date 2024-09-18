import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const navigate = useNavigate();

  // Utility function to detect if the device is mobile
  const isMobile = () => window.innerWidth < 768;

  const handleScroll = (path, hash) => {
    navigate(path); // Navigate to the services page first
    setTimeout(() => {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Adjust the timeout based on your layout delay
  };

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 md:px-5 text-left md:cursor-pointer group">
            {/* On Desktop: Navigate to main link, On Mobile: Open submenu */}
            <h1
              className={`py-7 flex justify-between items-center md:pr-0 pr-5 group 
                ${heading === link.name ? 'border-b-4 border-blue-500' : 'hover:border-b-4 hover:border-blue-500'}
              `}
              onClick={() => {
                if (!isMobile()) {
                  navigate(link.link); // Navigate to the main link if not mobile
                } else {
                  heading !== link.name ? setHeading(link.name) : setHeading("");
                }
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>

            {/* Submenu */}
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-2.5 grid grid-cols-1 border-b-4 border-blue-500">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.name}>
                        <li className="text-sm text-gray-600 hover:bg-gray-200">
                          <button
                            onClick={() =>
                              handleScroll(
                                link.link, // Pass main link path
                                mysublinks.link.split("#")[1]
                              )
                            }
                            className="hover:text-primary py-2.5 px-3 block"
                          >
                            {mysublinks.name}
                          </button>
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menus - No sub-dropdowns */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks.map((slink) => (
              <li key={slink.name} className="py-3 pl-7 hover:bg-gray-800">
                <button
                  onClick={() =>
                    handleScroll(link.link, slink.link.split("#")[1])
                  }
                >
                  {slink.name}
                </button>
              </li>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
