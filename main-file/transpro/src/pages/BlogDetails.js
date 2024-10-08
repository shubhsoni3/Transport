import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const BlogDetailsInner = React.lazy(() =>
  import("../components/BlogDetailsInner")
);
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const NavbarThree = React.lazy(() => import("../components/NavbarThree"));
const SupportBarOne = React.lazy(() => import("../components/SupportBarOne"));
const BlogDetails = () => {
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
          <Breadcrumb title={"BLOG DETAILS"} />

          {/* Blog Details Inner */}
          <BlogDetailsInner />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default BlogDetails;
