import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children, title }) => {
  return (
    <>
      
        <meta charSet="utf-8" />
        <title>{title}</title>
    
      <Header />
      <main>{children}</main>
      <Footer />
    </> );
};

// Layout.defaultProps = {
//   title: "House Markteplace - search best home near you  ",
// };

export default Layout;
