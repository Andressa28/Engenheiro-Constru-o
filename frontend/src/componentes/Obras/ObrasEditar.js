import React from "react"
import './ObrasEditar.css';
import urlapi from "../../services/api.js"
import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";

export default function ObrasEditar() {
    let idBoolean = false;

    const [codigo, setCodigo] = useState(0);
    const [cidade, SetCidade] = useState('');
    const [tipo, SetTipo] = useState('');
    const [valor, SetValor] = useState('');
    const [inicioobra, SetInicioobra] = useState('');
    const [engcod, setEngcod] = useState('');
    const [checked, setChecked] = useState(false);
    const { idObra } = useParams();

    function IfCrud() {
        console.log('Id Obra: ' + idObra + ' - ' + idBoolean)
        if (idObra === 0) {
            idBoolean = true;
        } 
        else {
        }
    }
    useEffect(() => {
        async function getObras() {
            console.log('Obra: ' + idObra + ' - ' + idBoolean)
            if (idObra == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                const { data } = await urlapi.get('/obras/' + idObra);
                console.log(data)

                setCodigo(data[0].OBR_CODIGO);
                SetCidade(data[0].OBR_CIDADE);
                SetTipo(data[0].OBR_TIPO);
                SetValor(data[0].OBR_VALOR);
                SetInicioobra(data[0].OBR_INICIOOBRA);
                setEngcod(data[0].ENG_CODIGO);

                console.log(data[0].OBR_CIDADE)
            }
        }
        IfCrud();
        getObras();
    }, []);

    async function handleObras(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.OBR_CIDADE);

        try {
            if (cidade.length === 0) {
                alert('Insira um cidade válido')
            } else {
                console.log("Codigo Obra: ", idObra)
                if (idObra == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('obras', data);
                } else {
                    console.log("Alteração de Registro!", idObra)
                    await urlapi.put('/obras/' + idObra, data);
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }
    return (
        <div>
            <section className="sectionTable" >

                <form className="form--obra" onSubmit={handleObras} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control" name="OBR_CODIGO"
                                id="OBR_CODIGO"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Cidade do Obra </label>
                            <input type="text" className="form-control" name="OBR_CIDADE"
                                id="OBR_CIDADE"
                                value={cidade}
                                onChange={e => SetCidade(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Tipo </label>
                            <input type="text" className="form-control" name="OBR_TIPO"
                                id="OBR_TIPO"
                                value={tipo}
                                onChange={e => SetTipo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Valor </label>
                            <input type="text" className="form-control" name="OBR_VALOR"
                                id="OBR_VALOR"
                                value={valor}
                                onChange={e => SetValor(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> inicioobra </label>
                            <input type="text" className="form-control" name="OBR_INICIOOBRA"
                                id="OBR_INICIOOBRA"
                                value={inicioobra}
                                onChange={e => SetInicioobra(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Engenheiro Responsável </label>
                            <input type="text" className="form-control" name="ENG_CODIGO"
                                id="ENG_CODIGO"
                                value={engcod}
                                onChange={e => setEngcod(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/obras" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>
            </section>
        </div>
    )
}