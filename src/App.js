import Index1 from './pages/Index1';
import './styles/styles.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contacto from './pages/Contacto';
import Index from './pages/Index';
import Layout from './Layout/Layout';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path='/contacto' exact>
              <Contacto />
            </Route>
            <Route path='/hooks1' exact>
              <Index1 />
            </Route>
            <Route path='/' exact>
              <Index />
            </Route>
          </Switch>
        </Layout>
      </Router>

    </div>
  );
}

export default App;
