import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import PokemonContainer from './containers/PokemonContainer';

$(function() {
  ReactDOM.render(
    <PokemonContainer />,
    document.getElementById('app')
  );
});
