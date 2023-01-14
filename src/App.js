import {BrowserRouter as Router , Route  , Routes} from "react-router-dom"

//pages
import Home from "./pages/Home"

function App() {
  const AquaRoutes = [
    {
      name:"Home",
      path:"/",
      component:<Home/>
    }
  ]
  return (
    <Router>
      <Routes>
        {AquaRoutes.map((r,i)=>(
          <Route path={r.path} element={r.component} key={r.name}/>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
