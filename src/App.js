import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Travaillesous from "./Screens/Travaillesous";
import Home from "./Screens/Home";

function App() {
  return (
    <Router>
      <Route path="/travaillesous" component={Travaillesous} />
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;
