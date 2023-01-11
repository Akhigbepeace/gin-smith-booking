import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import earthAbstract from "../assets/earth-abstract.png";
import skyscraper from "../assets/skyscraper.svg";
import facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Email from "../assets/Email.svg";
import BookNow from "../assets/bookNow.svg";
import desc2 from "../assets/desc 2.svg";
import GinSmith from "../assets/GinSmith Booking.svg";

const Home = () => {
  const socials = [Email, Twitter, facebook];
  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center justify-center overflow-hidden">
        <div className="w-full bg-[#035655] h-screen ">
          <Image
            src={skyscraper}
            alt="skyscrapers"
            width="1440"
            height="100"
            className="object-cover w-full relative bottom-[-50%]"
          />
        </div>

        <div className="flex  items-center justify-center absolute mt-[-100px]">
          <div className="flex flex-col items-center justify-center mr-[60px]">
            <Image
              src={earthAbstract}
              alt="abstract-earth"
              width="521"
              height="521"
              className="object-cover"
            />

            <p className="">
              <Image src={desc2} alt="Desc" />
              {/* With Our 24/7 operation, get around the world, via our trusted */}
              {/* platform. */}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div>
              <h1 className="text-[100px] font-normal text-[#D7B67E] font-['Water Brush']">
                <Image src={GinSmith} alt="Book-Now" />
                {/* GinSmith Booking */}
              </h1>
              <p className="text-[30px] font-[400] text-[#D7B67E] text-center font-[Sulphur Point]">
                Your Trusted Lodging Agency
              </p>

              <div className="flex items-center justify-center">
                {socials.map((social, index) => (
                  <NextLink href="#" key={index} legacyBehavior passHref>
                    <a href="#" className=" ml-[28px] mt-[62px]">
                      <Image src={social} alt="social icons" />
                    </a>
                  </NextLink>
                ))}
              </div>
            </div>

            <NextLink href="/explore" passHref legacyBehavior>
              <a className="self-end mt-[90px]">
                <Image src={BookNow} alt="Book-Now" />
              </a>
            </NextLink>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
