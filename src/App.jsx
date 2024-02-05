import CreateUser from "./Components/CreateUser"
import Homecrud from "./Components/Homecrud"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Users from "./Components/Users"
import EditUser from "./Components/EditUser"

const App = () =>{
    return(
      <BrowserRouter>
        <Homecrud></Homecrud>
        <Routes>
            <Route path="/createusers" element={<CreateUser/>}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path="/edit/:index" element={<EditUser/>}></Route>
        </Routes>    
      </BrowserRouter>
    )
}

export default App