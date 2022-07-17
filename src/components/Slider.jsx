import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import img1 from './shopping.jpg'
import img2 from './winter.jpg'
import img3 from './popular.jpg'
import styled from 'styled-components'
const Container = styled.div`
width: 100%;
height: 100vh;
display : flex;
position : relative;
overflow : hidden;

`

const Arrow = styled.div`

   width : 50px;
   height : 50px;
   background-color : white;
   border-radius : 50%;
   display : flex;
   align-items : center;
   justify-content : center;
   position : absolute;
   top:0;
   bottom:0;
   left : ${props => props.direction === "left" && "10px"};
   right : ${props => props.direction === "right" && "10px"};
   margin : auto;
   cursor : pointer;
   opacity : 0.5;
   z-index:2;

`


const Wrapper = styled.div`
height : 100%;
display:flex;
transform : translateX(-200vw)
`


const Slide = styled.div`

width : 100vw;
height : 100vh;
display : flex;
align-items :center;
background-color : #${props => props.bg};

`
const Image = styled.img`
height : 80%;
`


const ImgContainer = styled.div`
height:100%;
flex:1;
`
const InfoContainer = styled.div`
flex:1;
padding : 50px;
`
const Title = styled.h1`
font-size:70px;
`
const Desc = styled.p`
margin : 50px 0px;
font-size : 20px;
font-weight : bold;
letter-spacing : 3px;


`
const Button = styled.button`

padding : 10px;
font-size : 20px;
font-weight : bold;
background-color : transparent;
cursor : pointer;

`


const Slider = () => {
  const handleClick = (direction) => {

  }


  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="fSfafd">


          <ImgContainer>
            <Image src={img1} alt="" />

          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>


          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">


          <ImgContainer>
            <Image src={img2} alt="" />

          </ImgContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>


          </InfoContainer>
        </Slide>

        <Slide bg="fbf0f4">


          <ImgContainer>
            <Image src={img3} alt="" />

          </ImgContainer>
          <InfoContainer>
            <Title>POPULAR SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>


          </InfoContainer>
        </Slide>

      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container >

  )
}

export default Slider