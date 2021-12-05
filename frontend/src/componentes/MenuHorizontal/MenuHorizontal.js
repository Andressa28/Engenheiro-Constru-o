import React from 'react';
import { Link } from 'react-router-dom';
import './MenuHorizontal.css';

export default function MenuHorizontal() {
  return (
    <div>
      <div className="menuHorizontal">
        <nav className="navMenu">
          <ul>
            <li> <Link to="/"> Início </Link> </li>
            <li> <Link to="/engenheiros"> Engenheiros   </Link> </li>
            <li> <Link to="/obras"> Obras </Link> </li>
            <li> <Link to="/usuarios"> Usuários </Link> </li>
            <li> <Link to="/configuracoes"> Configurações </Link> </li>
            <li> <Link to="/"> Voltar </Link> </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}