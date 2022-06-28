import React, {useState} from 'react'
import './pokemon-card.css';
import formatDate from './../helpers/format-date';
import formatType from '../helpers/format-type';
import PokemonForm from './pokemon-form';
import { Link } from 'react-router-dom';

const PokemonCard = ({pokemon, borderColor = 'blue'}) =>{
  const [color,setColor] = useState();
  const showBorder = () => {
     setColor(borderColor)
  }
  const hideBorder = () => {
    setColor('#F5F5F5')
 }



    return (
        <div className="col s6 m4"  onMouseEnter={showBorder} onMouseLeave={hideBorder} >
           <Link to={`/pokemons/${pokemon.id}`}>
          <div className="card horizontal" style={{borderColor :color}}>
            <div className="card-image"> 
              <img src={pokemon.picture} alt={pokemon.name}/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>{pokemon.name}</p>
                <p><small>{formatDate(pokemon.created)}</small></p>
                {pokemon.types.map(type => (
                  <span key={type} className={formatType(type)}> {type} </span>
                ))}

              </div>
            </div>
          </div> 
          </Link>
        </div>
      );
}

export default PokemonCard