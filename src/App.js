import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import mainPage from "./Screens/mainPage";
function App() {
  return (
    <Router>
      <Route path="/" component={mainPage} />
    </Router>
  );
}

export default App;
