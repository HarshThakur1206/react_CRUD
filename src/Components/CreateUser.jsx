import { useState } from "react"
import style from "./homecrud.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreateUser = () =>{

    let [name, setName] = useState("")
    let [id, setId] = useState("")
    let [collage, setCollage] = useState("")
    let navigate = useNavigate()

    let nameHandle=(e)=>{
       setName(e.target.value)
    }

    let idHandle=(e)=>{
       setId(e.target.value)
    }

    let collageHandle=(e)=>{
        setCollage(e.target.value)
    }

    let formHandle=()=>{
          let payload = {name, id, collage}
          console.log(name, id, collage)

          axios.post("http://localhost:3000/users", payload)
          .then(()=>{
            console.log("data posted")
          })
          .catch(()=>{
            console.log("data is not posted")
          })

          navigate("/users")
    }

    return(
        <div id={style.createuserContainer}>
            <section>
                <label htmlFor="">Student Name:</label>
                <input type="text" onChange={nameHandle} />
                <br />
                <br />
                <label htmlFor="">Student Id:</label>
                <input type="number" onChange={idHandle} />
                <br />
                <br />
                <label htmlFor="">Student Collage:</label>
                <input type="text" onChange={collageHandle} />
                <br />
                <br />
                <button type="submit" onClick={formHandle}>Submit</button>
            </section>
        </div>
    )
}

export default CreateUser