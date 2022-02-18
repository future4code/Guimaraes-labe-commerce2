import React from 'react';
import './App.css';
import { Page, Filtro, Camisetas, Carrinho, FinalizarCompra, Main } from './style';
import CardCamiseta from './components/CardCamiseta';
import camisetaBaloes from './img/camisetaBaloes.png';
import camisetaGato from './img/camisetaGato.png'
import camisetaNasa from './img/camisetaNasa.png'
import camisetaSU from './img/camisetaStaUO.png'
import camisetaInfantil1 from './img/camisetaInfantil1.png'
import camisetaInfantil2 from './img/camisetaInfantil2.png'
import Footer from './components/Footer';
import Header from './components/Header';





export default class App extends React.Component {
  state = {
    tamanho: "",
    quantidade: "",
    valorMin: "",
    valorMax: ""
  }

  atualizaValorMin(ev) {
    this.setState({
      valorMin: ev.target.value
    })
  }

  atualizaValorMax(ev) {
    this.setState({
      valorMax: ev.target.value
    })
  }

  render() {
    return (
      <Page>

        <Header />

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
            <input type="text" placeholder='R$ Valor Mínimo' 
            value={this.state.valorMin} 
            onChange={this.atualizaValorMin} />

            <input type="text" placeholder='R$ Valor Máximo'
            value={this.state.valorMax} 
            onChange={this.atualizaValorMax} />
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
        <Footer />

    </Page>
  )
    }
  }