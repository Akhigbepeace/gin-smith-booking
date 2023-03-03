import Upcoming from "./upcoming";
import Favourite from "./favourite";
import Finished from "./finished";
import { ReactNode } from "react";

export type PageLinksProps = {
  id: string;
  href: string;
  pageTitle: string;
  content: ReactNode;
};

export const pageLinks: PageLinksProps[] = [
  {
    id: "upcoming",
    href: "/trips/upcoming",
    pageTitle: "UPCOMING",
    content: <Upcoming />,
  },
  {
    id: "favourite",
    href: "/trips/favourite",
    pageTitle: "FAVOURITE",
    content: <Favourite />,
  },
  {
    id: "finished",
    href: "/trips/finished",
    pageTitle: "FINISHED",
    content: <Finished />,
  },
];
