import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const BannerBlock = styled.div`
  height: 300px;
  background-color: gray;
`;

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <BannerBlock>
          <h3>1</h3>
        </BannerBlock>
        <BannerBlock>
          <h3>2</h3>
        </BannerBlock>
        <BannerBlock>
          <h3>3</h3>
        </BannerBlock>
        <BannerBlock>
          <h3>4</h3>
        </BannerBlock>
        <BannerBlock>
          <h3>5</h3>
        </BannerBlock>
        <BannerBlock>
          <h3>6</h3>
        </BannerBlock>
      </Slider>
    </div>
  );
}

export default Banner;
