import React from "react";
import {Wrapper,Container,Left,Right,Img,Text,Box} from "./Navbar.styled"
import Link from "next/link";

const Navbar = () => {
    return(
        <Wrapper>
        <Container>
            <Left>
                <Img src="/images/logo.svg" alt="" />
                <Link href="/">
                    <Text>Features</Text>
                </Link>
                <Link href="/">
                    <Text>Pricing</Text>
                </Link>
                <Link href="/">
                    <Text>Resources</Text>
                </Link>
            </Left>
            <Right>
                <Box></Box>
            </Right>
        </Container>
        </Wrapper>
    )   
}

export default Navbar