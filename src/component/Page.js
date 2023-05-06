import React from "react";
import Header from "./Header";
import Content from "./Context";
import Footer from "./Footer";

const Page = () => {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
