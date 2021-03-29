import Article from "./Pages/ArticlePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className="sidenav">
          <Link to="/article">Article</Link>
        </div>

        <Switch>
          <div className="main">
            <Route path="/article" component={Article} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
