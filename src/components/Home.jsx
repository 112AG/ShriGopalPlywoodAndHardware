import React from "react";
import Main from "../assets/Main.jpg";
import { FaBox } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import Owner from "../assets/Owner.png";
import Button from "@mui/material/Button";

function Home() {
  return (
    <div className="h-full w-fit px-2 sm:px-4">
      <img
        className="h-full w-full overflow-hidden rounded "
        src={Main}
        alt=""
      />

      <div className="flex py-6 justify-between w-full flex-col lg:flex-row gap-1">
        <h1 className="text-[44px] leading-none font-bold">
          Discover Premium Plywood & Hardware Solutions
        </h1>
        <div>
          <p className="text-gray-700">
            Welcome to your one-stop destination for top-quality plywood and
            hardware products. Elevate your projects with our expertly crafted
            materials designed for durability and style.
          </p>
          <div className="pt-4 w-full flex items-center justify-center sm:flex-row flex-col gap-2">
            <Button
              variant="contained"
              sx={{
                borderColor: "black",
                color: "White",
                backgroundColor: 'Black',
                borderRadius: '0px'
              }}
            >
              Contained
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "black",
                color: "black",
                borderRadius: '0px',
                "&:hover": {
                  borderColor: "black",
                  backgroundColor: "transparent",
                  boxShadow: '0px 0px 1px black'
                },
              }}
            >
              Contact Now
            </Button>
          </div>
        </div>
      </div>

      <div className="flex w-full md:flex-row flex-col-reverse py-6 items-start leading-none">
        <div>
          <h1 className="text-[34px] pt-4 md:pt-0 font-bold lg:text-[44px]">
            Discover Our Best-Selling Plywood and Hardware Products for Your
            Next Project
          </h1>
          <p className="text-gray-700 leading-tight lg:py-6 py-2">
            Explore our top-quality plywood and hardware items that cater to all
            your construction needs. Each product is designed for durability and
            performance, ensuring you achieve the best results.
          </p>
          <div className="flex lg:gap-4 gap-2">
            <div>
              <FaBox className="lg:text-[28px] text-2xl m-1 text-gray-800 " />
              <h3 className="font-semibold pb-1">Premium Plywood</h3>
              <p className="text-sm leading-tight ">
                High-grade plywood for strength and versatility in any project
                you undertake.
              </p>
            </div>
            <div>
              <FaBox className="lg:text-[28px] text-2xl m-1 text-gray-800 " />
              <h3 className="font-semibold pb-1">Quality Hardware</h3>
              <p className="text-sm leading-tight">
                Reliable hardware solutions that enhance your building
                experience and ensure lasting results.
              </p>
            </div>
          </div>
          <div className="w-full md:text-left text-center ">
          <Button
            variant="outlined"
            sx={{
              borderColor: "black",
              margin: '16px 0',
              color: "black",
              borderRadius: '0px',
              "&:hover": {
                borderColor: "black",
                backgroundColor: "transparent",
                boxShadow: '0px 0px 1px black'
              },
            }}
          >
            Check More
          </Button>
          </div>
        </div>

        <div className="h-full w-auto overflow-hidden">
          <img
            className="h-[65vh] md:h-full w-[800px] object-cover object-bottom"
            src="https://images.unsplash.com/photo-1698417945941-002d5764e98b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>

      <div className="w-full flex py-6 lg:flex-row flex-col gap-2">
        <h2 className="text-[34px] md:text-4xl font-bold pb-2 leading-none">
          Discover Our Impressive Performance and Customer Satisfaction
          Statistics
        </h2>
        <div className="flex flex-col gap-3 ">
          <p>
            We take pride in our exceptional performance, having sold over
            10,000 products this year. Our customer satisfaction rate stands at
            an impressive 95%, reflecting our commitment to quality.
          </p>
          <div className="flex lg:justify-between justify-evenly items-start gap-3 ">
            <div className="">
              <h2 className="font-bold text-5xl">95%</h2>
              <p className="text-xs text-gray-800">
                Customer satisfaction rate based on recent surveys.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-5xl">10,000</h2>
              <p className="text-xs text-gray-800">
                Products sold this year, showcasing our growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center md:flex-row flex-col py-6">
        <div className="md:block hidden">
          <div className="h-24 w-24 border overflow-hidden p-2 mb-4 rounded">
            <img
              className="object-center h-full w-full object-cover"
              src={Logo}
            />
          </div>
          <ul className="flex gap-6 items-center font-semibold ">
  <li>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? "font-bold" : "")}
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/about"
      className={({ isActive }) => (isActive ? "font-bold" : "")}
    >
      About
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) => (isActive ? "font-bold" : "")}
    >
      Contact
    </NavLink>
  </li>
</ul>

        </div>
        <div className="h-56 overflow-hidden w-56 p-1 border-2 border-red-900 rounded-full">
          <img src={Owner} className="object-bottom" />
        </div>
        <div className="text-center md:text-right">
          <h1 className="font-bold text-3xl">Managing Director</h1>
          <p className="text-2xl">Ankit Tiwari</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
