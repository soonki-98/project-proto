import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import WooahanLogo from "../style/img/Logo.png";
import Gstar from "../style/img/Gstar.jpg";
import Jungsan from "../style/img/Jungsan.png";
import Sisa from "../style/img/Sisa.png";
import Soum from "../style/img/Soum.png";
import BlueShark from "../style/img/BlueShark.png";

const BannerBlock = styled.li`
  height: 450px;
`;

const DivBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 100px;
  width: 900px;
`;

const ImgBlock = styled.img`
  display: block;
  margin: 0 auto;
`;

function Banner() {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <DivBlock>
      <Slider {...settings}>
        <BannerBlock>
          <ImgBlock src={WooahanLogo} width="450px" height="450px" alt="배경" />
        </BannerBlock>
        <BannerBlock>
          <ImgBlock src={Gstar} width="450px" height="450px" alt="배경" />
        </BannerBlock>
        <BannerBlock>
          <ImgBlock src={Jungsan} width="450px" height="450px" alt="배경" />
        </BannerBlock>
        <BannerBlock>
          <ImgBlock src={Sisa} width="450px" height="450px" alt="배경" />
        </BannerBlock>
        <BannerBlock>
          <ImgBlock src={Soum} width="450px" height="450px" alt="배경" />
        </BannerBlock>
        <BannerBlock>
          <ImgBlock src={BlueShark} width="450px" height="450px" alt="배경" />
        </BannerBlock>
      </Slider>
    </DivBlock>
  );
}

export default Banner;
