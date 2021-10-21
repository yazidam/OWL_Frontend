import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Travaillesous from "./Screens/Travaillesous";
import Home from "./Screens/Home";
import Travaillesouslememedepartement from "./Screens/Travaillesouslememedepartement";
import Travailledanslamemeequipe from "./Screens/Travailledanslamemeequipe";
import Listemployee from "./Screens/Listemployee";

function App() {
  return (
    <Router>
      <Route path="/listemployee" component={Listemployee} />
      <Route
        path="/travailledanslamemeequipe"
        component={Travailledanslamemeequipe}
      />
      <Route
        path="/travaillesouslememedepartement"
        component={Travaillesouslememedepartement}
      />
      <Route path="/travaillesous" component={Travaillesous} />
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;
