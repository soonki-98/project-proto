import React, { useState, useEffect } from "react";
import ClubHeader from "../components/Home/ClubHeader";
import Banner from "../components/Home/Banner";
import Body from "../components/Home/Body";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <>
      <ClubHeader scrollPosition={scrollPosition} />
      <Banner />
      <Body />
    </>
  );
}

export default Home;
