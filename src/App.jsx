import logo from './logo.svg';
import './App.css';
import Pagindex from './Components/Pagindex'
import Registros from './Components/Registros'
import Login from './Components/Login'
import Register from './Components/Register'
import './Style/StyleRe.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Menu from './Components/Menus'

function App() {
  return (
    <Router>
      <div>
      <h1>Esquemas para el gimnasio spartanos</h1>
        <p>Nota: el router se quitara la final, solo es para muestra del esquema</p>
        <Menu/>
        <Switch>
          <Route path={'/Pagindex'} component={Pagindex}></Route>
          <Route path={'/Registros'} component={Registros}></Route>
          <Route path={'/Login'} component={Login}></Route>
          <Route path={'/Register'} component={Register}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
