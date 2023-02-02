import Head from "next/head";
import Image from "next/image";
import React from "react";
import PagesHeader from "../components/molecules/pagesHeader";

const HelpCenter = () => {
  const arrow = "/assets/images/arrow.png";
  const questions = [
    {
      question: "How do I cancel My room reservation?",
      answer: "Loading...",
    },
    {
      question: "How do I edit or cancel My payment history?",
      answer: "Click on the payment history button",
    },
    {
      question: "What are the available medium for payment",
      answer: "Please Wait",
    },
  ];
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Help Center</title>
      </Head>

      <div className="bg-[#035655] h-[100vh]">
        <header>
          <PagesHeader title="Help Center" href="/profile" />
        </header>

        <div className="pt-[30px] pl-[114px]  ">
          <div>
            <div>
              <h1 className="font-sulphur-point font-[700] text-[30px]  text-white ">
                How Can We help?
              </h1>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                className="mt-[10px] text-black w-[995px] py-[10px] pl-[82px] rounded-[30px] placeholder:font-sulphur-point  text-[20px] placeholder:text-[#979797]  "
              />
            </div>
          </div>

          <div className="mt-[107px]  ">
            <h1 className="font-sulphur-point font-[700] text-[35px] text-white ">
              FAQ.
            </h1>

            <div
              id="accordion-flush"
              data-accordion="expand"
              data-active-classes="bg-white dark:bg-white text-white dark:text-white"
              data-inactive-classes="text-white dark:white"
            >
              {questions.map((data, index) => (
                <div key={index} className="w-[1066px] ">
                  <h2 id={`accordion-flush-heading-${index}`}>
                    <button
                      type="button"
                      className="font-sulphur-point flex items-center justify-between w-full py-[20px] text-[20px] font-[700] text-left text-white border-b border-white dark:border-white dark:white"
                      data-accordion-target={`#accordion-flush-body-${index}`}
                      aria-expanded="true"
                      aria-controls={`accordion-flush-body-${index}`}
                    >
                      <span>{data.question}</span>

                      <div className="w-[25px] h-[25px] rotate-180 ">
                        <Image src={arrow} alt="arrow" width={47} height={47} />
                      </div>
                    </button>
                  </h2>

                  <div
                    id={`accordion-flush-body-${index}`}
                    className="hidden"
                    aria-labelledby={`accordion-flush-heading-${index}`}
                  >
                    <div className="font-sulphur-point text-white py-5 font-light ">
                      {data.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
