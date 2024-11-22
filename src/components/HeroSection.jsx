const HeroSection = () => {
  return (
    <>
      <div
        className=" md:flex justify-center  md:p-24 md:w-full md:px-0 px-10  h-[1000px] md:h-[540px] py-20  "
        style={{
          backgroundImage: 'url("Frame.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" hidden md:block">
          <img src="vaibhab.svg" alt="Profile" className="w-90 h-90  " />
        </div>

        <div className="md:pr-4 lg:pr-0">
          <div
            className="text-[70px] leading-tight font-bold text-white  md:text-right   mt-1"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Vaibhav
            <br />
            <div style={{ fontFamily: "Times New Roman, serif" }}>Negi</div>
          </div>

          <div className="text-[24px] font-semibold text-[#62D2D3]  font-poppins md:text-right  mt-3">
            <span className="  mb-">AUTHOR</span>
            <div>&</div>
            <div>
              <span className=" "> EDUCATIONAL CONTENT SPECIALIST</span>
            </div>
          </div>
          <div className=" ">
            <p className="font-poppins text-[16px] text-white font-light  mt-5 md:ml-20 md:text-right md:w-[500px]  ">
              An author and educational content specialist dedicated to shaping
              the future of learning. With a passion for creating insightful and
              impactful educational content, I specialize in making complex
              concepts accessible and engaging for students and educators a
              like.
            </p>

            <div className=" md:hidden md:mt-0 mt-5">
              <img src="vaibhab.svg" alt="Profile" className="w-[60vw]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
