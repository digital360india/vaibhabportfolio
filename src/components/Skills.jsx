const Skills = () => {
  return (
    <div>
      <div className=" flex justify-end     md:mr-20">
        <div className="md:flex md:space-x-28">
          <div className=" md:w-[400px]  mt-8 md:mt-20 md:px-0 px-14 md:ml-12 lg:ml-0  md:space-y-4 md:py-3">
            <p className="  text-[20px]  font-medium text-[#00B1B2] font-poppins">
              HOW I ACHIEVE MY GOALS
            </p>
            <p
              className="text-[40px] text-right md:mt-0 mt-4 md:ml-12 lg:ml-0 md:text-center "
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Skills
            </p>
            <div>
              <div className="flex justify-end items-center  md:mt-0 mt-5 md:justify-center md:ml-0  md:mr-12 ">
                <hr className="border-t-2 border-gray-300  w-32" />
                <div className="w-[17px] h-[17px] bg-[#00B1B2]"></div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mr-6 h-[341px] hidden md:block">
              <img src="02.svg" alt="img" className="w-[225px] h-[341px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:px-28   md:mt-10">
        <div className="md:px-0 px-12 md:h-auto md:w-auto  ">
          <img
            src="Frame 13.svg"
            alt="logo"
            className="w-[50px] h-[50px] md:w-auto md:h-auto md:mb-0 mb-5 "
          />
        </div>

        <div className="">
          <div
            className="md:text-[32px] text-[24px] font-bold md:px-0 px-12 md:ml-8"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Content Creation & <br />
            Strategy
          </div>

          <div className="text-[20px]  md:ml-16 font-poppins mt-3 md:px-0 px-20 md:mt-7 md:text-left  ">
            <ul>
              <li className="list-disc text-left">Content Strategy</li>
              <li className="list-disc ">Content Strategy</li>
              <li className="list-disc">Content Marketing & Branding</li>
              <li className="list-disc">Copywriting & Technical Writing</li>
              <li className="list-disc"> Social Media Content Development</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-end md:mr-32 md:ml-0 ml-20 md:gap-9 md:mt-10 lg:mt-0 ">
        <div className="hidden md:block">
          <img
            src="/skill2.svg"
            alt="logo"
            className="w-[50px] h-[50px]  md:w-auto md:h-auto"
          />
        </div>
        <div className="flex justify-end pr-10  md:hidden ">
          <img
            src="/skill2.svg"
            alt="logo"
            className="w-[50px] h-[50px]  md:w-auto md:h-auto mt-10 md:mt-0"
          />
        </div>
        <div>
          <div
            className="md:text-[32px] text-[24px] pr-10 md:pr-0  font-bold md:mt-0 mt-5  text-right md:text-start  "
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Educational Design & <br className="   " />
            Development
          </div>
          <div>
            <div className="text-[20px]   md:ml-0 ml-10  font-poppins md:pt-0 pt-5">
              <ul>
                <li className="list-disc">Instructional Design</li>

                <li className="list-disc"> Curriculum Design & Development</li>
                <li className="list-disc"> Instructional Writing</li>
                <li className="list-disc"> Educational Research </li>
                <li className="list-disc">
                  {" "}
                  Digital Education Tools Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex md:px-32 px-7 mb-10 md:mb-0 md:mt-8 lg:mt-0">
        <div>
          <img
            src="Frame 15.svg"
            alt="logo"
            className="w-[50px] h-[50px]  md:ml-0 ml-6 md:w-auto md:h-auto md:mt-0 mt-10"
          />
        </div>
        <div>
          <div
            className="md:text-[32px] text-[24px] md:pt-0 pt-5   md:mt-10 lg:mt-0 font-bold  ml-7 "
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Audience Engagement <br className="" />& Performance
          </div>
          <div>
            <div className="text-[20px] ml-14   mt-3 md:mt-7 font-poppins">
              <ul>
                <li className="list-disc"> Engagement-Driven Writing </li>
                <li className="list-disc">
                  Audience Engagement & Community Building{" "}
                </li>
                <li className="list-disc"> SEO &Content Optimization </li>
                <li className="list-disc">
                  {" "}
                  Content Analytics & Performance Tracking{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
