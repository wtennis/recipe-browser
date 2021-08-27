import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RecipesContainer from './components/RecipesContainer';
import MyRecipesContainer from './components/MyRecipesContainer';
import IngredientsContainer from './components/IngredientsContainer';
import "./App.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/recipes">
          <RecipesContainer />
        </Route>
        <Route exact path="/my_recipes">
          <MyRecipesContainer />
        </Route>
        <Route exact path="/ingredients">
          <IngredientsContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;