import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RecipesContainer from './components/RecipesContainer';
import MyRecipesContainer from './components/MyRecipesContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recipes">
          <RecipesContainer />
        </Route>
        <Route path="/my_recipes">
          <MyRecipesContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;