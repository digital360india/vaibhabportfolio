const HeroSection = () => {
  return (
    <>
      <div
        className="flex justify-between p-24"
        style={{
          backgroundImage: 'url("/hero.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <img src="vaibhab.svg" alt="Profile" className="w-90 h-90  " />
        </div>

        <div className="">
          <div
            className="text-[70px] leading-tight font-bold text-white underline decoration-transparent text-right mr-9 mt-1"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Vaibhav
            <br />
            <div style={{ fontFamily: "Times New Roman, serif" }}>Negi</div>
          </div>

          <div className="text-[16px] font-semibold text-sky-600  font-poppins text-right mr-9 mt-3">
            <span className="  mb-">AUTHOR</span>
            <div>&</div>
            <div>
              <span className=" "> EDUCATIONAL CONTENT SPECIALIST</span>
            </div>
          </div>
          <div className="pr-4 ">
            <p className="font-poppins text-[14px] text-white font-light  mt-11   max-w-2xl ">
              An author and educational content specialist dedicated to shaping
              the future of learning. With a passion for creating insightful and
              impactful educational content, I specialize in making complex
              concepts accessible and engaging for students and educators alike.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
