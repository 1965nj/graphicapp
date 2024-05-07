
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Veuillez choisir l'algorithme a executer</h1>
      <div>
        <button type="button" className="dijkstra">
          DIJKSTRA
        </button>
      </div>
      <div>
        <button type="button" className="prim">
          PRIM
        </button>
      </div>
      <div>
        <button type="button" className="kruskal">
         KRUSKAL
        </button>
      </div>
    </div>
  );
}

export default App;
