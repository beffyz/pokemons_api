import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllPokemonQuery } from '../../store/api/PokemonApi';
import styles from './pokemonPage.module.scss';

const PokemonPage = () => {
  const { data } = useGetAllPokemonQuery();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 start-md">
          <div className={styles.heading}>
            <h1 className={`center-md ${styles.heading_h}`}>Get to know all Pokemons</h1>
            <div className={styles.heading_search}>
              <input onChange={(e) => setInputValue(e.target.value)} className={styles.heading_input} type="text" />
              <button
                onClick={() => data?.results.filter(
                  ({ name }) => name === inputValue,
                )}
                className={styles.heading_btn}
              >
                Search Pokemon
              </button>
            </div>
          </div>
          {data && data.results.map(({ name, url }) => {
            const idArr = url.split('/');
            const id = idArr[idArr.length - 2];
            return (
              <div key={id} className={styles.cards}>
                <div className={styles.card}>
                  <div className={styles.card_border}>
                    <div className={styles.card_cover}>
                      <img
                        width="100"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
                        alt="pokemon"
                      />
                    </div>
                    <div className={styles.card_details}>
                      <h1 className="center-md">{name}</h1>
                      <button onClick={() => navigate(`pokemon/${name}`)}>Pokemon details</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
