const Getintouch = () => {
  return (
    <div className="flex justify-center items-center  bg-[#000000] py-12">
      <div className=" flex justify-center items-center  gap-64 ">
        <div className="">
          <h1 className="text-[#00B1B2] text-[28px] font-poppins  ">GET IN TOUCH</h1>
          <h1 className="text-[60px] leading-tight text-[#FFFFFF] mt-5" style={{ fontFamily: "Times New Roman, serif" }}>
            Reach
            <br /> Me
          </h1>
        </div>

        <form action="" className="">
          <div className=" ">
            <div className="font-poppins">
              <input
                type="text"
                placeholder="Enter your Name"
                className=" border-r-[1px] border-b-[1px] border-l-[1px] bg-black  pt-[10px] pb-[10px] pl-[20px] pr-[20px] mb-8 w-[204px] text-white"
              />
              <input
                type="text"
                placeholder="Enter your E-mail"
                className=" border-r-[1px] border-b-[1px] border-l-[1px] bg-black pt-[10px] pb-[10px] pl-[20px] pr-[20px] mb-[10] ml-6 w-[215px] text-white "
              />
            </div>
            <input
              type="text"
              placeholder="Enter your Subject"
              className=" border-r-[1px] border-b-[1px] border-l-[1px] bg-black pt-[10px] pb-[10px] pl-[20px] pr-[20px] mb-9 gap-[10px] w-[445px] text-white"
            />
            <div>
              <input
                type="text"
                placeholder="your message here "
                className=" border-r-[1px] border-b-[1px] border-l-[1px] bg-black  pt-[10px] pb-[10px] pl-[20px] pr-[20px] gap-[10px] w-[445px] h-[225px] text-white"
              />
            </div>
            <div className="">
              <button className="text-[20px] py-3 px-3 font-poppins text-[#00B1B2] border-[#00B1B2] border-l-[1px] border-r-[1px] border-t-[1px] border-b-[1px] mt-3 ">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Getintouch;
