import React from 'react';
import ReactLogo from '../../Assets/Images/undraw_scooter_aia8.svg';
import { Image, TextInfo, WrapperInfo } from './Info.element';
function Info() {
  return (
    <>
      <WrapperInfo>
        <TextInfo>Đặng Thái Vỉ</TextInfo>

        <Image src={ReactLogo}></Image>
      </WrapperInfo>
    </>
  );
}

export default Info;
