import styled from 'styled-components';
export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
export const TextInfo = styled.h1`
  text-align: center;
  height: 30vh;
  color: #111;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.8rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  @media only screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;
export const PortfolioText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f7f7f7;
  z-index: 999;

  font-size: 10rem;
  @media only screen and (max-width: 960px) {
    font-size: 7rem;
  }
  @media only screen and (max-width: 760px) {
    font-size: 5rem;
  }
  @media only screen and (max-width: 420px) {
    font-size: 3rem;
  }
`;
export const WrapperInfo = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00e8bf;
  overflow: hidden;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  transition: all 0.5s;
  overflow: hidden;

  transform: ${({ itemmove }) =>
    itemmove ? 'translateY(50px)' : 'translateY(0px)'};
`;

export const BoxName = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  color: #111;
  width: 90%;
  height: 90%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  visibility: hidden;
`;
export const IconsBox = styled.div`
  text-align: center;
  color: #a50a11;
  font-size: 2.5rem;
`;
export const BoxNameContent = styled.div``;
export const Name = styled.h1`
  text-align: center;
  color: #111;
  font-size: 2.3rem;
`;
export const Office = styled.p`
  text-align: center;
  color: #111;
  font-size: 1rem;
`;
export const Item = styled.div`
  width: 33.333333%;
  /* height: 100%; */
  cursor: pointer;
  position: relative;

  &:hover ${BoxName} {
    opacity: 1;
    visibility: visible;
  }
  &:hover {
    /* transform: scale(1.1); */
  }
  @media only screen and (max-width: 960px) {
    width: 50%;
  }
  @media only screen and (max-width: 760px) {
    width: 100%;
  }
`;
export const WrapperInfoContent = styled.div`
  width: 96%;
  margin: 0 auto;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
  padding: 200px 0;

  position: relative;

  overflow: hidden;

  @media only screen and (max-width: 960px) {
    padding: 150px 0;
  }
  @media only screen and (max-width: 760px) {
    padding: 100px 0;
  }
`;
export const IconsSquar = styled.div`
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translate(-50%, -1%);
  z-index: 1001;
  transition: all linear 0.5s;
  cursor: pointer;
  &:hover {
    color: orangered;
  }
`;

export const AboutText = styled.div`
  padding: 100px 0;
`;
export const AboutP = styled.p`
  color: #111;
  font-size: 1.7rem;
  text-align: center;

  @media only screen and (max-width: 760px) {
    font-size: 1.2rem;
  }
`;

export const AboutOffice = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 90%;
  margin: 0 auto;

  padding: 20px;
`;

export const ItemOffice = styled.div`
  text-align: center;
  width: 33.33%;
  @media only screen and (max-width: 960px) {
    width: 50%;
    margin: 10px 0;
  }
  @media only screen and (max-width: 760px) {
    width: 100%;
    margin: 15px 0;
  }
`;
export const ItemOfficeName = styled.h1`
  font-size: 1.2rem;
`;
export const ItemOfficeDescription = styled.p`
  font-size: 1rem;
  color: #6c757d;
`;
export const ItemOfficeIcon = styled.div`
  font-size: 4rem;
  color: #00ddb6;
`;

export const ButtonContactUs = styled.button`
  border: none;
  background-color: #d50d16;
  color: #fff;

  padding: 20px 40px;
  /* width: 20%; */

  margin: 20px auto;
  display: inline-block;
  cursor: pointer;
  transition: 0.3s all;
  text-transform: uppercase;

  font-weight: bold;
  &:hover {
    outline: none;
    border: none;
    background-color: #ed0e18;
    transform: translateY(-3px);
  }
  &:focus {
    outline: none;
    border: none;
  }
`;

export const Footer = styled.footer`
  background-image: url('https://i2.wp.com/www.bestazuretraining.com/blog/wp-content/uploads/2017/10/cloudcone-footer.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 50px 0;
`;
export const RowFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
export const ItemFooter = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 960px) {
    width: 100%;
    margin: 20px 0;
  }
`;
export const NameFooter = styled.h1`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  @media only screen and (max-width: 460px) {
    font-size: 1.3rem;
  }
`;
export const DesFooter = styled.p`
  font-size: 1.2rem;
  color: #8e8e8e;

  @media only screen and (max-width: 460px) {
    font-size: 1rem;
    text-align: center;
  }
`;
export const ItemDes = styled.div`
  display: flex;
`;
export const ItemFor = styled.div`
  margin: 0 15px;
`;
