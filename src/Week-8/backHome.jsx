import { HashRouter,Routes,Route } from "react-router-dom";
import Create from "./create";
import NavBar from "./routingnavBar";
import Deposite from "./deposite";
import Withdraw from "./withdraw";
import AllData from "./alldata";
import userContext from "./context";

export default function Home() {
  
  return(
    <div>
      <HashRouter>
        <userContext.Provider value={{person:[{
          name:'Hems', email:'hems@gmail.com', balance:100
        }]}}>
        <NavBar />
        <Routes>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/deposite" element={<Deposite />}></Route>
          <Route path="/withdraw" element={<Withdraw />}></Route>
          <Route path="/alldata" element={<AllData />}></Route>
        </Routes>
        </userContext.Provider>
      </HashRouter>
    </div>
  )
}
