import React from "react";
import error from "../../assets/png/error.png";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import useTitle from "../../hooks/useTitle";
const ErrorPage = () => {
  useTitle("Page Not Found")
  return (
    <div className="">
      <Header></Header>
      <div className="hero w-full bg-mybg shadow-2xl">
        <div className="hero-content grid md:grid-cols-2 gap-20 my-10 flex-col lg:flex-row">
          <div className="text-center lg:text-left bg-mybg">
            <img className="w-3/4" src={error} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm  bg-mybg my-10 font-custom1 text-myprimary ">
            <h1 className="text-5xl font-bold text-center">404</h1>
            <p className="text-2xl">Please Check Page URL Correctly!</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
