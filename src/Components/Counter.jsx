import React from "react";

const Counter = () => {
  return (
    <div className="h-full w-full  flex flex-col items-center gap-4">
      <p className="text-[18px] font-APS text-[#ffffff] text-center sm:w-[55%] w-[90%] mt-2">
        We will relaunch our website in
      </p>
      <div className="flex flex-wrap gap-5 w-[85%] justify-center">
        <div>
          <div className="count h-[100px] shade w-[100px] rounded-full flex justify-center items-center flex-col">
            <h1 className="text-[24px] text-white font-extrabold">212</h1>
            <p className="text-[14px] text-white">Days</p>
          </div>
        </div>
        <div>
          <div className="count h-[100px] shade w-[100px] rounded-full flex justify-center items-center flex-col">
            <h1 className="text-[24px] text-white font-extrabold">10</h1>
            <p className="text-[14px] text-white">Hours</p>
          </div>
        </div>
        <div>
          <div className="count h-[100px] shade w-[100px] rounded-full flex justify-center items-center flex-col">
            <h1 className="text-[24px] text-white font-extrabold">45</h1>
            <p className="text-[14px] text-white">Minutes</p>
          </div>
        </div>
        <div>
          <div className="count h-[100px] shade w-[100px] rounded-full flex justify-center items-center flex-col">
            <h1 className="text-[24px] text-white font-extrabold">13</h1>
            <p className="text-[14px] text-white">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
