
import { Segment } from 'semantic-ui-react';
import './App.css';
//import Home from './Views/home/Home';
//import FormCliente from './Views/cliente/FormCliente';
//import FormProduto from './Views/produto/FormProduto';
import FormEntregador from './Views/entregador/FormEntregador';


function App() {
  return (

    <div className="App">

<FormEntregador />

<div style={{marginTop: '6%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2024 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;
