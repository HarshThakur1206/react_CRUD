import { useEffect, useState } from "react"
import axios from "axios"
import style from "./homecrud.module.css"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const EditUser = ()=>{   

    let [name, setName] = useState("")
    let [id, setId] = useState("")
    let [collage, setCollage] = useState("")

    let {index} = useParams()
    let navigate = useNavigate()

    useEffect(()=>{
      axios.get(`http://localhost:3000/users/${index}`)
      .then((res)=>{
        setName(res.data.name)
        setId(res.data.id)
        setCollage(res.data.collage)
      })
      .catch(()=>{
        console.log("Did not Got the data")
      })
    },[])

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

          axios.put(`http://localhost:3000/users/${index}`, payload)
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
                <input type="text" onChange={nameHandle} value={name} />
                <br />
                <br />
                <label htmlFor="">Student Id:</label>
                <input type="number" onChange={idHandle} value={id} />
                <br />
                <br />
                <label htmlFor="">Student Collage:</label>
                <input type="text" onChange={collageHandle} value={collage} />
                <br />
                <br />
                <button type="submit" onClick={formHandle}>Submit</button>
            </section>
        </div>
    )
}

export default EditUser