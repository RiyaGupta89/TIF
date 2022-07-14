import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
font-family: 'Montserrat', sans-serif;
`

export const Container = styled.div`
width:90%;
background-image:url('/images/Meteor.png');
background-size:cover;
background-repeat:no-repeat;
height:200px;
display:flex;
justify-content:center;
align-items:center;
margin-top:-100px;
@media(max-width:932px){
    width:100%;
}
@media(max-width:1172px){
    margin-top:0;
}
`

export const InputContainer = styled.div`
display:flex;
gap:40px;
width:100%;
padding: 0 90px;
border-radius:20px;
outline:none;
@media(max-width:888px){
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding: 0 20px;
    gap:20px;
}
`

export const Input = styled.input`
background:#fff;
padding: 18px 24px;
flex:1;
font-size:20px;
outline:none;
border-radius:10px;
font-weight:600;
&::placeholder{
    color:#f46262;
}
@media(max-width:888px){
    width:100%;
    border:2px solid #f46262;
}
`

export const Button = styled.button`
color:#fff;
background-color:#2acfcf;
width:200px;
font-size:20px;
border-radius:10px;
font-weight:600;
@media(max-width:888px){
    padding: 20px 28px;
    width:100%;
}
`

export const Links = styled.div`

`

export const Div = styled.div`

`

export const Left = styled.div`

`

export const Right = styled.div`

`