import React from 'react';
import { Link } from 'react-router-dom';
import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item, i) => {
      
      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.ENG_CODIGO}>
          <td> {item.ENG_CODIGO} </td>
          <td> {item.ENG_NOME} </td>
          <td> {item.ENG_APELIDO} </td>
          <td> {item.ENG_TELEFONE} </td>
          <td> {item.ENG_CREA} </td>
          <td> {item.ENG_DTFORMATURA} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.ENG_CODIGO} > Editar </a></td>
          <td> <Link to={props.chave + item.ENG_CODIGO}> <i className="bi bi-clipboard-data"> </i> </Link> </td>
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
            <th scope="col"> Nome </th>
            <th scope="col"> Apelido </th>
            <th scope="col"> Telefone </th>
            <th scope="col"> CREA </th>
            <th scope="col"> Data de formatura </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block"> Novo Engenheiro </a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )
}