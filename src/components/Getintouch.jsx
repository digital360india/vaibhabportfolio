const Getintouch = () => {
  return (
    <div className="md:flex md:justify-center md:items-center px-20 lg:px-0  md:px-24  bg-[#202020]  py-12">
      <div className=" md:flex md:justify-center md:items-center    gap-20 ">
        <div className="">
          <h1 className="text-[#00B1B2] text-[28px] font-poppins  ">
            GET IN TOUCH
          </h1>
          <h1
            className="text-[60px] leading-tight text-[#FFFFFF] mt-5"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Don&apos;t hesitate to
            <br />
            ask a question
          </h1>
        </div>

        <form action="" className="pt-8">
          <div className=" ">
            <div className="font-poppins">
              <input
                type="text"
                placeholder="Enter your Name"
                className=" border-b-[1px] border-l-[1px] bg-black  pt-[10px] pb-[10px] pl-[20px] pr-[20px] mb-8  md:w-[250px] lg:w-[265px] text-white"
              />
              <input
                type="text"
                placeholder="Enter your E-mail"
                // className="  border-b-[1px] border-l-[1px]     bg-black pt-[10px]  lg:pb-[10px]  lg:pl-[20px]  lg:pr-[20px] h-[50px] md:mb-[10] mb-7 lg:ml-6 w-[240px]  md:w-[250px] lg:w-[265px] text-white "
                className="lg:ml-5 border-b-[1px] border-l-[1px] bg-black  pt-[10px] pb-[10px] pl-[20px] pr-[20px] mb-8  md:w-[250px] lg:w-[265px] text-white"

              />
            </div>
            <input
              type="text"
              placeholder="Enter your Subject"
              className="  border-b-[1px] border-l-[1px] bg-black pt-[10px] pb-[10px] pl-[20px] pr-[20px] mb-9 gap-[10px] md:w-[250px] lg:w-[549px] md:h-[50px] text-white"
            />
            <div>
              <input
                type="text"
                placeholder="your message here "
                className="  border-b-[1px] border-l-[1px] bg-black  pt-[10px] pb-[10px] pl-[20px] pr-[20px] gap-[10px] lg:w-[549px]  md:w-[ 470px] h-[80px]  md:h-[100px] text-white"
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
