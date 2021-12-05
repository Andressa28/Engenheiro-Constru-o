import React from "react"
import './Engenheiros.css';
import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaEngenheiros";
import { useEffect, useState } from 'react';

function Engenheiros() {
  const [engenheiros, setEngenheiros] = useState([])

  useEffect(() => {
    urlapi.get('engenheiros')
      .then(response => setEngenheiros(response.data));
  }, []
  )

  return (
    <>
      <div id="idEngenheiros" className="engenheiros">
        <div id="corpo_rel">
          <legend> Registros de engenheiros cadastrados </legend>

          <div>
            <Tabela
              items={engenheiros}
              chave={'/engenheiros/'}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Engenheiros;