import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./pages/home/Home";
import TopBar from "./components/Topbar/TopBar";
import Single from "./pages/single/Single.js";
import Write from "./pages/Write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { Context } from "./context/Context";




function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/write" element={user ? <Write /> : <Register/>}/>
          <Route path="/settings" element={user ? <Settings /> : <Register/>}/>
          <Route path="/register" element={user ? <Home /> : <Register/>}/>
          <Route path="/login" element={user ?<Home/> : <Login />}/>
          <Route path="/post/:postId" element={<Single />}/>
    </Routes>
    </BrowserRouter>
      
  );
}

export default App;
