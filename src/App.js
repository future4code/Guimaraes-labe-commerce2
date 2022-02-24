import React from 'react';
import './App.css';
import { Page, Filtro, Camisetas, Carrinho, FinalizarCompra, Main } from './style';
import CardCamiseta from './components/CardCamiseta';
import Footer from './components/Footer';
import Header from './components/Header';
import Estoque from "./Estoque.json"
import ListaDoCarrinho from './components/ListaDoCarrinho';





export default class App extends React.Component {
  state = {
    camiseta: Estoque,
    valorMin: "",
    valorMax: "",
    query: "",
    sortingParameter: "",
    carrinhoDeCompras: [],
    valor: ""
  }

  updateQuery = (ev) => {
  this.setState({
  query: ev.target.value
  })
  }

  updateValorMin = (ev) => {
  this.setState({
    valorMin: ev.target.value
  })
}

updateValorMax = (ev) => {
  this.setState({
    valorMax: ev.target.value
  })
}

updateSortingParameter = (ev) => {
  this.setState({
    sortingParameter: ev.target.value
  })
}


  render() {
    return (
      <Page>

        <Header />

        <Main>
          <Filtro>
            <h2>Filtrar</h2>

            <input type="text" placeholder='Por nome de produto' 
            value={this.state.query} onChange={this.updateQuery}/>

            <input type="text" placeholder='R$ Valor Mínimo' 
            value={this.state.valorMin} 
            onChange={this.updateValorMin} />

            <input type="text" placeholder='R$ Valor Máximo' 
            value={this.state.valorMax} 
            onChange={this.updateValorMax} />

            <span>
              <select name="sort" value={this.state.sortingParameter}
              onChange={this.updateSortingParameter}>
                <option value="">Ordenação</option>
                <option value="descricao"> Nome </option>
                <option value="valor">Preço</option>
              </select>
            </span>


            <a href="App">Coleção Planetas</a>
            <a href="App">Coleção Astronauta</a>
            <a href="App">Coleção Planetinhas</a>
            <a href="App">Outono/Inverno</a>
            <a href="App">Primavera/Verão</a>
          </Filtro>

          <Camisetas>
            {this.state.camiseta
            .filter(item => {
              return item.descricao.toLowerCase().includes(this.state.query.toLowerCase())
            })
            .filter(item => {
              return this.state.valorMin == "" || item.valor >= this.state.valorMin
            })
            .filter(item => {
              return this.state.valorMax == "" || item.valor <= this.state.valorMax
            })
            .sort((a,b) => {
              switch (this.state.sortingParameter) {
                case "descricao":
                  return a.descricao.localeCompare(b.descricao)
              default:
                return a.valor - b.valor
              }
            })
            .map(item => {
              return <CardCamiseta key={item.id} item={item} />
            })}


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

  {/* 
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
            descricao="Camiseta Astronauta com o nome customizável"/> */}