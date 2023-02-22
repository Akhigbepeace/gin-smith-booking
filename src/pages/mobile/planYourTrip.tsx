import TripPlanningBtnSlider from "components/atoms/tripPlanningBtnSlider";
import MobileCTApage from "components/layout/mobileCTApage";
import React from "react";

const PlanYourTrip = () => {
  return (
    <MobileCTApage
      icon="/assets/images/plan.png"
      iconWidth={92}
      iconHeight={124}
      heading="Plan Your Trip"
      desc="Make request for a hotel room and get it prepared for you."
      slider={<TripPlanningBtnSlider />}
    />
  );
};

export default PlanYourTrip;
