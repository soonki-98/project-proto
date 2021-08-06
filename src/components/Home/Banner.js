import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import {
  AiOutlineGithub,
  AiFillAliwangwang,
  AiFillApple,
  AiOutlineQq,
  AiOutlineTwitter,
  AiFillAndroid,
  AiFillCar,
  AiFillCloud,
  AiFillCustomerService,
  AiFillGitlab,
  AiFillHome,
  AiFillRocket,
  AiFillSmile,
  AiOutlineDropbox,
  AiOutlineFire,
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineUsb,
  AiOutlineWeibo,
} from "react-icons/ai";

const PBlock = styled.p`
  font-size: 20px;
  /* font-weight: bold; */
  color: gray;
`;
const BannerBlock = styled.li`
  height: 200px;
  text-align: center;
`;

const DivBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 100px 200px 100px;
`;

function Banner() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <DivBlock>
      <Slider {...settings}>
        <BannerBlock>
          <AiOutlineGithub cursor="pointer" size="40%" />
          <PBlock>깃허브</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiFillAliwangwang cursor="pointer" size="40%" />
          <PBlock>왕왕</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiFillApple cursor="pointer" size="40%" />
          <PBlock>애플</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiOutlineQq cursor="pointer" size="40%" />
          <PBlock>큐큐</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiOutlineTwitter cursor="pointer" size="40%" />
          <PBlock>트위터</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiFillAndroid cursor="pointer" size="40%" />
          <PBlock>안드로이드</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiFillCar cursor="pointer" size="40%" />
          <PBlock>자동차</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiFillCloud cursor="pointer" size="40%" />
          <PBlock>클라우드</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiFillCustomerService cursor="pointer" size="40%" />
          <PBlock>음악</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiFillGitlab cursor="pointer" size="40%" />
          <PBlock>깃랩</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiFillHome cursor="pointer" size="40%" />
          <PBlock>집</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiFillRocket cursor="pointer" size="40%" />
          <PBlock>로켓</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiFillApple cursor="pointer" size="40%" />
          <PBlock>애플</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiFillSmile cursor="pointer" size="40%" />
          <PBlock>웃음</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiOutlineDropbox cursor="pointer" size="40%" />
          <PBlock>드롭박스</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiOutlineFire cursor="pointer" size="40%" />
          <PBlock>뽜이야~</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiOutlineSearch cursor="pointer" size="40%" />
          <PBlock>검색</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiOutlineUserAdd cursor="pointer" size="40%" />
          <PBlock>유저 더하기</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiOutlineUsb cursor="pointer" size="40%" />
          <PBlock>USB</PBlock>
        </BannerBlock>
        <BannerBlock>
          <AiOutlineWeibo cursor="pointer" size="40%" />
          <PBlock>웨이보</PBlock>
        </BannerBlock>
      </Slider>
    </DivBlock>
  );
}

export default Banner;
