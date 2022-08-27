import NavBar from './Components/NavBar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>

      <ItemListContainer greeting={'¡Bienvenido!'}/>
    </div>
  );
}

export default App;
