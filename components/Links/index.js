import React from "react";
import {Wrapper,Container,Container1,Box,BoxLeft,BoxRight,Text,TextCyan,Button,Heading,TextNew,Boxes,Box1,Box1Head,Box1Text,Img,Hr,ImgBox} from "./Links.styled"

const Links = () => {
    return (
        <Wrapper>
            <Container>
                <Box>
                    <BoxLeft>
                        <Text>https://www.frontendmentor.io</Text>
                    </BoxLeft>
                   
                    <BoxRight>
                        <TextCyan>https://rel.ink/k4lKyk</TextCyan>
                        <Button>Copy</Button>
                    </BoxRight>
                </Box>
                <Box>
                    <BoxLeft>
                        <Text>https://www.frontendmentor.io</Text>
                    </BoxLeft>
                   
                    <BoxRight>
                        <TextCyan>https://rel.ink/k4lKyk</TextCyan>
                        <Button>Copy</Button>
                    </BoxRight>
                </Box>
                <Box>
                    <BoxLeft>
                        <Text>https://www.frontendmentor.io</Text>
                    </BoxLeft>
                    
                    <BoxRight>
                        <TextCyan>https://rel.ink/k4lKyk</TextCyan>
                        <Button>Copy</Button>
                    </BoxRight>
                </Box>
            </Container>
            <Container1>
                <Heading>
                    Advanced Statistics
                </Heading>
                <TextNew>
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </TextNew>
                <Boxes>
                    <Box1>
                        <ImgBox>
                        <Img src="/images/icon-brand-recognition.svg" alt="" />
                        </ImgBox>
                        <Box1Head>
                            Brand Recognition
                        </Box1Head>
                        <Box1Text>
                            Boost your brand recognition with each click. Generate links doesn't mean a thing. Branded links help instil confidence in your content.
                        </Box1Text>
                   

                    </Box1>
                    <Box1>
                        <ImgBox>
                        <Img src="/images/icon-brand-recognition.svg" alt="" />
                        </ImgBox>
                        <Box1Head>
                            Brand Recognition
                        </Box1Head>
                        <Box1Text>
                            Boost your brand recognition with each click. Generate links doesn't mean a thing. Branded links help instil confidence in your content.
                        </Box1Text>
                        
                    </Box1>
                   
                    <Box1>
                        <ImgBox>
                        <Img src="/images/icon-brand-recognition.svg" alt="" />
                        </ImgBox>
                        <Box1Head>
                            Brand Recognition
                        </Box1Head>
                        <Box1Text>
                            Boost your brand recognition with each click. Generate links doesn't mean a thing. Branded links help instil confidence in your content.
                        </Box1Text>
                    </Box1>
                    
                </Boxes>
            </Container1>
        </Wrapper>
    )
}

export default Links;