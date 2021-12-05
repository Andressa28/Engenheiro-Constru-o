import React from "react"
import './EngenheirosEditar.css';
import urlapi from "../../services/api.js"
import { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from "react-router-dom";

export default function EngenheirosEditar() {
    let idBoolean = false;

    const [codigo, setCodigo] = useState(0);
    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [telefone, setTelefone] = useState('');
    const [crea, setCrea] = useState('');
    const [dtformatura, setDtformatura] = useState('');
    const [checked, setChecked] = useState(false);
    const { idEngenheiro } = useParams();

    function IfCrud() {
        console.log('Id Engenheiro: ' + idEngenheiro + ' - ' + idBoolean)
        if (idEngenheiro === 0) {
            idBoolean = true;
        } 
        else {
        }
    }

    useEffect(() => {
        async function getEngenheiros() {
            console.log('Engenheiro: ' + idEngenheiro + ' - ' + idBoolean)
            if (idEngenheiro == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                const { data } = await urlapi.get('/engenheiros/' + idEngenheiro);
                console.log(data)

                setCodigo(data[0].ENG_CODIGO);
                setNome(data[0].ENG_NOME);
                setApelido(data[0].ENG_APELIDO);
                setTelefone(data[0].ENG_TELEFONE);
                setCrea(data[0].ENG.CREA);
                setDtformatura(data[0].ENG.DTFORMATURA);

                console.log(data[0].ENG_NOME)
            }
        }

        IfCrud();
        getEngenheiros();
    }, []);

    async function handleEngenheiros(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.ENG_NOME);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log("Codigo Engenheiro: ", idEngenheiro)
                if (idEngenheiro == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('engenheiros', data);
                } else {
                    console.log("Alteração de Registro!", idEngenheiro)
                    await urlapi.put('/engenheiros/' + idEngenheiro, data);
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }
    return (
        <div>
            <section className="sectionTable" >

                <form className="form--engenheiro" onSubmit={handleEngenheiros} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control" name="ENG_CODIGO"
                                id="ENG_CODIGO"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome do Engenheiro </label>
                            <input type="text" className="form-control" name="ENG_NOME"
                                id="ENG_NOME"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Apelido </label>
                            <input type="text" className="form-control" name="ENG_APELIDO"
                                id="ENG_APELIDO"
                                value={apelido}
                                onChange={e => setApelido(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Telefone </label>
                            <input type="text" className="form-control" name="ENG_TELEFONE"
                                id="ENG_TELEFONE"
                                value={telefone}
                                onChange={e => setTelefone(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> CREA </label>
                            <input type="text" className="form-control" name="ENG_CREA"
                                id="ENG_CREA"
                                value={crea}
                                onChange={e => setCrea(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Data de Formatura </label>
                            <input type="text" className="form-control" name="ENG_DTFORMATURA"
                                id="ENG_DTFORMATURA"
                                value={dtformatura}
                                onChange={e => setDtformatura(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/engenheiros" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>
            </section>
        </div>
    )
}