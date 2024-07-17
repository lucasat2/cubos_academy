
function Card({ id, children }) {
  
  const idEhPar = id % 2 === 0;

  return (
    <div className="card">
      < img src={`https://picsum.photos/id/${id}/200/300`} alt="" />
      {children}
      {idEhPar && <b>É par</b>} {/*Nova forma de ternario*/}
    </div>
  )
}

function App() {
  const cards = [
    { id: 239,texto:'Card 1'},
    { id: 240,texto:'Card 2'},
    { id: 241,texto:'Card 3'},
    { id: 242,texto:'Card 4'},
  ]

  return (
    <div className="App">
      {cards.map(function (card) {
        return <Card id={card.id} key={card.id}>{card.texto}</Card>
      })}
    </div>
  );
}

export default App;
