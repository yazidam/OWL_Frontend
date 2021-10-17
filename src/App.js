import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Travaillesous from "./Screens/Travaillesous";
function App() {
  return (
    <Router>
      <Route path="/" component={Travaillesous} />
    </Router>
  );
}

export default App;
