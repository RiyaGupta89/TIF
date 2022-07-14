import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-left:-32px;
margin-right:-32px;
background-color: #232127;
font-family: 'Montserrat', sans-serif;
`

export const Container = styled.div`
display:flex;
gap:240px;
padding: 70px 0;
align-items:flex-start;
width:90%;
@media(max-width:1040px){
    gap:100px;
}
@media(max-width:868px){
    flex-direction:column;
    gap:40px;
    align-items:center;
}
`

export const Left = styled.div`

`

export const Right = styled.div`
display:flex;
gap:80px;
width:100%;
@media(max-width:868px){
    flex-direction:column;
    gap:30px;
    align-items:center;
}
`

export const Img = styled.img`
width:160px;
color:white;
`

export const Icons = styled.div`
display:flex;
gap:30px;
margin-top:30px;
@media(max-width:868px){
    display:none;
}
`
export const Icons1 = styled.div`
display:none;
gap:30px;
margin-top:30px;
@media(max-width:868px){
    display:flex;
}
`

export const Icon = styled.img`
width:30px;
height:30px;
cursor:pointer;
`

export const Box = styled.div`
display:flex;
flex-direction:column;
gap:12px;
`

export const TextBold = styled.p`
margin:0;
margin-bottom:10px;
color:#fff;
font-weight:500;
font-size:20px;
@media(max-width:868px){
    text-align:center;
}
`

export const Text = styled.p`
margin:0;
color:#fafafa;
font-size:18px;
cursor:pointer;
&:hover{
    color: #2acfcf;
}
@media(max-width:868px){
    text-align:center;
}
`