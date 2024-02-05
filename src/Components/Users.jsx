import { useEffect, useState } from "react"
import style from "./homecrud.module.css"
import axios from "axios"
import { Link } from "react-router-dom"

const Users = () => {
    let [content, setContent] = useState([])

    useEffect(()=>{
       axios.get("http://localhost:3000/users")
       .then((res)=>{
        setContent(res.data)
        console.log(res.data)
        console.log("data is fetched")
       })
       .catch(()=>{
        console.log("Data is not fetched")
       })
    },[])

    let handleDelete=(id)=>{
         console.log("Data Deleted")
         console.log(id)
         axios.delete(`http://localhost:3000/users/${id}`)

         window.location.assign("/users")
    }

    return(
        <div id={style.usersContainer}>
            {
                content.map((x)=>{
                    return(
                      <div key={x.id}>
                        <div>Name: {x.name}</div>
                        <div>Student Id: {x.id}</div>
                        <div>Collage: {x.collage}</div>
                        <div>
                            <Link to={`/edit/${x.id}`}>
                             <button>Edit</button>
                            </Link>
                            <button onClick={()=>handleDelete(x.id)}>Delete</button>
                        </div>
                      </div>
                    )
                })
            }
        </div>
    )
}

export default Users
