import React from "react";
import { BiLogoFacebook } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="shadow-lg p-16 mb-5 bg-body rounded">
      <div className="flex justify-center ">
        <div className="flex  justify-center items-center max-w-7xl  w-full p-4 ">
          <div className="flex flex-col items-center justify-around w-3/4 md:flex-row ">
            <div className="flex flex-col  md:items-start  space-y-3 md:w-full   text-gray-700 mx-4 text-sm font-medium">
              <div className="text-2xl ">Contact Us</div>
              <div>Our mailing address is:</div>
              <div className="font-bold">admin@tailblocks.org</div>
              <div>152A Chaelotte Street,</div>
              <div>Peterborough ON</div>
              <div>Phone: 705-784-3221</div>
              <div className="flex text-2xl space-x-3 font-medium">
                <a href="">
                  <ion-icon
                    name="logo-facebook"
                    className="hover:text-blue-500"
                  ></ion-icon>
                </a>
                <a href="">
                  <ion-icon
                    name="logo-twitter"
                    className="hover:text-blue-700"
                  ></ion-icon>
                </a>
                <a href="">
                  <ion-icon
                    name="logo-instagram"
                    className="hover:text-fuchsia-600"
                  ></ion-icon>
                </a>
                <a href="">
                  <ion-icon
                    name="logo-reddit"
                    className="hover:text-red-600"
                  ></ion-icon>
                </a>
              </div>
            </div>
            <div className="text-gray-800 m-4 items-start border-gray-900 flex flex-col md:w-full   space-y-3">
              <div className="text-xl  font-medium">Let us work together</div>
              <input
                placeholder="Enter your Name"
                className="border border-gray-400 rounded px-2 py-1 w-48 md:w-96"
              />
              <input
                placeholder="Enter a valid Email address"
                className="border border-gray-400 rounded py-1 px-2 w-48 md:w-96"
              />
              <textarea
                placeholder="Enter your message"
                type="text"
                className="border border-gray-400 rounded py-1 px-2  w-48 md:w-96 h-20 md:h-40  "
              ></textarea>
              <button className="text-white px-4 rounded font-medium hover:bg-yellow-600  py-1 bg-yellow-500">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Contact;
