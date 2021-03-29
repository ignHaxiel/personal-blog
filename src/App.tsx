import Article from "./Pages/ArticlePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";

function App() {
  return (
    <Router>
      <div>
        <div className="sidenav">
          <Link to="/">Home</Link>
          <Link to="/article">Article</Link>
          <Link to="/about">About</Link>
        </div>

        <Switch>
          <div className="main">
            <Route path="/home" component={Home} />
            <Route path="/article" component={Article} />
            <Route path="/about" component={About} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
