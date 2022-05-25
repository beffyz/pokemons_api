import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import PokemonPage from './pages/PokemonPage/PokemonPage';
import SinglePokemonPage from './pages/SinglePokemonPage/SinglePokemonPage';

const App = () => (
  <section className={styles.App}>
    <Router>

      <Routes>
        <Route path="/" element={<PokemonPage />} />
        <Route path="/pokemon/:name" element={<SinglePokemonPage />} />
      </Routes>
    </Router>
  </section>
);

export default App;
