import React, { useEffect, useState } from 'react';

import { dataImage } from '../../DataImage';
import {
  Image,
  TextInfo,
  WrapperInfo,
  ItemInfo,
  WrapperInfoContent,
  Item,
  Top,
  IconsSquar,
  PortfolioText,
  BoxName,
  Name,
  Office,
  BoxNameContent,
  IconsBox,
  AboutText,
  AboutP,
  AboutOffice,
  ItemOffice,
  ItemOfficeName,
  ItemOfficeDescription,
  ItemOfficeIcon,
  ButtonContactUs,
  Footer,
  RowFooter,
  ItemFooter,
  NameFooter,
  DesFooter,
  ItemDes,
  ItemFor,
} from './Info.element';
import { HiViewGrid } from 'react-icons/hi';
// GiSwordwoman
import {
  GiNinjaHead,
  GiCrossbow,
  GiBank,
  GiRunningNinja,
} from 'react-icons/gi';

function Info() {
  const [listImage, setListImage] = useState([]);
  const [itemmove, setitemmove] = useState(false);
  useEffect(() => {
    setListImage(dataImage);
  }, []);

  const renderImageItem = () => {
    return listImage.map((item, index) => (
      <Item key={index}>
        <Image src={item.img}></Image>
        <BoxName>
          <BoxNameContent>
            <IconsBox>
              <GiNinjaHead />
            </IconsBox>

            <Name>{item.name}</Name>
            <Office>{item.office}</Office>
          </BoxNameContent>
        </BoxName>
      </Item>
    ));
  };
  return (
    <>
      <WrapperInfo>
        <WrapperInfoContent>
          <Top>
            <PortfolioText>PORTFOLIO</PortfolioText>
            <TextInfo>Creative Design Agency</TextInfo>
            <IconsSquar onClick={() => setitemmove(!itemmove)}>
              <HiViewGrid style={{ fontSize: '2rem' }} />
            </IconsSquar>
          </Top>

          <ItemInfo itemmove={itemmove}>{renderImageItem()}</ItemInfo>
          <AboutText>
            <AboutP>
              Over 10 years of combined experience, and know a thing or two
              about designing websites and mobile apps.
            </AboutP>
          </AboutText>
          <AboutOffice>
            <ItemOffice>
              <ItemOfficeIcon>
                <GiCrossbow />
              </ItemOfficeIcon>
              <ItemOfficeName>Web Development</ItemOfficeName>
              <ItemOfficeDescription>
                {' '}
                Web development is a broad term for the work involved in
                developing a web site for the Internet.
              </ItemOfficeDescription>
            </ItemOffice>
            <ItemOffice>
              <ItemOfficeIcon>
                <GiRunningNinja />
              </ItemOfficeIcon>
              <ItemOfficeName>Web & UI/UX Design</ItemOfficeName>
              <ItemOfficeDescription>
                Web design encompasses many different skills and disciplines in
                the production of all web.
              </ItemOfficeDescription>
            </ItemOffice>
            <ItemOffice>
              <ItemOfficeIcon>
                <GiBank />
              </ItemOfficeIcon>
              <ItemOfficeName>SEO & Marketing</ItemOfficeName>
              <ItemOfficeDescription>
                A process of affecting the visibility of a website or a web page
                in a web search engine's unpaid results.
              </ItemOfficeDescription>
            </ItemOffice>
          </AboutOffice>
          <ButtonContactUs>Contact Us</ButtonContactUs>
          <Footer>
            <RowFooter>
              <ItemFooter>
                <NameFooter>Say Hi!</NameFooter>
                <DesFooter>info@Example.com</DesFooter>
                <DesFooter>+44 987 585 874</DesFooter>
              </ItemFooter>
              <ItemFooter>
                <NameFooter>THE AGENCY</NameFooter>

                <ItemDes>
                  <ItemFor>
                    <DesFooter>Projects</DesFooter>
                    <DesFooter>About</DesFooter>
                    <DesFooter>Services</DesFooter>
                    <DesFooter>Career</DesFooter>
                  </ItemFor>

                  <ItemFor>
                    <DesFooter>News</DesFooter>
                    <DesFooter>Events</DesFooter>
                    <DesFooter>Contact</DesFooter>
                    <DesFooter>Legals</DesFooter>
                  </ItemFor>
                </ItemDes>
              </ItemFooter>
              <ItemFooter>
                <NameFooter>FOLLOW US</NameFooter>

                <ItemDes>
                  <ItemFor>
                    <DesFooter>Facebook</DesFooter>
                    <DesFooter>Twitter</DesFooter>
                    <DesFooter>Instagram</DesFooter>
                    <DesFooter>Linkedin</DesFooter>
                  </ItemFor>

                  <ItemFor>
                    <DesFooter>Dribble</DesFooter>
                    <DesFooter>Behance</DesFooter>
                    <DesFooter>Pinterest</DesFooter>
                  </ItemFor>
                </ItemDes>
              </ItemFooter>
              <ItemFooter>
                <NameFooter>COPYRIGHT</NameFooter>
                <DesFooter>2020 © Design by Unvab. Code by DTV</DesFooter>
              </ItemFooter>
            </RowFooter>
          </Footer>
        </WrapperInfoContent>
      </WrapperInfo>
    </>
  );
}

export default Info;
