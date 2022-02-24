import React from 'react';
import fundo from "./img/fundo.jpg"
import styled from 'styled-components';

export const Page = styled.div`
width: 100%;
`

export const DivHeader = styled.header `
background-image: url(${fundo});
display: flex;
align-items: center;
justify-content: space-evenly;
height: 10%;
color: white;
width: 100%;
position: relative;

div {
display: flex;
}

div img {
width:40px;
padding-top: 2px;
}
`

export const DivFooter = styled.footer `
display: flex;
justify-content: space-around;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
background-image: url(${fundo});
color: white;
position: fixed;
bottom: 0;
height: 230px;
position: relative;
width: 100%;
`

export const Main = styled.div `
display: flex;
background-color: #B0C4DE;
height: 800px;
width: 100%;
position: relative;
justify-content: space-between;
`

export const CometaLogo = styled.img `
width:150px;
`

export const Filtro = styled.div `
display: flex;
flex-direction: column;
border-right: solid black;
padding: 5px;
padding-top: 20px;
width: 15%;
align-content: center;

h2 {
align-self: center;
}

input {
margin-top:5px;
width: 130px;
align-self: center;
}

span {
    align-self: center;
}

select {
width: 138px;
align-self: center;
}

button {
margin-top: 10px;
width: fit-content;
align-self: center;
margin-bottom: 70px;
}

a {
margin-top: 10px;
margin-bottom: 10px;
text-decoration: none;
font-size: large;
text-align: center;
}
`

export const Camisetas = styled.div `
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
width: auto;


`

export const Carrinho = styled.div `
display: flex;
flex-direction: column;
padding: 5px;
padding-top: 20px;
border-left: solid black;
width: 13%;
align-content: center;

h2 {
align-self: center;
}

input {
margin-top:5px;
width: 130px;
align-self: center;
}

div {
margin-top: 20px;
display: flex;
flex-direction: column;
}

button {
width: 120px;
align-self: center;
margin-top: 10px;
}
`
export const FinalizarCompra = styled.button `
padding-top: 10px;
padding-bottom: 10px;
background-color: #6495ED;
`

export const CosmozetaDoFooter = styled.div `
display: grid;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
grid-template-columns: 1fr;
row-gap: 0px;
column-gap: 0px;

h3 {
    text-align: center;
}

div p {
    text-align: center;
}
`

export const FormaDePagamento = styled.div `
display: flex;
flex-direction: column;

h3 {
align-self: center;
}

div {
display: grid;
width: 140px;
height: 110px;
grid-template-rows: 1fr 1fr;
grid-template-columns: 1fr 1fr;
align-items: center;
align-self: center;    
}

div img {
display: flex;
width: 50px;
justify-self: center;
}
`

export const RedesSociais = styled.div `
display: flex;
flex-direction: column;

h3 {
align-self: center;
}

div {
display: grid;
grid-template-rows: 1fr 1fr;
grid-template-columns: 1fr 1fr;
align-items: center;
width: 120px;
height: 110px;
}

div img {
display: flex;
width: 40px;
justify-self: center;
margin: 7px;
}
`

export const FaleConosco = styled.div `
display: flex;
flex-direction: column;

h3 {
    align-self: center;
}

div {
display: flex;
flex-direction: column;
}

div p {
    align-self: center;
}
`

export const BaixeOApp = styled.div `
display: flex;
flex-direction: column;

h3 {
align-self: center;
}

div {
display: flex;
flex-direction: column;
align-self: center;
}

div img:first-child {
width: 141px;
padding: 3px;
align-self: center;
}

div img:nth-child(2) {
width: 130px;
padding: 3px;
align-self: center;
}
`
