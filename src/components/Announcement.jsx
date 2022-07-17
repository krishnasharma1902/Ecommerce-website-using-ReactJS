import styled from 'styled-components'

const Container = styled.div`

height : 30px;
background-color: teal;
color:white;

display:flex;
justify-content:center;
align-items:center;
font-size : 14px;
font-weight : 500;
font-weight:bold;

`

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders for $50
        </Container>
    )
}

export default Announcement