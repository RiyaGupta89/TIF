import React from "react";
import { Wrapper,Container,Left,Right,Img,Icons,Icon,Box,TextBold,Text,Icons1 } from "./Footer.styled";

const Footer = () => {
    return(
        <Wrapper>
            <Container>
                <Left>
                    <Img style={{color:'#fff'}} src="/images/logo.svg" alt="" />
                    <Icons>
                        <Icon src="/images/icon-facebook.svg" alt="" />
                        <Icon src="/images/icon-twitter.svg" alt="" />
                        <Icon src="/images/icon-pinterest.svg" alt="" />
                        <Icon src="/images/icon-instagram.svg" alt="" />
                    </Icons>
                </Left>
                <Right>
                    <Box>
                        <TextBold>
                            Features
                        </TextBold>
                        <Text>
                            Link Shortening
                        </Text>
                        <Text>
                            Branded Links
                        </Text>
                        <Text>
                            Analytics
                        </Text>
                    </Box>
                    <Box>
                        <TextBold>
                            Resources
                        </TextBold>
                        <Text>
                            Blog
                        </Text>
                        <Text>
                           Developer
                        </Text>
                        <Text>
                            Support
                        </Text>
                    </Box>
                    <Box>
                        <TextBold>
                            Company
                        </TextBold>
                        <Text>
                            About
                        </Text>
                        <Text>
                            Our Team
                        </Text>
                        <Text>
                            Careers
                        </Text>
                        <Text>
                            Contact
                        </Text>
                    </Box>
                    <Icons1>
                        <Icon src="/images/icon-facebook.svg" alt="" />
                        <Icon src="/images/icon-twitter.svg" alt="" />
                        <Icon src="/images/icon-pinterest.svg" alt="" />
                        <Icon src="/images/icon-instagram.svg" alt="" />
                    </Icons1>
                </Right>
            </Container>
        </Wrapper>
    )
}

export default Footer;