import styled from 'styled-components';
export const Image = styled.img`
  width: 100%;
  height: 90vh;

  object-fit: cover;
`;
export const TextInfo = styled.h1`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #111;
  font-size: 1.8rem;
  @media only screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;
export const WrapperInfo = styled.div`
  position: relative;
`;
