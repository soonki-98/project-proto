import React, { useState, useEffect } from "react";
import ClubHeader from "../components/Home/ClubHeader";
import Banner from "../components/Home/Banner";
import Logo from "../components/Home/Logo";
import News from "../components/Home/News";
import Footer from "../components/Home/Footer";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [toggle, setToggle] = useState(false);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <ClubHeader
        scrollPosition={scrollPosition}
        toggle={toggle}
        onToggle={onToggle}
      />
      <Logo />
      <Banner />
      <News />
      <Footer />
    </>
  );
}

export default Home;
