import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
justify-content:center;
// align-items:center;
background-color:#d8d7db;
// margin-left:10px;
margin-left:-6px;
margin-right:-32px;
font-family: 'Montserrat', sans-serif;
@media(max-width:1172px){
    background-color:#fff;
}
`
export const Container = styled.div`
width:90%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media(max-width:964px){
    width:100%;
}
`
export const Heading = styled.h1`
font-size:130px;
text-align:center;
margin:0;
margin-top:-35px;
@media(max-width:1560px){
    font-size:130px;
    margin-top:-35px;
}
@media (max-width:1396px){
    font-size:100px;
    margin-top:-25px;
}
@media(max-width:1080px){
    font-size:80px;
    margin-top:-25px;
}
@media(max-width:964px){
    font-size:70px;
    margin-bottom:40px;
}
@media(max-width:500px){
    font-size:50px;
}
`

export const Img = styled.img`
width:600px;
@media(max-width:904px){
    width:400px;
}
@media(max-width:544px){
    width:300px;
}
`