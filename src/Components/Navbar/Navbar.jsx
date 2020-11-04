import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  Logo,
  Nav,
  NavList,
  List,
  MoblieIcon,
  Button,
  NavItemBtn,
  NavBtnLink,
} from './Navbar.element';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
function Navbar() {
  const [background, setBackground] = useState(true);

  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth < 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const handleClick = () => setClick(!click);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Wrapper background={background}>
          <Logo onClick={() => setBackground(!background)}>DTV</Logo>
          <Nav>
            <MoblieIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MoblieIcon>
            <NavList
              background={background}
              onClick={handleClick}
              click={click}
            >
              <List>Home</List>
              <List>About</List>
              <List>Contact</List>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink>
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavList>
          </Nav>
        </Wrapper>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
