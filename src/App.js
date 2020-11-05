import Info from "./Components/Info/Info";
import Navbar from "./Components/Navbar/Navbar";
import { BsFillCaretUpFill } from "react-icons/bs";
import styled from 'styled-components';
import { useEffect, useState } from "react";

const BackToTop = styled.div`
  width:50px;
  height:50px;
  border-radius:50%;

  color:#fff;
  transition:all .3s;
  cursor: pointer;

  line-height:50px;
  text-align:center;
  position:fixed;
 
  font-size:1.2rem;
 

  bottom:30px;
  right:80px;

  background-color:#303030;
  &:hover{
    background-color:#d50d16;

  }
  @media only screen and (max-width:960px){
    bottom:20px;
    right:50px;
 
  }
  @media only screen and (max-width:760px){
    bottom:20px;
    right:20px;

  }
`;




function App() {
  const [backToTop,setBackToTop] = useState(false);
  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 100){
        setBackToTop(true)
      }else{
        setBackToTop(false)
      }
    }
    window.addEventListener("scroll",handleScroll)
  },[])
  return (
    <div className="App">
      <Navbar/>
      <Info/>
      {backToTop &&      
        <BackToTop onClick={()=>window.scrollTo({
          top:0,
          behavior:"smooth"
        })}>
        <BsFillCaretUpFill/>
      
        </BackToTop>
      }

    </div>
  );
}

export default App;
