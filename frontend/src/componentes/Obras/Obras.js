import React from "react"
import './Obras.css';
import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaObras";
import { useEffect, useState } from 'react';

function Obras() {
  const [obras, setObras] = useState([])

  useEffect(() => {
    urlapi.get('obras')
      .then(response => setObras(response.data));
  }, []
  )

  return (
    <>
      <div id="idObras" className="obras">
        <div id="corpo_rel">
          <legend> Registros de Obras cadastradas </legend>

          <div>
            <Tabela
              items={obras}
              chave={'/obras/'}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Obras;
