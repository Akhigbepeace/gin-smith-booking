import PagesHeader from "components/molecules/pagesHeader";
import SubPagesButton from "components/molecules/subPagesButton";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import MobileMenu from "../mobile/mobileMenu";
import { pageLinks, PageLinksProps } from "./constants";

const TripsIndex = () => {
  const tripStats = [
    {
      title: "Upcoming",
      href: "/trips/upcoming",
    },
    {
      title: "Finished",
      href: "/trips/finished",
    },
    {
      title: "Favourite",
      href: "/trips/favourite",
    },
  ];

  const router = useRouter();
  const { id } = router.query;
  const currentId = id || "upcoming";
  const activePage = pageLinks.find(
    (link) => link.id === currentId
  ) as PageLinksProps;

  return (
    <>
      <div>
        <div className="lg:block sm:hidden">
          <PagesHeader title="Trips" href="/profile" />
        </div>

        <div className="sm:block xl:hidden">
          <h1 className="font-sulphur-point font-[300] text-[32px] pt-[60px] pl-[60px] drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)] ">
            Trips
          </h1>

          <div className="grid grid-flow-col rounded-[20px] bg-[#C38317] w-[90%] mx-auto mt-[46px]">
            {tripStats.map((stat, index) => (
              <Link
                key={index}
                href={stat.href}
                className="text-white font-sulphur-point font-[300] text-center text-[16px] py-[12px]"
              >
                {stat.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className=" xl:bg-[#035655] sm:bg-none  pt-[65px] ">
        <SubPagesButton pageLinks={pageLinks} activeItem={activePage.pageTitle}>
          {activePage.content}
        </SubPagesButton>
      </div>

      <MobileMenu
        exploreIconColor="text-black"
        tripsIconColor="text-[#00AAA8]"
        profileIconColor="text-black"
      />
    </>
  );
};

export default TripsIndex;
