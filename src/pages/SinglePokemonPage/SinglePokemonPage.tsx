import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../store/api/PokemonApi';
import styles from './singlePokemonPage.module.scss';

const SinglePokemonPage = () => {
  const { name } = useParams();
  const { data } = useGetPokemonByNameQuery(String(name));
  const navigate = useNavigate();
  console.log(data);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 center-md">
          <div className={styles.pokemon_card}>
            <button onClick={() => navigate('/')}>Back to All Pokemons</button>
            {data && (
            <h3>{data.name}</h3>
            )}
            {data && (
            <img className={styles.card_img} src={data.sprites.other.dream_world.front_default} alt={data.name} />
            )}
            {data && data.abilities.map(({ ability }) => (
              <div key={Math.random()}>
                <p>{`Ability: ${ability.name}`}</p>
              </div>
            ))}
            {data && (
            <div key={data.id}>
              <p>{`Weight: ${data.weight}`}</p>
              <p>{`Height: ${data.height}`}</p>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePokemonPage;
