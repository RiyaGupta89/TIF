import React, { useState } from "react";
import axios from "axios";
import { Wrapper,Container,InputContainer,Input,Button,Links,Div,Left,Right } from "./Link.styled";

const Link = () => {
    const [link,setLink]=useState("");

    const handleClick = () => {
        if(link.length<1){
            alert("Please enter the url first");
        } else {
            axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
            .then(res => {
                console.log(res);
            }).catch(err=>{
                console.log(err);
            });
          
        }
    }
    return(
        <Wrapper>
            <Container>
                <InputContainer>
                    <Input placeholder="Shorten a link here..." type="text" value={link} onChange={(e)=>setLink(e.target.value)} />
                    <Button onClick={handleClick}>Shorten it!</Button>
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