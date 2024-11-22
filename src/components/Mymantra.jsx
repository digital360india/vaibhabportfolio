const Mymantra = () => {
  return (
    <>
      <div className="mt-32 mb-12 pl-[30px] pr-[30px]  hidden md:block">
        <div className="flex md:justify-center   ">
          <div>
            <div className="w-[100px] h-[100px] -mb-10 ">
              <img src="Get Quote.svg" className="" />
            </div>

            <div className="  p-7  lg:h-[140px] md:w-[500px] lg:w-[600px] bg-[#EEEEEE] mb-36">
              <div
                className=" text-[32px] font-bold"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Great content doesn&apos;t just inform; it drives change and builds
                trust
              </div>
            </div>
          </div>
          <div className="flex lg:mt-6  md:mt-16 justify-center text-white items-center  lg:px-0 md:px-6 w-[317px] md:h-[190px] lg:h-[200px] text-[50px] bg-[#202020]">
            <div className=" text-[#FFFFFF]" style={{ fontFamily: "Times New Roman, serif" }}>
              MY <br />
              MANTRA
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden mt-10  px-10 pb-14">
        <div className="flex justify-end -mb-10  ">
          <img src="Get1.svg" className="" />
        </div>

        <div className=" text-white  flex justify-center items-center   text-[50px]  bg-[#202020]">
          <div className="p-2 text-[#FFFFFF]" style={{ fontFamily: "Times New Roman, serif" }}>
            MY <br /> MANTRA
          </div>
        </div>
        <div
          className=" text-[30px] font-bold p-8 bg-[#EEEEEE]"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Great content doesn&apos;t just inform; it drives change and builds trust
        </div>
      </div>
    </>
  );
};

export default Mymantra;
