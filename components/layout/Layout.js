import React from "react";
import HeaderComponent from "components/Header";
import Footer from "components/Footer";

const Layout = (props) => {
  return (
    <>
      <HeaderComponent />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
