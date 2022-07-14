import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
font-family: 'Montserrat', sans-serif;
`

export const Container = styled.div`
width:90%;
height:150px;
padding: 30px;
display:flex;
justify-content:space-between;
align-items:center;
@media(max-width:932px){
    width:100%;
}
`

export const Left = styled.div`
display:flex;
gap:60px;
align-items:center;
justify-content:center;
`

export const Right = styled.div`

`

export const Img = styled.img`
width:150px;
cursor:pointer;
`

export const Text = styled.p`
color:gray;
font-weight:700;
font-size: 20px;
cursor:pointer;
transition:0.2s;
&:hover{
    color:#000;
}
@media(max-width:1172px){
    display:none;
}
`

export const Box = styled.div`
height:100px;
width:290px;
background-color:#d8d7db;
margin-right:40px;
@media(max-width:1172px){
    display:none;
}
`