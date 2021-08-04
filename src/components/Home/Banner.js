import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import bg1 from "../../style/img/bg1.jpg";
import bg2 from "../../style/img/bg2.jpg";
import bg3 from "../../style/img/bg3.jpg";
import bg4 from "../../style/img/bg4.jpg";
import bg5 from "../../style/img/bg5.jpg";
import bg6 from "../../style/img/bg6.jpg";

const BannerBlock = styled.li`
  height: 600px;
`;

const DivBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 30px;
  margin-top: 120px;
`;

const ImgBlock = styled.img`
  display: block;
  margin: 0 auto;
`;

function Banner() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <DivBlock>
      <Slider {...settings}>
        <BannerBlock>
          <ImgBlock src={bg1} width="60%" height="80%" alt="배경" />
        </BannerBlock>
        <BannerBlock>
          <ImgBlock src={bg2} width="60%" height="80%" alt="배경" />
        </BannerBlock>
        <BannerBlock>
          <ImgBlock src={bg3} width="60%" height="80%" alt="배경" />
        </BannerBlock>
        <BannerBlock>
          <ImgBlock src={bg4} width="60%" height="80%" alt="배경" />
        </BannerBlock>
        <BannerBlock>
          <ImgBlock src={bg5} width="60%" height="80%" alt="배경" />
        </BannerBlock>
        <BannerBlock>
          <ImgBlock src={bg6} width="60%" height="80%" alt="배경" />
        </BannerBlock>
      </Slider>
    </DivBlock>
  );
}

export default Banner;
