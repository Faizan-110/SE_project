import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from 'react-bootstrap/Card';
// import c1 from './resources/sc1.png'
import { useState } from 'react';
import Registration from './.registration';

function Carde(props) {

    function register(){
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
    
    
        <Registration></Registration>
        </React.StrictMode>
        );
    }
    return ( <>


        {/* <center> */}
        <div className="Card" 
        
        >
        
    <Card style={{ width: '18rem', margin:'2%', marginLeft:'20px'}}>
      <Card.Body >
                <Card.Text onClick={()=>{register()}}>{props.card.img}</Card.Text>
                <Card.Title>{props.card.service}</Card.Title>   
                   
      </Card.Body>
      </Card>

      <br></br><br></br><br></br><br></br>


        </div>
        {/* </center> */}
    </> );
}

export default Carde;