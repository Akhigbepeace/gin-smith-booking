import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import ResponsiveIndex from "../components/layout/mobile";

const Home = () => {
  const earthAbstract = "/assets/images/earthAbstract.png";
  const skyscraper = "/assets/images/skyscraper.svg";
  const facebook = "/assets/images/Facebook.svg";
  const Twitter = "/assets/images/Twitter.svg";
  const Email = "/assets/images/Email.svg";

  const socials = [
    {
      icon: Email,
      href: "https://mail.google.com/mail/u/0/#inbox?compose=new",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/ginsmithbooking",
    },
    {
      icon: facebook,
      href: "https://www.facebook.com/profile.php?id=100090356522636",
    },
  ];

  return (
    <>
      <Head>
        <title>GINSMITH BOOKING | Home</title>
        <meta
          name="description"
          content="With Our 24/7 operation, get around the world, via our trusted platform."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        id="landing-page"
        className="xl:flex lg:hidden items-center justify-center overflow-hidden"
      >
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

            <p className="text-[28px] leading-[28px] font-[400] text-[#D7B67E] text-center font-sulphur-point w-[332px]">
              With Our 24/7 operation, get around the world, via our trusted
              platform.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div>
              <h1 className="text-[100px] font-normal text-[#D7B67E] font-water-brush">
                GinSmith Booking
              </h1>
              <p className="text-[30px] font-[400] text-[#D7B67E] text-center font-sulphur-point">
                Your Trusted Lodging Agency
              </p>

              <div className="flex justify-center mt-[42px]">
                {socials.map((social, index) => (
                  <NextLink
                    href={social.href}
                    key={index}
                    legacyBehavior
                    passHref
                  >
                    <a
                      href={social.href}
                      className=" ml-[28px]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={social.icon}
                        alt="social icons"
                        width={45}
                        height={45}
                      />
                    </a>
                  </NextLink>
                ))}
              </div>
            </div>

            <NextLink href="./explore/Index" passHref legacyBehavior>
              <a className="mt-[90px] bg-[#011717] py-[8px] text-center font-sulphur-point text-[30px] font-[300] w-[557px] text-white rounded-[40px]">
                Book Now
              </a>
            </NextLink>
          </div>
        </div>
      </main>

      <div className=" lg:block xl:hidden ">
        <ResponsiveIndex />
      </div>
    </>
  );
};

export default Home;
