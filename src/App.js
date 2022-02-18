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
import cometa from "./img/cometa.png"
import foguete from "./img/foguete.png"
import { Page, Header, Footer, CosmozetaDoFooter, FormaDePagamento, RedesSociais, FaleConosco,
BaixeOApp, CometaLogo, Filtro, Camisetas, Carrinho, FinalizarCompra, Main } from './style';
import lupa from "./img/lupa.png"
import CardCamiseta from './components/CardCamiseta';
import camisetaBaloes from './img/camisetaBaloes.png';
import camisetaGato from './img/camisetaGato.png'
import camisetaNasa from './img/camisetaNasa.png'
import camisetaSU from './img/camisetaStaUO.png'
import camisetaInfantil1 from './img/camisetaInfantil1.png'
import camisetaInfantil2 from './img/camisetaInfantil2.png'





export default class App extends React.Component {
  state = {
    tamanho: "",
    quantidade: ""
  }


  render() {
    return (
      <Page>
        <Header>
          <CometaLogo src={cometa} />
          <h1>CosmoZeta</h1>
          <div>
          <input type="text" placeholder="Busca"/>
          <img src={lupa} />
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

            <CardCamiseta imagem={camisetaBaloes} 
            descricao="Camiseta Balões de Planetas" />
            <CardCamiseta imagem={camisetaGato} 
            descricao="Camiseta do Gato Astronauta"/>
            <CardCamiseta imagem={camisetaNasa} 
            descricao='Camiseta "Agora a NASA vem!"' />
            <CardCamiseta imagem={camisetaSU} 
            descricao="Camiseta Stá UÓ"/>
            <CardCamiseta imagem={camisetaInfantil1} 
            descricao="Camiseta Infantil Saturno"/>
            <CardCamiseta imagem={camisetaInfantil2} 
            descricao="Camiseta Astronauta com o nome customizável"/>

          </Camisetas>

          <Carrinho>

              <h2>Carrinho</h2>
            
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
          <div>
            <img src={visa} />
            <img src={mastercard} />
            <img src={elo}/>
            <img src={pix}/>
          </div>
        </FormaDePagamento>

        <RedesSociais>
          <h3>Redes Sociais</h3>
          <div>
            <img src={twitter}/>
            <img src={facebook}/>
            <img src={instagram}/>
            <img src={whatsapp} />
          </div>
        </RedesSociais>

        <FaleConosco>
          <h3>Fale conosco</h3>
          <div>
            <p>+55 11 99999-8888</p>
            <p>contato@cosmozeta.com</p>
          </div>
        </FaleConosco>

        <BaixeOApp>
          <h3>Baixe o App</h3>
          <div>
          <img src={app_store} />
          <img src={googleplay} />
          </div>
        </BaixeOApp>

    </Footer>

    </Page>
  )
    }
  }