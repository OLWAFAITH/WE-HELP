// components/Footer.js
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Company</h3>
            <p className="text-sm">
              We are dedicated to empowering professionals across various industries, helping them to achieve financial independence and contribute positively to the world.
            </p>
          </div>
          
          {/* Column 2 - Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  {/* Facebook Icon */}
                  <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.49V14.71H9.692v-3.635h3.124V8.414c0-3.096 1.89-4.787 4.652-4.787 1.323 0 2.462.098 2.793.142v3.24h-1.918c-1.504 0-1.796.715-1.796 1.764v2.312h3.592l-.468 3.635h-3.124V24h6.128c.733 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.676 0z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  {/* Twitter Icon */}
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.569 2.163-2.724-.95.563-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.718 0-4.92 2.201-4.92 4.917 0 .386.045.762.127 1.122-4.088-.205-7.719-2.164-10.141-5.144-.423.722-.666 1.562-.666 2.457 0 1.693.863 3.187 2.175 4.064-.803-.025-1.561-.247-2.228-.616v.061c0 2.364 1.679 4.336 3.904 4.783-.409.111-.84.171-1.285.171-.314 0-.621-.03-.92-.086.622 1.943 2.432 3.357 4.576 3.396-1.676 1.314-3.787 2.099-6.078 2.099-.395 0-.786-.023-1.17-.068 2.165 1.39 4.738 2.205 7.507 2.205 9.007 0 13.934-7.457 13.934-13.935 0-.211-.005-.422-.014-.633.956-.689 1.786-1.549 2.444-2.528l-.047-.02z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  {/* LinkedIn Icon */}
                  <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.546C0 23.227.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.06 20.452H3.452V9.051H7.06v11.401zm-1.805-13.1c-1.126 0-2.04-.915-2.04-2.04 0-1.125.914-2.04 2.04-2.04 1.126 0 2.04.915 2.04 2.04 0 1.126-.915 2.04-2.04 2.04zM20.452 20.452h-3.607V14.52c0-1.418-.028-3.24-1.972-3.24-1.973 0-2.273 1.542-2.273 3.138v6.035H9.99V9.051h3.461v1.553h.047c.482-.914 1.662-1.876 3.419-1.876 3.654 0 4.33 2.406 4.33 5.533v6.19h-.013z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} WE~HELP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
