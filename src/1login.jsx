
// import React from 'react';
import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
// import  ReactDOM  from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './1footer';
import NavB from './1navbar';
import NavBservice from './resources/subpages/1navservice';
import Registration from './.registration';

function Log() {
    const [u_email, setu_email] = useState('');
    const [u_pswd, setu_pswd] = useState('');
    const [u_name, setu_name] = useState([]);
    const [msg,setmsg] = useState ([]);

    function login() {
        let str3 ="SELECT u_name FROM u_tbl WHERE u_email = '"+u_email+"' AND u_pswd = '"+u_pswd+"';";
        Axios.get("http://localhost:3004/api/DataQuery", { params: { sql: str3 } }).then(
            (res) => {
                if(res.data.length > 0){
                 setu_name(res.data);
                {
                 const root = ReactDOM.createRoot(document.getElementById('root'));
                 root.render(
                   <React.StrictMode>
                     <Registration></Registration>
                   </React.StrictMode>
                 );
                 }
                }

                else{
                    setmsg('* Wrong Email or Password')
                 }
            }

        );
    }

    return (
        <>
                
                {msg}
          
            <center>
                <NavB />
                <Form className='logdiv'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setu_email(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setu_pswd(e.target.value)} />
                    </Form.Group>

                    {/* {
                    u_name.map((item, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Alert variant="success" style={{ width: 'auto', margin: '5px' }}>
                            Name: {item.u_name}
                        </Alert>
                    </div>
                ))} */}

                        <div style={{color:'red'}}>{msg}</div>


                    <center>
                        <Button className='loginbtn' onClick={login}>Log in</Button>
                    </center>
                </Form>
                <Footer />
            </center>
        </>
    );
}

export default Log;
