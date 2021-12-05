import React from 'react';
import { Link } from 'react-router-dom';
import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
      
      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.OBR_CODIGO}>
          <td> {item.OBR_CODIGO} </td>
          <td> {item.OBR_CIDADE} </td>
          <td> {item.OBR_TIPO} </td>
          <td> {item.OBR_VALOR} </td>
          <td> {item.OBR_INICIOOBRA} </td>
          <td> {item.ENG_COD} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.OBR_CODIGO} > Editar </a></td>
          <td> <Link to={props.chave + item.OBR_CODIGO}> <i className="bi bi-clipboard-data"> </i> </Link> </td>
          <td> <i className="bi bi-trash"></i> </td>
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
      <table id="tabela" className="table table-hover">
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'center' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Cidade </th>
            <th scope="col"> Tipo </th>
            <th scope="col"> Valor </th>
            <th scope="col"> Início da Obra </th>
            <th scope="col"> Engenheiro </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block"> Nova Obra </a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )
}