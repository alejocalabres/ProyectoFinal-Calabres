import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // O el nombre de tu CSS principal
import './styles.css'; // Importa el archivo de estilos que acabas de crear
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
