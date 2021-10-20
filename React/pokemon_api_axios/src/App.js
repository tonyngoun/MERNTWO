import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [pokemonApi, setPokeApi] = useState([])
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then((response) => {
        console.log(response.data.results);
        setPokeApi(response.data.results);
      })
      .catch((err) => console.log(err));
  })

  return (
    <div className="App">
      <h1> Pokemon API </h1>
      <ul>
        {pokemonApi.map((pokemon, index) => (
          <li key={index} > {pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
