
//Props são as propriedades do elemento

function Botao(props) {
  return <button>{props.children}</button>
}

function App() {
  return (
    <div className="App">
      <Botao>olá</Botao>
      <Botao>Mundo</Botao>
      <Botao>Cubos</Botao>
    </div>
  );
}

export default App;
