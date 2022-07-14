import React from "react";
import {Wrapper,Container,Img,Heading} from "./Hero.styled"

const Navbar = () => {
    return(
        <Wrapper>
        <Container>
                <Heading>MORE THAN JUST SHORTER LINKS</Heading>
                <Img src="/images/people working.png" alt="" />
        </Container>
        </Wrapper>
    )   
}

export default Navbar