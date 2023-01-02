import Main from './pages/Main';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import About from './pages/About';

function App() {
  return (
    <>
      <Switch>
        {/* <Route exact path="/sobre" component={About} /> */}
        <Route exact path="/" component={Main} />
      </Switch>
      </>
  );
}

export default App;
