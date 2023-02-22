import MobileCTApage from "components/layout/mobileCTApage";
import React from "react";
import FindDealBtnSlider from "components/atoms/findDealsSlider";

const FindDeals = () => {
  return (
    <MobileCTApage
      iconWidth={120}
      iconHeight={125}
      icon="/assets/images/cart.png"
      heading="Find Best Deals"
      desc="Get the best deal that fits your schedule and visit"
      slider={<FindDealBtnSlider />}
    />
  );
};

export default FindDeals;
