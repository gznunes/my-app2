import logo from './logo.svg';
import './App.css';
import Hello from './componentes/hello';
import HiMessage from './componentes/HiMessage';
import MeuCard from './componentes/MeuCard';
import ListaCards from './componentes/ListaCards';

function App() {
  return (
    <div>
        <Hello/>
        <MeuCard titulo="Card 1">
            <h4>teste</h4>
        </MeuCard>
        <MeuCard titulo="Card 1">
            <h4>Outros do card 2</h4>
            <h4>teste</h4>
        </MeuCard>
        <ListaCards/>
    </div>
  );
}

export default App;
