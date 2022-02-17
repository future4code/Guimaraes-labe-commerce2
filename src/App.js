import React from 'react';
import './App.css';
import styled from 'styled-components';
import visa from "./img/visa.png";
import mastercard from "./img/mastercard.jpg"
import elo from "./img/elo.png"
import pix from "./img/pix.png"
import twitter from "./img/twitter.png"
import instagram from "./img/instagram.png"
import facebook from "./img/facebook.jpg"
import whatsapp from "./img/whatsapp.png"
import googleplay from "./img/google-play.png"
import app_store from "./img/app-store.png"
import fundo from "./img/fundo.jpg"
import cometa from "./img/cometa.png"
import foguete from "./img/foguete.png"

const Header = styled.header`
  background-image: url(${fundo});
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 25px;
  height: 10%;
  color: white;

  div {
    display: flex;
  }

  div img {
    width:30px;
    filter: invert(100%);
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-image: url(${fundo});
  color: white;
  position: fixed;
  bottom: 0;
  height: 35vh;
  padding: 0 10px;
  position: relative;

  
`

const CosmozetaDoFooter = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  row-gap: 0px;
  column-gap: 0px;
  
`

const FormaDePagamento = styled.div`
  display: flex;
  flex-direction: column;
`

const RedesSociais = styled.div`
  display: flex;
  flex-direction: column;
`

const FaleConosco = styled.div`
  display: flex;
  flex-direction: column;
`

const Bandeira = styled.img`
  display: flex;
  width: 50px;
  justify-self: center;
`

const Bandeiras = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

const LogoRedes = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`

const LogoRede = styled.img`
  display: flex;
  width: 40px;
  justify-self: center;
  margin: 7px;
`
const AppStore = styled.img`
  width: 100px;
  padding: 3px;
`

const BaixeOApp = styled.div`
  display: flex;
  flex-direction: column;
`

const LojasDeApp = styled.div`
  display: flex;
  flex-direction: column;
`
const Contato = styled.div`
  display: flex;
  flex-direction: column;
`

const CometaLogo = styled.img`
width:150px;
`

const Filtro = styled.div`
display: flex;
flex-direction: column;
border-right: solid black;
padding: 5px;
padding-top: 20px;

h2 {
  align-self: center;
}

input {
  margin-top:5px;
  width: 130px;
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
  align-self: center;
  text-decoration: none;
  font-size: x-large;
}
`

const Camisetas = styled.div`
display:flex;
border: black;
`

const Carrinho = styled.div`
display: flex;
flex-direction: column;
padding: 5px;
padding-top: 20px;
border-left: solid black;

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

const FinalizarCompra = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #6495ED;
`



const Main = styled.div`
display: grid;
grid-template-columns: 1fr 4fr 1fr;
grid-template-rows: 1fr;
background-color: #B0C4DE;
height: 100vh;
`


export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header>
          <CometaLogo src={cometa}></CometaLogo>
          <h1>CosmoZeta</h1>
          <div>
          <input type="text" placeholder="Busca"/>
          <img src={foguete} />
          </div>
        </Header>

        <Main>

          <Filtro>
            <h2>Filtrar</h2>
            <select>
              <option value="">Tamanho</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="14">14</option>
              <option value="p">P</option>
              <option value="m">M</option>
              <option value="g">G</option>
              <option value="gg">GG</option>
              <option value="xxg">XXG</option>

            </select>
            <input type="text" placeholder='R$ Valor Mínimo' />
            <input type="text" placeholder='R$ Valor Máximo' />
            <button value="Aplicar">Aplicar</button>
            <a href="App">Coleção Planetas</a>
            <a href="App">Coleção Astronauta</a>
            <a href="App">Coleção Planetinhas</a>
            <a href="App">Outono/Inverno</a>
            <a href="App">Primavera/Verão</a>
          </Filtro>

          <Camisetas>

          </Camisetas>

          <Carrinho>

              <h2>Resumo</h2>
            
            <div>
              <input placeholder='UF'></input>
              <input placeholder='CEP'></input>
              <button>Calcular frete</button>
            </div>

            <div>
              <input placeholder='Cupom de desconto'></input>
              <button>Aplicar desconto</button>
            </div>

            <div>
              <FinalizarCompra>Finalizar compra</FinalizarCompra>
            </div>

          </Carrinho>

        </Main>





        <Footer>
        <CosmozetaDoFooter>
          <h3>CosmoZeta</h3>
          <div>
          <p>Rua 9 de Janeiro, 123</p>
          <p>Conjunto 028</p>
          <p>Liberdade</p>
          <p>CNPJ 01.329.134/0001-20</p>
          </div>
          
        </CosmozetaDoFooter>

        <FormaDePagamento>
          <h3>Formas de pagamento</h3>
          <Bandeiras>
            <Bandeira src={visa} />
            <Bandeira src={mastercard} />
            <Bandeira src={elo}/>
            <Bandeira src={pix}/>
          </Bandeiras>
        </FormaDePagamento>

        <RedesSociais>
          <h3>Redes Sociais</h3>
          <LogoRedes>
            <LogoRede src={twitter}/>
            <LogoRede src={facebook}/>
            <LogoRede src={instagram}/>
            <LogoRede src={whatsapp} />
          </LogoRedes>
        </RedesSociais>

        <FaleConosco>
          <h3>Fale conosco</h3>
          <Contato>
            <p>Caixa Postal</p>
            <p>Email:</p> 
          </Contato>
        </FaleConosco>

        <BaixeOApp>
          <h3>Baixe o App</h3>
          <LojasDeApp>
          <AppStore src={app_store} />
          <AppStore src={googleplay} />
          </LojasDeApp>
        </BaixeOApp>

    </Footer>
    </div>
  )
    }
  }