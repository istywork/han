import MainPage from "./components/MainPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <MainPage />
    //     </Route>
    //   </Switch>
    // </Router>
    <MainPage />
  );
}

export default App;
