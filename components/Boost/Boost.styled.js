import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
background:url('/images/Meteor.png');
background-size:cover;
background-repeat:no-repeat;
margin-left:-32px;
margin-right:-32px;
font-family: 'Montserrat', sans-serif;
`

export const Container = styled.div`
width:90%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding: 60px 0;
`

export const Button = styled.button`
color:#fff;
background-color:#2acfcf;
width:220px;
font-size:20px;
border-radius:35px;
font-weight:600;
padding: 20px 28px;
border:none;
`

export const Heading = styled.h1`
color:#fff;
font-size:50px;
@media(max-width:800px){
    text-transform:uppercase;
    font-size:40px;
    text-align:center;
}
@media(max-width:600px){
    font-size:30px;
}
@media(max-width:450px){
    font-size:25px;
}
`