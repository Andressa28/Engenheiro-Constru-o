import './MenuBotoes.css';

export default function MenuBotoes() {
  return (
    <div className="menuBotoes">
      <button type="button" id="btnInicio" className="btn btn-primary">Início</button>
      <button type="button" id="btnEngenheiros" className="btn btn-secondary">Engenheiros</button>
      <button type="button" id="btnObras" className="btn btn-danger">Obras</button>
      <button type="button" id="btnUsuarios" className="btn btn-warning">Usuários</button>
      <button type="button" id="btnConfig" className="btn btn-info">Configurações</button>
    </div>
  );
}
