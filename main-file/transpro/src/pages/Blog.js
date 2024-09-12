import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const BlogView = React.lazy(() => import("../components/BlogView"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarThree = React.lazy(() => import("../components/NavbarThree"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const SupportBarOne = React.lazy(() => import("../components/SupportBarOne"));
const Blog = () => {
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
          <Breadcrumb title={"BLOG"} />

          {/* Blog View */}
          <BlogView />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Blog;
