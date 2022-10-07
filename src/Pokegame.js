import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirt", type: "Water", base_experience: 61 },
      { id: 3, name: "Metapod", type: "bug", base_experience: 34 },
      { id: 5, name: "Picachu", type: "Eletric", base_experience: 90 },
      { id: 9, name: "Gengar", type: "poison", base_experience: 101 },
      { id: 121, name: "Eeve", type: "Normal", base_experience: 69 },
      { id: 1, name: "Pigeot", type: "Fly", base_experience: 49 },
      { id: 4, name: "Bulbassaur", type: "Plant", base_experience: 68 },
      { id: 151, name: "Mew", type: "Rae", base_experience: 250 },
    ],
  };
  render() {
    let mao1 = [];
    let mao2 = [...this.props.pokemon];
    while (mao1.length < mao2.length) {
      let randIdx = Math.floor(Math.random() * mao2.length);
      let randPokemon = mao2.splice(randIdx, 1)[0];
      mao1.push(randPokemon);
    }
    let experiencia1 = mao1.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );
    let experiencia2 = mao2.reduce(
      (exp, pokemon) => exp + pokemon.base_experience,
      0
    );
    return (
      <div>
        <Pokedex
          pokemon={mao1}
          exp={experiencia1}
          vencedor={experiencia1 > experiencia2}
        />
        <Pokedex
          pokemon={mao2}
          exp={experiencia2}
          vencedor={experiencia2 > experiencia1}
        />
      </div>
    );
  }
}

export default Pokegame;
