import Prompt from "./Pages/Prompt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './Pages/Home';
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ConsultList from "./Pages/ConsultList";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/signup" element={ <Signup></Signup> }/>
          <Route path="/login" element={ <Login></Login> }/>
          <Route path="/prompt" element={<Prompt></Prompt>}/>
          <Route path="/consultList" element={<ConsultList></ConsultList>}/>
        </Routes>
      </div>

    </Router>

  );
}

export default App;
