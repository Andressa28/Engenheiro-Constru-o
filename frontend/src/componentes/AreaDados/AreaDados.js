import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Engenheiros from '../Engenheiros/Engenheiros';
import EngenheirosEditar from '../Engenheiros/EngenheirosEditar';
import Obras from '../Obras/Obras';
import ObrasEditar from '../Obras/ObrasEditar';
import './AreaDados.css';

export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/engenheiros" component={Engenheiros}></Route>
        <Route exact path="/engenheiros/:id" component={EngenheirosEditar}></Route>
        <Route exact path="/obras" component={Obras}></Route>
        <Route exact path="/obras/:id" component={ObrasEditar}></Route>
      </Switch>

    </div>
  );
}