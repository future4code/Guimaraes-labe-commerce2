import React from 'react';
import './App.css';
import styled from 'styled-components';
import visa from "./img/visa.png";
import mastercard from "./img/mastercard.jpg"
import elo from "./img/elo.png"
import pix from "./img/pix.png"
import twitter from "./img/twitter.png"
import instagram from "./img/instagram.png"
import facebook from "./img/facebook.png"


const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background: #F20C78;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 200px;
  padding: 0 10px;
`

const CosmozetaDoFooter = styled.div`
  display: flex;
  flex-direction: column;
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

const BaixeOApp = styled.div`
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


`

const LogoRede = styled.img`
  width: 50px;

`






export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <header>
          <h1>CosmoZeta</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

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
          </LogoRedes>
        </RedesSociais>
        <FaleConosco />Fale conosco
        <BaixeOApp />Baixe o app

    </Footer>
    </div>
  )
    }
  }

