import React from "react";
import HeaderComponent from "components/Header";
import Footer from "components/Footer";

import Script from 'next/script'

const Layout = (props) => {
  return (
    <>
      <HeaderComponent />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
