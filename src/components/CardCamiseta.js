import React from "react"
import styled from "styled-components"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    border: solid black 2px;
    width: 222px;
    align-items: center;

    img {
    margin: 10px;
    margin-bottom: 10px;
    width: 200px;
    border: solid black 1px;
    }

    div {
        margin: 10px;
        margin-top: 0;
    }
`

export default function CardCamiseta(props) {
        return (
            <Card>
                    <img src={props.item.imagem}></img>  
                <div> 
                    <p descricao={props.item.descricao}> {props.item.descricao}</p>
                    <p valor={props.item.valor}> R$ {props.item.valor}</p>
                    <button>Adicionar ao carrinho</button>
                </div> 

            </Card>
)
}
