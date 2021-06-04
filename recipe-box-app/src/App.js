import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import UsersContainer from './containers/UsersContainer';
import RecipesContainer from './containers/RecipesContainer';

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={UsersContainer} />
      <Route exact path="/recipes" component={RecipesContainer} />
      </Router>
    </div>
  );
}

export default App;
