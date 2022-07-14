import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:#d8d7db;
margin-top:-100px;
margin-left:-32px;
margin-right:-32px;
flex-direction:column;
font-family: 'Montserrat', sans-serif;
@media(max-width:1172px){
    background-color:#eae8ed;
}
`

export const Container = styled.div`
width:90%;
display:flex;
flex-direction:column;
gap:30px;
padding-top:150px;
`


export const Container1 = styled.div`
width:90%;
display:flex;
flex-direction:column;
gap:30px;
padding:70px 0 140px 0;
align-items:center;
`


export const Box = styled.div`
background-color:#fff;
display:flex;
gap:40px;
justify-content:space-between;
align-items:center;
padding: 10px 40px;
border-radius:8px;
@media(max-width:932px){
    flex-direction:column;
    align-items:flex-start;
}
@media(max-width:500px){
    padding:10px;
}
`

export const BoxLeft = styled.div`

`

export const BoxRight = styled.div`
display:flex;
gap:40px;
align-items:center;
@media(max-width:932px){
    flex-direction:column;
    align-items:flex-start;
    gap:0px;
    width:100%;
}
`



export const Text = styled.p`
font-size:21px;
font-weight:500;
color:#000;
margin:0;
@media(max-width:500px){
    font-size:19px;
}
`

export const TextCyan = styled.p`
font-size:21px;
font-weight:500;
color:#2acfcf;
margin:0 0 10px 0;
@media(max-width:500px){
    font-size:19px;
}
`

export const Button = styled.button`
color:#fff;
background-color:#2acfcf;
width:150px;
font-size:20px;
border-radius:10px;
font-weight:600;
border:none;
padding: 16px 26px;
@media(max-width:932px){
    width:100%;
}
`
export const Heading = styled.h1`
font-size:55px;
margin:0;
text-align:center;
`
export const TextNew = styled.p`
color: #9e9aa7;
font-size:24px;
line-height:35px;
font-weight:500;
margin:0;
width:660px;
text-align:center;
margin-bottom:120px;
@media(max-width:728px){
    width:100%;
}
`

export const Boxes = styled.div`
display:flex;
gap:40px;
justify-content:space-between;
@media(max-width:1260px){
    flex-direction:column;
    gap:80px;
}
`

export const Box1 = styled.div`
background-color:#fff;
border-radius:10px;
padding: 30px 40px;
display:flex;
flex-direction:column;
@media(max-width:1260px){
 justify-content:center;
 align-items:center;   
}
`

export const Box1Head = styled.h2`
font-size:30px;
@media(max-width:1260px){
 margin-bottom:0;   
}
`

export const Box1Text = styled.p`
color:#9e9aa7;
font-size:21px;
line-height:34px;
font-weight:500;
`

export const Img = styled.img`
width:50px;
height:50px;
`

export const ImgBox = styled.div`
background-color:#232127;
width:100px;
height:100px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
margin-top:-80px;

`

