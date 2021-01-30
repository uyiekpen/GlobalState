import React from 'react'
import { Button } from "antd";
import { Link,useHistory } from 'react-router-dom';


const EditStudent = () => {
  const hist = useHistory()
  const [input,setInput]= React.useState("")


  return (
    <div>
      <center 
        style={{
          marginTop: "40px",
          marginBottom: "50px",
        }}
      >
        Edit Student
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
           to="/student/1"
            >
            Accept
            </Link>
            
          </Button>
          <Button className="button2">
            
          <Link 
          onClick={() => {
          hist.push("/usecase");
          }}>
          Cancel
          </Link>
          </Button>

        </div>
      </center>
    </div>
  )
}

export default EditStudent
