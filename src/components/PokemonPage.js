import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

    constructor() {
        super()
        this.state = {
            allMonsters: [],
            search: ""
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/pokemon')
            .then(r => r.json())
            .then(d => {
                this.setState({allMonsters: d})
            })
    }

    pokemonSearch = (e) => {
      this.setState({
        search: e.target.value
      })
    }
    
    newPokemon = (e) => {
      
      let nuPokemon = {
        name: e.target.name.value,
        hp: e.target.hp.value,
        sprites: {
          front: e.target.frontUrl.value,
          back: e.target.backUrl.value
        }
      }

      fetch('http://localhost:3000/pokemon', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify(nuPokemon)
      }
      )
      .then(resp => resp.json())
      .then(pokemon => {
        this.setState({
          allMonsters: [...this.state.allMonsters, pokemon]
        })})

    e.target.reset()
        
      
      

       
    }



  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemon={this.newPokemon}/>
        <br />
        <Search search={this.pokemonSearch}/>
        <br />
        <PokemonCollection allMons={this.state.allMonsters.filter(mon => mon.name.includes(this.state.search))}/>
      </Container>
    )
  }
}

export default PokemonPage
