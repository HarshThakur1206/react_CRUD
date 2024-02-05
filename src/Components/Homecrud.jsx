import CreateUser from "./CreateUser"
import Users from "./Users"
import style from "./homecrud.module.css"
import { Link } from "react-router-dom"

const Homecrud=()=>{
    return(
        <div id={style.homeContainer}>
            <Link to={"/createusers"}>
              <div>Create Students</div>
            </Link>
            <Link to={"/users"}>
              <div>Students details</div>
            </Link>
        </div>
    )
}

export default Homecrud