import React,{useContext} from 'react'
import {Button} from "antd"
import HomeScreen from '../HomeScreen'
import "./UseCase.css"
import { GlobalContext } from '../../ContextApi/GlobalContext'
import { Link } from "react-router-dom";


function UseCase() {
  const {std} = useContext(GlobalContext)
  return (
    <div>
      <HomeScreen/>
      <center style={{
        marginBottom:"70px"
      }}>
        this is the Use case page
      </center>
     
  <center>
       
  {std.map(({id , name})=>(
        <div className="UseCasediv">
         <div>
          {name}
        </div>
        <div>
        <Button className="button1">
                <Link to={`/student/${id}`}>Edit</Link>
              </Button>
              <Button className="button2">Delete</Button>
        </div>
        </div>
     ))}
       
  </center>
     
    </div>
  )
}

export default UseCase
