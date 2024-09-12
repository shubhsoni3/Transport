import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const NavbarThree = React.lazy(() => import("../components/NavbarThree"));
const ServiceDetailsInner = React.lazy(() =>
  import("../components/ServiceDetailsInner")
);
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const SupportBarOne = React.lazy(() => import("../components/SupportBarOne"));
const ServiceDetails = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          {/* <SearchPopup /> */}
<SupportBarOne />
          {/* Navbar One */}
          {/* <NavbarOne /> */}
<NavbarThree />
          {/* Breadcrumb */}
          <Breadcrumb title={"SERVICES DETAILS"} />

          {/* Service Details Inner */}
          <ServiceDetailsInner />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>{" "}
      </Fragment>
    </>
  );
};

export default ServiceDetails;
