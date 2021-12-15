import Index from './pages/Index';
import './styles/styles.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contacto from './pages/Contacto';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/contacto'>
            <Contacto />
          </Route>
          <Route path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
