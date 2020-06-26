import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

    constructor() {
        super()
        this.state = {
            allMonsters: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/pokemon')
            .then(r => r.json())
            .then(d => {
                this.setState({allMonsters: d})
            })
    }



  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search />
        <br />
        <PokemonCollection allMons={this.state.allMonsters}/>
      </Container>
    )
  }
}

export default PokemonPage
