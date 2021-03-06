import {useEffect, useState} from 'react';

import React from 'react';
import PokemonsDetail from './pages/pokemon-detail';

import PokemonList from './pages/pokemon-list';

import Switch from 'react-router'
import { BrowserRouter as Router, Link, Route , Routes} from 'react-router-dom';
import PageNotFound from './page-not-found';
import PokemonEdit from './pages/pokemon-edit';


function App(){


 
    //definir une variable d'etat 
    return (
        
       <Router>
        <div>
            {/*La barre de navigation*/}
            <nav>
                <div className='nav-wrapper teal'>
                    <Link to='/' className="brand-logo center">Pokédex </Link>
                </div>
            </nav>
               {/*Le système de gestion des routes de notre application */}
               <Routes>
                    <Route exact path='/' element={<PokemonList/>}/>
                    <Route exact path='/pokemons' element={<PokemonList/>}/>
                    <Route path="/pokemons/:id" element={<PokemonsDetail/>} />
                    <Route  path='/pokemons/edit/:id' element={<PokemonEdit/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
               </Routes>
          

        </div>
       </Router>        

                   
            
        
         )}

export default App;
