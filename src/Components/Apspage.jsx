import React from "react";
import APSlogo from "../img/APS-logo-removebg-preview.png";
import facebok from "../img/facebook (2).png";
import Insta from "../img/instagram (2).png";
import Email from "../img/email (8).png";
import Address from "../img/location (2).png";
import Calls from "../img/call (3).png";

const Apspage = () => {
  return (
    <div className="Aps flex before:bg-[rgba(0,0,0,0.3)] before:h-full before:w-full relative before:absolute before:z-[1]">
      <div className="z-[9999999] flex flex-col items-center gap-7 justify-center py-7 w-full">
        <a href="https://www.apstravels.com/" target="_blank" rel="noreferrer">
          <img src={APSlogo} className="h-[66px] w-[200px] " alt="" />
        </a>
        <h1 className="sm:text-[53px] text-[46px] w-[90%] sm:[100%] back text-[#ffffff] sm:leading-[57px] leading-[50px] text-center font-[700] ">
          We Will Be Back{" "}
          <span className="text-[#5e61ec] text-[55px]">Soon!</span>
        </h1>
        <p className="text-[18px] text-[#ffffff] font-APS text-center w-[90%] sm:w-[60%] lg:w-[45%] ">
          We are using this time to give our website a revamp! Please leave us
          your email and we will let you know when we are back up.
        </p>

        <div className="sm:w-[390px] w-[79%]  inp rounded-[5px] flex">
          <input
            placeholder="Enter your email*"
            className="w-[100%] outline-none bg-transparent sm:pl-4 pl-3  rounded-[5px] py-3 text-white placeholder:text-[white]"
            type="text"
            name=""
            id=""
          />
          <a href="mailto:apsiddiqi@gmail.com" rel="noreferrer">
            <div>
              <button className="h-[47px] sm:w-[130px] w-[100px] border-[1px] border-transparent rounded-[30px] shade bg-[#4c4ec3] hover:bg-transparent hover:border-[1px] hover:border-[#5e61ec] hover:text-[#6c6fff] duration-500 flex justify-center items-center text-white sm:text-[17px] text-[15px] font-[500]">
                NOTIFY ME!
              </button>
            </div>
          </a>
        </div>

        <h1 className="text-[30px] font-bold font-APS text-[#f7eeee] md:tracking-widest text-center sm:w-[55%] w-[90%] ">
          Contact info :
        </h1>
        <a
          className="flex justify-center"
          href="https://maps.app.goo.gl/eeGVunCb1h1vrzNb7"
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="text-[19px] text-[#f7eeee]  text-center md:w-[80%] w-[90%] font-APS  mt-2">
            Head Office : 212-A, Sarwar Road, Lahore Cantt., Lahore, Pakistan.
            <p>Tel : (042) 36682887-8 Mob : +92 302 8446644</p>
          </h1>
        </a>

        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/apstravels042/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="h-[30px] w-[30px] rounded-full bg-[#3763f7] flex justify-center items-center"
              href=""
            >
              <img
                className="h-[16px] hover:h-[19px] w-[16px] hover:w-[18px] duration-300"
                src={facebok}
                alt=""
              />
            </div>
          </a>
          <a
            href="https://www.instagram.com/apstravels?igsh=MWE2ZWE3YzYxMzZmaw=="
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="h-[30px] w-[30px] rounded-full bg-[#e63078] flex justify-center items-center"
              href=""
            >
              <img
                className="h-[16px] hover:h-[19px] w-[17px] hover:w-[18px] duration-300"
                src={Insta}
                alt=""
              />
            </div>
          </a>
          <a href="mailto:apsiddiqi@gmail.com" rel="noreferrer">
            <div
              className="h-[30px] w-[30px] rounded-full bg-[#c49807] flex justify-center items-center"
              href=""
            >
              <img
                className="h-[25px] hover:h-[27px] hover:w-[25px] duration-300  w-[23px]"
                src={Email}
                alt=""
              />
            </div>
          </a>
          <a href="tel:+923028446644" rel="noreferrer">
            <div
              className="h-[30px] w-[30px] rounded-full bg-[#6ddf5e] flex justify-center items-center"
              href=""
            >
              <img
                className="h-[15px] hover:h-[17px] hover:w-[17px] duration-300 w-[15px]"
                src={Calls}
                alt=""
              />
            </div>
          </a>
          <a
            href="https://maps.app.goo.gl/eeGVunCb1h1vrzNb7"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="h-[30px] w-[30px] rounded-full bg-[#79c4b2] flex justify-center items-center"
              href=""
            >
              <img
                className="h-[16px] w-[17px] hover:h-[18px] hover:w-[19px] duration-300"
                src={Address}
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Apspage;
