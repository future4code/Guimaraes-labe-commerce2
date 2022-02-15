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

const Header = styled.header`
  background-image: url(${fundo});
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 25px;
  height: 10%;
  color: white;
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-image: url(${fundo});
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 200px;
  padding: 0 10px;
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



export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header>
          <CometaLogo src={cometa}></CometaLogo>
          <h1>CosmoZeta</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        {/* <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
            </div>
          </section>
        </main> */}

    <Footer>
        <CosmozetaDoFooter>
          <h3>CosmoZeta</h3>
          <p>Rua 9 de Janeiro, 123</p>
          <p>Conjunto 028</p>
          <p>Liberdade</p>
          <p>CNPJ 01.329.134/0001-20</p>
          
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

