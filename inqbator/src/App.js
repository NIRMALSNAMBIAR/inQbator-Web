import { Home } from './Pages';
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/" element={''} />
      <Route exact path="/" element={''} />
      <Route exact path="/" element={''} />
    </Routes>
  )
}

function App() {
  return (
    <Router>

    <Navbar/>
    <Routing />
    
  </Router>
  );
}

export default App;
