import React,{useContext} from 'react'
import { Button } from "antd";
import { GlobalContext } from '../../ContextApi/GlobalContext'
import {v4 as uuid} from "uuid"
import { Link,useHistory } from 'react-router-dom';


const AddStudent = () => {
  const hist = useHistory()
  const [input,setInput]= React.useState("")
  const { addStudent, std } = useContext(GlobalContext)

  const addingNewStudent = () => {
    const newStudent = {
      id : uuid(),
      name : input,
    }

    addStudent({ id: uuid(), name: input })
  }
  return (
    <div>
      <center 
        style={{
          marginTop: "40px",
          marginBottom: "50px",
        }}
      >
        Add Student
      </center>
      <center>
        <div>
          
        <input style={{
          width:"500px",
          height:"40px",
          marginBottom:"20px",
          paddingLeft:"20px"
        }}
        placeholder="Add Name"
        value={input}
        onChange={(e)=>{
          setInput(e.target.value)
        }}
        
        />
        </div>
        <div>
          <Button className="button1">
            <Link 
             onClick={()=>{
               addingNewStudent()
               hist.push("/usecase")
             }}
            >
            Accept
            </Link>
            
          </Button>
          <Button className="button2">
            
          <Link onClick={()=>{
            hist.push("/usecase")
          }}>
          Cancel
          </Link>
          </Button>

        </div>
      </center>
    </div>
  )
}

export default AddStudent
