import "./styles/text.css";
import Navbar from "./navbar";
import { BrowserRouter , Route , Routes} from "react-router-dom";
import Show from "./show";
import Login from "./login";
import Home from "./main";
import CreateAccount from "./AccountCreate";
import Perso from "./perso";
function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <div>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/show/:id' element={<Show/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/create' element={<CreateAccount/>}/>
            <Route path='/perso' element={<Perso/>}/>
          </Routes>
  </div>
    </BrowserRouter>
    )
}

export default App;
