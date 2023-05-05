import Main from './pages/Main';
import { Route, Switch } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/portfolio-antigo" component={Main} />
      </Switch>
      </>
  );
}

export default App;
