import React from "react";

import { Wrapper,Container,InputContainer,Input,Button,Links,Div,Left,Right } from "./Link.styled";

const Link = () => {
    return(
        <Wrapper>
            <Container>
                <InputContainer>
                    <Input placeholder="Shorten a link here..." type="text" />
                    <Button>Shorten it!</Button>
                </InputContainer>
                <Links>
                    <Div>
                        <Left>

                        </Left>
                        <Right>

                        </Right>
                    </Div>
                    </Links>
            </Container>
        </Wrapper>
    )
}

export default Link