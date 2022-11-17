import { BrowserRouter } from "react-router-dom";
import { Router } from "./containers/Router";
import Loader from "./views/components/Loader";

const App = () => (
  <main className="App">
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </main>
);

export default App;
