const Skills = () => {
  return (
    <div>
      <div className="flex justify-end  mr-20">
        <div className="flex space-x-24">
          <div className=" w-[400px]  mt-28 space-y-4">
            <p className="  text-[20px] font-medium text-[#00B1B2] font-poppins">
              HOW I ACHIEVE MY GOALS
            </p>
            <p
              className="text-[40px] "
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              Skills
            </p>
            <div>
              <div className="flex items-center  ">
                <hr className="border-t-2 border-gray-300  w-32" />
                <div className="w-[17px] h-[17px] bg-[#00B1B2]"></div>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-[227px] text-[#7A7A7A] font-medium font-poppins text-right">
              02
            </h2>
          </div>
        </div>
      </div>
      <div></div>
      <div className="flex px-32  mt-10">
        <div>
          <img src="Frame 13.svg" alt="logo" />
        </div>

        <div className="">
          <div
            className="text-[32px] font-bold leading-[36.8px] ml-9"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Content Creation & <br />
            Strategy
          </div>

          <div className="text-[20px]  ml-16 font-poppins mt-7 text-left  ">
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

      <div className="flex justify-end mr-10  gap-9">
        <div>
          <img src="/skill2.svg" alt="logo" />
        </div>
        <div>
          <div
            className="text-[32px] leading-[36.8px] font-bold"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Educational Design & <br />
            Development
          </div>
          <div>
            <div className="text-[20px] ml-4   font-poppins mt-7">
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

      <div className="flex px-32">
        <div>
          <img src="Frame 15.svg" alt="logo" />
        </div>
        <div>
          <div
            className="text-[32px] font-bold leading-[36.8px] ml-8 "
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Audience Engagement & <br />
            Performance
          </div>
          <div>
            <div className="text-[20px] ml-14  mt-7 font-poppins">
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
