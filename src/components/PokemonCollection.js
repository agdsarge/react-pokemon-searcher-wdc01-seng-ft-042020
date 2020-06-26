import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
    handleCardClick(e) {
        console.log("I have been clicked!")
    }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.allMons.map((pkmn =>
            <PokemonCard monster={pkmn} key={pkmn.id} handleCardClick={this.handleCardClick}/>
        ))}
      </Card.Group>
    )
  }
}

export default PokemonCollection
