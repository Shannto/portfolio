import React from "react";
import Pic from '../image/one.png';
export default function Home() {
  return (
    <div >
        
      
        <div className="col">

         
          <br />
          <br />
          <br />
            <img src={Pic} alt="" style={{width:140,height:150,borderRadius: "50%"}} />
          <h1 className="text-center display-3">Tanvir Hossen Shanto</h1>
        </div>
      
      
        <p className="text-center">Studying in ICT,  learning Javascript, done some projects.</p>
      </div>
    
  );
}
