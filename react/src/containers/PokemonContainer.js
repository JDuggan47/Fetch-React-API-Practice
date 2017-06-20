import React, {Component} from 'react'

class PokemonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      randNum: Math.floor((Math.random()) * 100)
    }
    this.handleRandomPokemon = this.handleRandomPokemon.bind(this)
  }

  handleRandomPokemon(event) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.randNum}/`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ pokemons: responseData})
    })
  }

  render(){

    return(
      <div>
        <button onClick={this.handleRandomPokemon}>Click Here for a Random Joke!</button>
        <PokemonShow
          key={this.state.pokemon.id}
          id={this.state.pokemon.id}
          title={this.state.pokemon.name}
          weight={this.state.pokemon.weight}
        />
      </div>
    )
  }
}

export default PokemonContainer;
