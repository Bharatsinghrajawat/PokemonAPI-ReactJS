import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import PokemonList from './PokemonList';
import Pagination from './Pagination';



function App() {
  const [currentPageURL, setCurrentPageURL] = useState('https://pokeapi.co/api/v2/pokemon')
  const [pokemon , setPokemon] = useState([]);
  const [nextPageURL , setNextPageURL] = useState();
  const [prevPageURL, setPrevPageURL] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() =>{
      setLoading(true)
      let cancel
    axios.get(currentPageURL,{cancelToken: new axios.CancelToken(c => cancel = c)}).then(res => {
      setLoading(false)
      setNextPageURL(res.data.next)  
      setPrevPageURL(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))})
      return () => cancel()
    } 
      ,[currentPageURL]
  )

      if(loading) return 'loading...'

const toNextPage = () => {
  setCurrentPageURL(nextPageURL)
}

const toPreviousPage = () => {
  setCurrentPageURL(prevPageURL)
}

  return (
    <div className="container">
        
        <PokemonList pokemon={pokemon} />
        <Pagination toNextPage={nextPageURL ? toNextPage : null}  toPreviousPage={prevPageURL ? toPreviousPage : null}/>
    </div>
  );
}

export default App;
