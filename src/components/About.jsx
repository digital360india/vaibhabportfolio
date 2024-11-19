const About = () => {
  return (
    <div
      className="flex justify-center gap-80 items-start p-16 bg-[#202020] ;
"
    >
      <div className="text-[227.14px] text-[#7A7A7A] font-medium  text-right ml-16 font-poppins">
        01
      </div>

      <div className="">
        <div className="text-[20px] font-semibold text-sky-600 mt-2  text-left font-poppins ">
          ABOUT ME
        </div>

        <div
          className=" text-[40px] font-extrabold leading-[46px]  text-white text-left mt-6  "
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          I turn My Experience into
        </div>
        <div
          className=" text-[40px] font-extrabold leading-[46px] text-left  text-white"
          style={{ fontFamily: "Times New Roman, serif" }}
        >
          Words
        </div>
        <div className="flex items-center ">
          <div className="w-[17px] h-[17px] bg-[#00B1B2]"></div>
          <hr className="border-t-2 border-gray-300 my-10 w-32" />
        </div>

        <div className="text-[16px]  font-poppins  text-white mt-2  max-w-4xl ">
          With extensive experience across various platforms, I specialize in
          curriculum development, web and social media content, and content
          strategy for educational websites. From crafting SEO-optimized
          articles to designing educational materials that integrate digital
          tools, my work focuses on delivering value through every word. My goal
          is to provide content that educates, engages, and inspires, ensuring
          it meets the diverse needs of modern learners.
        </div>
      </div>
    </div>
  );
};

export default About;
