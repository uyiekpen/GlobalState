import React from 'react'
import 'antd/dist/antd.css'
import { Button } from 'antd';
import HomeScreen from './HomeScreen';



function BodyComp() {
  const [Good , setgood]= React.useState(true)

  const on = () => {
    setgood(!Good);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("gamePlay")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.log(err)
    );
  };

  
  const off = ()=>{
    setgood(!Good)
    let video = document.getElementsByClassName("gameplay")[0]
    video.srcObject.getTracks()[0].stop()
  }

  return (

    <div>
      <HomeScreen/>
      <center>
        <div style ={{
 
  
        }}>
         <video
           height="70%"
           width="100%"
           muted
           autoPlay
           className="gameplay"
         />
        </div>
        {Good ?(  <Button onClick={on} type="primary">Start</Button>):
        (<Button onClick={off} type="primary">Stop</Button>)}
      
        

      </center>
    </div>
  )
}

export default BodyComp
