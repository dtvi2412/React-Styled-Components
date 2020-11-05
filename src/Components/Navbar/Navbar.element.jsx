import styled from 'styled-components';

/* background-color: ${background ? '#111' : '#7f7f96'}; */
export const Wrapper = styled.section`
  padding: 30px 0;
  background-color: black;
  background-color: ${(props) => (props.background ? '#101522;' : '#00e8bf')};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Logo = styled.div`
  color: #fff;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
export const Nav = styled.nav`
  display: flex;
  transition: all 0.5s ease;
`;
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;

    position: absolute;
    top: 100px;
    left: ${(props) => (props.click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${({ background }) => (background ? '#101522' : '#00e8bf')};

    z-index: 10000;
  }
`;
export const List = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 0 10px;
  /* color: ${(props) => (props.background ? '#111;' : '#fff')}; */

  border-bottom: 2px solid transparent;
  &:hover {
    color: orangered;
    cursor: pointer;
  }
  @media only screen and (max-width: 960px) {
    width: 100%;

    height: 80px;
    &:hover {
      border: none;
    }
  }
`;

export const MoblieIcon = styled.div`
  display: none;

  @media only screen and (max-width: 960px) {
    display: block;

    position: absolute;
    top: 0;
    right: 0;

    transform: translate(-100%, 100%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const NavItemBtn = styled.li`
  @media only screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 120px;
  }
`;
export const NavBtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  padding: 8px 16px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;
