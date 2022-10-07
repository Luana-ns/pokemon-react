import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
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
    return (
      <div className="Pokedex">
        <h1>Pokedex! </h1>
        <p>Total Experience: {this.props.exp} </p>
        <p>{this.props.vencedor ? "Vencedor" : "Loser"} </p>
        <div className="Pokedex-cards">
          {" "}
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}{" "}
        </div>
      </div>
    );
  }
}
export default Pokedex;
