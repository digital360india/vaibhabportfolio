const HeroSection = () => {
  return (
    <>
      <div
       
        className="w-full md:h-[100vh] md:gap-12 md:flex md:justify-center bg-[url('/bgmobile.svg')] md:bg-[url('/bgvaibhav.svg')] bg-cover bg-center bg-no-repeat object-cover px-10 py-24"
      >
        <div className=" hidden md:block pt-24">
          <img
            src="vaibhav.jpg"
            alt="Profile"
            className="md:w-[350px] md:h-[403px] object-cover  "
          />
        </div>
        <div className="md:hidden text-[80px] text-[#000000]">Vaibhav Negi</div>

        <div className="md:pr-4 lg:pr-0  lg:pt-40">
          <div className="md:ml-36 md:mt-5">
            <div className="md:block hidden text-[24px] font-semibold leading-tight text-[#00797A] md:w-auto   font-poppins md:text-right    md:pt-48">
              AUTHOR & EDUCATIONAL CONTENT SPECIALIST
            </div>

            <div className="md:hidden text-[24px] font-semibold leading-tight text-[#FFFFFF] md:w-auto   font-poppins md:text-right    md:pt-48">
              AUTHOR
              <br /> & <br />
              EDUCATIONAL CONTENT SPECIALIST
            </div>

            <div className=" ">
              <p className="font-poppins md:text-[20px] text-[#202020] font-light   mt-5 md:ml-20 md:text-right md:w-[627px]  ">
                An author and educational content specialist dedicated to
                shaping the future of learning. With a passion for creating
                insightful and impactful educational content, I specialize in
                making complex concepts accessible and engaging for students and
                educators a like.
              </p>
            </div>

            <div className=" md:hidden md:mt-0 mt-8">
              <img
                src="vaibhav.jpg"
                alt="Profile"
                className="w-[220px] h-[320px]  object-cover pt-14"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
