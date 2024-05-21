import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./responsive.css";
import Teacher from "../public/Images/home/new.png";

import { IoIosCheckmark } from "react-icons/io";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={` relative`}>
        <div className={` `}>
          <div className={` bg-[#4e2581] py-2 `}>
            <p className={` text-white text-center text-base tracking-wide`}>
              Invite Your Colleague and Save
            </p>
          </div>
          <div className={` container mx-auto`}>
            <div
              className={` grid lg:grid-cols-12  md:grid-cols-12 mdsm:grid-cols-1 sm:grid-cols-1  py-6`}
            >
              <div className={` col-span-7`}>
                <div className={` text-[#4e2581] font-semibold text-h1 title `}>
                  Transformtech
                </div>
              </div>
              <div className={` col-span-5`}>
                {" "}
                <p className={` text-right uppercase text-h1 pt-1`}>
                  Executive Education
                </p>{" "}
              </div>
            </div>
          </div>
          <div className={`relative  `}>
            <img src={Teacher} className="w-full h-[94vh] object-cover" />
            <div className={` absolute top-0 w-full h-full `}>
              <div className={` container mx-auto`}>
                <div className={` grid grid-cols-12 `}>
                  <div className={`relative  col-span-8`}>
                    <div className={` absolute bottom-10 w-[80%] `}>
                      <div
                        className={`text-white  font-semibold title text-[40px] `}
                      >
                        Digital Marketing Strategies: Data, Automation, AI &
                        Analytics
                      </div>
                      <div
                        className={` text-white pt-3  font-semibold title text-h3`}
                      >
                        Adapt to Evolving Consumer Behavior in The Modern
                        Digital World
                      </div>
                    </div>
                  </div>
                  <div className={` col-span-4`}>
                    <div className={`bg-white w-full  p-2 px-4 mt-14`}>
                      <h2 className={` text-[#333] font-semibold text-h3 pt-4`}>
                        Get Your Brochure
                      </h2>
                      <div className={` pt-2`}>
                        <input
                          type={` text`}
                          placeholder="First Name "
                          className={` focus:border-none  text-[#333] placeholder:text-[#707070] border py-2 px-4 border-[#ccc]  w-full`}
                        />
                      </div>
                      <div className={` pt-2`}>
                        <input
                          type={` text`}
                          placeholder="Last Name "
                          className={` focus:border-none  text-[#333] placeholder:text-[#707070] border py-2 px-4 border-[#ccc]  w-full`}
                        />
                      </div>
                      <div className={` pt-2`}>
                        <input
                          type={` text`}
                          placeholder="Email "
                          className={` focus:border-none  text-[#333] placeholder:text-[#707070] border py-2 px-4 border-[#ccc]  w-full`}
                        />
                      </div>
                      <div className={` pt-2`}>
                        <select
                          className={`focus:border-none  text-[#333] placeholder:text-[#707070] border py-2 px-4 border-[#ccc]  w-full `}
                        >
                          <option>India</option>
                          <option>Aus</option>
                          <option>USA</option>
                        </select>
                      </div>
                      <div className={` pt-2`}>
                        <input
                          type={`number`}
                          placeholder="+91 "
                          className={` focus:border-none  text-[#333] placeholder:text-[#707070] border py-2 px-4 border-[#ccc]  w-full`}
                        />
                      </div>

                      <div className={`px-2  pt-4`}>
                        <div className={` flex`}>
                          <div className={` text-[#333]`}>Inquiring For</div>
                          <div className={` flex text-[#333]`}>
                            <input type={`radio`} className={`mx-2 `} />
                            Myself
                          </div>
                          <div className={`flex text-[#333]`}>
                            <input type={`radio`} className={`mx-2 `} />
                            Team/Group
                          </div>
                        </div>
                      </div>

                      <div className={` pt-4`}>
                        <input
                          type={`text`}
                          placeholder="Company "
                          className={` focus:border-none  text-[#333] placeholder:text-[#707070] border py-2 px-4 border-[#ccc]  w-full`}
                        />
                      </div>

                      <div className={` pt-2`}>
                        <select
                          className={`focus:border-none  text-[#333] placeholder:text-[#707070] border py-2 px-4 border-[#ccc]  w-full `}
                        >
                          <option>1-2</option>
                          <option>3-5</option>
                          <option>6-11</option>
                          <option>6-11</option>
                        </select>
                      </div>

                      <div className={`text-[12px] pt-2	`}>
                        By clicking the button below, you agree to receive
                        communications from Kellogg & Emeritus about this and
                        other relevant programs, and accept Privacy Policy,
                        Payment Policy and Terms of Use.
                      </div>

                      <div className={` pt-2 pb-6`}>
                        <button
                          className={` rounded-lg text-white bg-[#4e2581] hover:bg-[#2f1b47] py-2 text-center w-full`}
                        >
                          DOWNLOAD BROCHURE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className={` sticky top-0`}>
          <div className="bg-[#eaeaea]">
            <div className={` container mx-auto py-10`}>
              <div className={` grid grid-cols-4`}>
                <div className={`  `}>
                  <div className={`text-[12px] `}>STARTS ON</div>
                  <div className={` text-h6 text-[#333] font-semibold `}>
                    June 6, 2024
                  </div>
                </div>

                <div className={`  `}>
                  <div className={`text-[12px] `}>STARTS ON</div>
                  <div className={` text-h6 text-[#333] font-semibold `}>
                    2 months, online
                    <div
                      className={` text-[12px] pt-1 font-light text-[#444] leading-1`}
                    >
                      4-6 hours per week
                    </div>
                  </div>
                </div>

                <div className={`  `}>
                  <div className={`text-[12px] `}>PROGRAM FEE</div>
                  <div className={` text-h6 text-[#333] font-semibold `}>
                    US$2,640
                    <div
                      className={` text-[12px] pt-1 font-light text-[#444] leading-1`}
                    >
                      View Payment Plans
                    </div>
                  </div>
                </div>
                <div className={`  `}>
                  <div className={`text-[12px] `}>FOR YOUR TEAM</div>
                  <div
                    className={` text-h6 text-[#333] font-semibold leading-6 `}
                  >
                    Enroll your team and learn with your peers
                    <div
                      className={` text-[12px] pt-1 font-light text-[#444] leading-1`}
                    >
                      Learn more
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={` container mx-auto py-16 `}>
            <div className={` grid grid-cols-12`}>
              <div className={` col-span-2`}></div>

              <div className={` col-span-8`}>
                <div
                  className={` text-2xl title pb-6 text-[#333] font-semibold text-center `}
                >
                  Develop Future-Ready Skills Today
                </div>

                <p className={` text-[#222] `}>
                  Emeritus is collaborating with Kellogg Executive Education to
                  help you build future-ready skills. Enroll before{" "}
                  <span className={` font-semibold text-[#222]`}>
                    {" "}
                    May 31, 2024 at 05:29 AM
                  </span>{" "}
                  and get up to{" "}
                  <span className={` font-semibold text-[#222]`}>4%</span>{" "}
                  tuition assistance along with a
                  <span className={` font-semibold text-[#222]`}>
                    {" "}
                    complimentary{" "}
                  </span>{" "}
                  1-year Wall Street Journal subscription.
                </p>
              </div>

              <div className={` col-span-2`}></div>
            </div>
          </div>
        </section>

        <section>
          <div className={` container mx-auto py-16 `}>
            <div className={` grid grid-cols-12`}>
              <div className={` col-span-2`}></div>
              <div className={` col-span-8`}>
                <div
                  className={` text-2xl title pb-6 text-[#333] font-semibold text-center `}
                >
                  Application Details
                </div>
                <button className={` bg-[#077da3] w-full text-white  text-h3`}>
                  SAVE 4%
                </button>
                <div className={` bg-[#eaeaea]`}>
                  <p className={` text-[#222] text-base text-center pt-1 `}>
                    PROGRAM FEE
                  </p>
                  <p
                    className={` text-h1 text-[#333] pt-1 text-center font-semibold `}
                  >
                    US$2,640
                  </p>
                  <p
                    className={` text-[#222] text-base text-center pt-2 pb-4 `}
                  >
                    Pay by May 31, 2024 at 05:29 AM
                  </p>
                </div>
              </div>
              <div className={` col-span-2`}></div>
            </div>
          </div>
        </section>

        <section>
          <div className={` container mx-auto py-16 `}>
            <div className={` grid grid-cols-12`}>
              <div className={` col-span-2`}></div>
              <div className={` col-span-8`}>
                <div
                  className={` text-2xl title pb-6 text-[#333] font-semibold text-center `}
                >
                  Is your marketing keeping up with digital-centric consumer
                  behaviors?
                </div>
                <p className={` text-[#222] `}>
                  The proliferation of new technologies such as mobile, cloud
                  computing, and artificial intelligence (AI) have transformed
                  customer behavior and disrupted marketplaces — both for B2B
                  and B2C markets. As a result, our marketing practices must
                  also evolve. Digital Marketing Strategies: Data, Automation,
                  AI & Analytics is much more than marketing through digital
                  channels.
                </p>

                <p className={` text-[#222] `}>
                  In this online program, business leaders, managers, and
                  marketing professionals will learn how modern marketing is
                  powered by data, scaled by automation, and optimized by
                  analytics.
                </p>

                <div className={` grid grid-cols-3 pt-2 gap-4`}>
                  <div>
                    <div
                      className={` num text-[#4e2581] font-semibold text-[62px]  text-center`}
                    >
                      52%
                    </div>
                    <p className={`  text-[#222] text-center`}>
                      More than half of consumers express frustration with
                      receiving irrelevant communications and offers.
                    </p>

                    <p className={` text-sm text-[#222] pt-4 text-center`}>
                      SOURCE: 3RADICAL
                    </p>
                  </div>

                  <div>
                    <div
                      className={` num text-[#4e2581] font-semibold text-[62px]  text-center`}
                    >
                      #1
                    </div>
                    <p className={`  text-[#222] text-center`}>
                      Artificial intelligence is the most impactful new
                      technology among CEOs for the third year running.
                    </p>

                    <p className={` text-sm text-[#222] pt-4 text-center`}>
                      SOURCE: GARTNER
                    </p>
                  </div>

                  <div>
                    <div
                      className={` num text-[#4e2581] font-semibold text-[62px]  text-center`}
                    >
                      1 in 3
                    </div>
                    <p className={`  text-[#222] text-center`}>
                      More than one-third of marketers express concern over
                      challenges, such as maximizing performance across channels
                      (38%), segmenting and targeting audiences (32%), and
                      scaling programs, content, and personalization (31%).
                    </p>

                    <p className={` text-sm text-[#222] pt-4 text-center`}>
                      SOURCE: ORACLE AND ASCEND2
                    </p>
                  </div>
                </div>
              </div>
              <div className={` col-span-2`}></div>
            </div>
          </div>
        </section>

        <section>
          <div className={` container mx-auto py-16 `}>
            <div className={` grid grid-cols-12`}>
              <div className={` col-span-2`}></div>
              <div className={` col-span-8`}>
                <div
                  className={` text-2xl title pb-6 text-[#333] font-semibold text-center `}
                >
                  Who Is This Program For?
                </div>
                <p className={` text-[#222] `}>
                  To master modern marketing, you will create strategies to
                  support better business decisions and gain the skills to
                  identify when, where and why customers choose your product or
                  service. By the end of the program, you will be able to:
                </p>

                <div className={` pt-6`}>
                  <div className={`flex `}>
                    <div
                      className={` h-[24px] bg-[#401e682b] flex justify-center items-center	 w-[24px] rounded-full`}
                    >
                      <IoIosCheckmark className={` text-[#401e68] text-h1`} />
                    </div>
                    <p className={`px-4 text-[#222]`}>
                      Go beyond traditional marketing practices and understand
                      the digital world your customers inhabit.
                    </p>
                  </div>

                  <div className={`flex pt-4 `}>
                    <div
                      className={` h-[24px] bg-[#401e682b] flex justify-center items-center	 w-[24px] rounded-full`}
                    >
                      <IoIosCheckmark className={` text-[#401e68] text-h1`} />
                    </div>
                    <p className={`px-4 text-[#222]`}>
                      Align your marketing efforts with today’s digital-savvy
                      customer through a clearer comprehension of
                      digital-centric customer behaviors.
                    </p>
                  </div>

                  <div className={`flex pt-4 `}>
                    <div
                      className={` h-[24px] bg-[#401e682b] flex justify-center items-center	 w-[24px] rounded-full`}
                    >
                      <IoIosCheckmark className={` text-[#401e68] text-h1`} />
                    </div>
                    <p className={`px-4 text-[#222]`}>
                      Discover how to evolve your marketing by incorporating
                      data, analytics, and optimization techniques for improved
                      decision-making.
                    </p>
                  </div>

                  <div className={`flex pt-4 `}>
                    <div
                      className={` h-[24px] bg-[#401e682b] flex justify-center items-center	 w-[24px] rounded-full`}
                    >
                      <IoIosCheckmark className={` text-[#401e68] text-h1`} />
                    </div>
                    <p className={`px-4 text-[#222]`}>
                      Learn from other companies using new marketing
                      technologies to inform their marketing and gain
                      organizational efficiencies.
                    </p>
                  </div>
                </div>
              </div>
              <div className={` col-span-2`}></div>
            </div>
          </div>
        </section>

        <section>
          <div className={` container mx-auto py-16 `}>
            <div className={` grid grid-cols-12`}>
              <div className={` col-span-2`}></div>

              <div className={` col-span-8`}>
                <div
                  className={` text-2xl title pb-6 text-[#333] font-semibold text-center `}
                >
                  Who Is This Program For?
                </div>

                <p className={` text-[#222] `}>
                  Business managers and leaders who are responsible for driving
                  innovation and growth, as well as seasoned marketing
                  practitioners, will gain a practical understanding of what
                  modern marketing practice looks like from an organizational
                  perspective. If your role includes attracting and retaining
                  customers in some way or delivering products and services,
                  there's something useful in this online program for you.
                </p>

                <p className={` text-[#222]  pt-4`}>
                  If managing a marketing team falls under your responsibility,
                  this program will be especially appropriate, as it takes a
                  high-level strategic view.
                </p>

                <p className={` text-[#222]   pt-4`}>
                  Participants come from a wide range of industries that include
                  retail, telecommunications, hospitality, global shipping,
                  technology, automotive, manufacturing, and others.
                </p>
              </div>

              <div className={` col-span-2`}></div>
            </div>
          </div>
        </section>

        <section>
          <div className={` container mx-auto py-16 `}>
            <div className={` grid grid-cols-12`}>
              <div className={` col-span-2`}></div>

              <div className={` col-span-8`}>
                <div
                  className={` text-2xl title pb-6 text-[#333] font-semibold text-center `}
                >
                  Applied Learning Opportunity
                </div>

                <p className={` text-[#222] `}>
                  Let's put these theories to work in practice. Throughout this
                  program, you will work on a Marketing Transformation
                  Challenge. You will identify a business challenge that you
                  would like to solve with a marketing solution. Ideally it's a
                  solution that you could apply in a real-life situation, making
                  the exercise inherently practical.
                </p>
              </div>

              <div className={` col-span-2`}></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
