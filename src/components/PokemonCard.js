import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
    //{(this.state.pic) ? (this.props.monster.sprites.front) : (this.props.monster.sprites.back) }
    constructor() {
        super()
        this.state = {
            pic: true
        }
    }


    handleCardClick2 = () => {
        console.log("I am also clicked.", this)
        let newBool = !this.state.pic
        this.setState({pic: newBool})
    }


  render() {
    return (
      <Card onClick={this.handleCardClick2}>
        <div>
          <div className="image">
            <img alt="oh no!" src={(this.state.pic) ? (this.props.monster.sprites.front) : (this.props.monster.sprites.back) }/>
          </div>
          <div className="content">
            <div className="header">{this.props.monster.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.monster.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
