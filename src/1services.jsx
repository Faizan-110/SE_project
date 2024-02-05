import ReactDOM from 'react-dom';
// import { ReactDOM } from 'react';
import React from 'react';
import c2 from './resources/bg.png'
import { useState } from 'react';
import Registration from './.registration';
import registerr from './resources/register.png'
import transferr from './resources/transferr.png'
import verification from './resources/verification.png'
import Transfer from './1transfer';
import Verify from './.verification';

function Service() {



    function register(){
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
            <Registration></Registration>
            
            {/* <About></About> */}
          </React.StrictMode>
        );
    }

    function transfer(){
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
            <Transfer></Transfer>
            
            {/* <About></About> */}
          </React.StrictMode>
        );
    }
    // const [card, setcard] = useState([
    //     { service: 'Car Registration, Verification and Transfer.', img: <img src={c1} loading="lazy"></img> },
    //     // { service: 'Bike Registration, Verification and Transfer.', img: <img src={c2}></img> },
    //     // { service: 'Vagon Registration, Verification and Transfer.', img: <img src={c3}></img> },
    //     // { service: 'Truck Registration , Verification and Transfer.', img: <img src={c4}></img> },
    // ])


    function verify(){
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <React.StrictMode>
        <Verify></Verify>
        </React.StrictMode>
      );
    }
    return (<>

    <center>
    <h1><b>Online Services</b></h1>
     


            <div style={{display:'flex'}} className='ddiv'>
                <div style={{flexDirection:'column',flex:'7'}}>
                        <img style={{width:'100%', borderRadius:'20px'}} src={c2} loading="lazy"></img>
                </div>


                <div style={{flexDirection:'column',flex:'3',display:'flex'}}>
                <center><div onClick={()=>{register()}} className='ddiv2'><img style={{flex:2,FlexDirection:'column', width:'90px', height:'84px'}} src={registerr}></img><h4 style={{FlexDirection:'column'}}>Registration</h4></div></center>
                <center><div onClick={()=>{verify()}} className='ddiv2'><img style={{flex:2,FlexDirection:'column', width:'100px', height:'83px'}} src={verification}></img><h4 style={{}}>Verification</h4></div></center>
                <center><div onClick={()=>{transfer()}} className='ddiv2'><img style={{flex:2,FlexDirection:'column', width:'100px', height:'90px'}} src={transferr}></img><h4 style={{}}>Transfer</h4></div></center>
                </div>
                </div>
</center>
    
    </>);
}

export default Service;