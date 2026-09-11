import React from "react";
import Logo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 font-sans mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              
              <span className="text-xl font-bold text-gray-800">
                <img src={Logo} alt="" />
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-500 pr-10 leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-6 flex space-x-6 text-sm font-semibold text-slate-600">
              <a href="#" className="hover:text-gray-900 transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
