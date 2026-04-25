import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdMail, MdPhone, MdLocationOn } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t pt-16 pb-10">

      <div className="max-w-6xl mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 font-black text-xl mb-4">
              <GiGraduateCap className="text-blue-600 text-2xl" />
              EIA Nexus
            </div>

            <p className="text-sm text-gray-500">
              Excellence in education since 1995. Building future leaders.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-4 text-xl text-gray-500">
              <FaInstagram className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-600 cursor-pointer" />
              <FaYoutube className="hover:text-blue-600 cursor-pointer" />
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-bold text-blue-600 mb-4 text-sm uppercase">
              Institute
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-blue-600 cursor-pointer">Vision</li>
              <li className="hover:text-blue-600 cursor-pointer">Admissions</li>
              <li className="hover:text-blue-600 cursor-pointer">Academics</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold text-blue-600 mb-4 text-sm uppercase">
              Contact
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">

              <li className="flex items-center gap-2">
                <MdLocationOn className="text-blue-600" />
                Nexus City Campus
              </li>

              <li className="flex items-center gap-2">
                <MdPhone className="text-blue-600" />
                +1 000 000 EIA
              </li>

              <li className="flex items-center gap-2">
                <MdMail className="text-blue-600" />
                support@eia.edu
              </li>

            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t pt-6 text-center text-xs text-gray-500">
          © 2024 EIA Nexus. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;